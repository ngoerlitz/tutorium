---
title: "Tutorium 3"
---

# Prozesssynchronisation

## Das Problem
Wir nehmen folgenden C-Code als Beispiel und schauen uns die damit verbundenen Probleme der Prozesssynchronisation an. Wir nehmen dabei an, dass die Funktionen `void t1() {...}` und `void t2() {...}` in separaten Threads (d.h. parallel) laufen. 

```c showLineNumbers
size_t global_var = 0;

void t1() {
    for (size_t i = 0; i < 100000; i++) {
        global_var++;
    }
}

void t2() {
    for (size_t i = 0; i < 100000; i++) {
        global_var++;
    }
}
```

<details>
  <summary>Vollständiger Code</summary>
  <div>
    ```c showLineNumbers
    #include <stdio.h>
    #include <pthread.h>
    
    #define ITERATIONS 100000
    
    size_t global_var = 0;

    void* t1() {
        for (size_t i = 0; i < ITERATIONS; i++) {
            global_var++;
        }
    
        return NULL;
    }
    
    void t2() {
        for (size_t i = 0; i < ITERATIONS; i++) {
            global_var++;
        }
    }
    
    int main() {
        pthread_t thread;
        pthread_create(&thread, NULL, t1, NULL);
        t2();
        pthread_join(thread, NULL);
    
        const size_t expected = ITERATIONS * 2;
        printf("Ergebnis: %lu\nErwartet: %lu\n", global_var, expected);
    }
    ```
  </div>
</details>

Probiert es ruhig selber aus, um euch von dem Problem zu überzeugen! Das Programm lässt sich mit `gcc main.c -o threading -lpthread` kompilieren und mit `./threading` ausführen. Ihr könnt auch gerne im `#define` die Anzahl an Iterationen der beiden Schleifen anpassen. 

Bei mir erhalte ich nach wiederholter Ausführung folgende Ergebnisse: (_Getestet unter gcc 12.2.0 (Debian 12.2.0-14)_)
```
Ergebnis: 131284
Erwartet: 200000
----------------
Ergebnis: 131119
Erwartet: 200000
----------------
Ergebnis: 139837
Erwartet: 200000
```

Wir sehen also, dass das tatsächliche Ergebnis etwas durcheinander ist und insb., dass wir uns nicht darauf verlassen können das korrekte Ergebnis zu erhalten!

### Das Wieso
Jetzt interessiert es sicherlich einige, wieso dieses Problem auftritt. Um das genauer zu verstehen, müssen wir jetzt noch eine Ebene nach unten - zum Assembler. Mithilfe des Befehls `objdump threading -D` können wir das vorher kompilierte Programm _disassemblieren_ und den darin enthaltenen Maschinencode auslesen. Unten dargestellt ist die Funktion `t1`. Diese ist sehr ähnlich zu `t2`, weshalb ich nur eine davon hier präsentiere. 

_Intel x86, gcc 12.2.0 (Debian 12.2.0-14)_

```asm {7-9}
0000000000001159 <t1>:
1159:       55                      push   %rbp
115a:       48 89 e5                mov    %rsp,%rbp
115d:       48 c7 45 f8 00 00 00    movq   $0x0,-0x8(%rbp)
1164:       00
1165:       eb 17                   jmp    117e <t1+0x25>
1167:       48 8b 05 c2 2e 00 00    mov    0x2ec2(%rip),%rax        # 4030 <global_var>
116e:       48 83 c0 01             add    $0x1,%rax
1172:       48 89 05 b7 2e 00 00    mov    %rax,0x2eb7(%rip)        # 4030 <global_var>
1179:       48 83 45 f8 01          addq   $0x1,-0x8(%rbp)
117e:       48 81 7d f8 9f 86 01    cmpq   $0x1869f,-0x8(%rbp)
1185:       00
1186:       76 df                   jbe    1167 <t1+0xe>
1188:       b8 00 00 00 00          mov    $0x0,%eax
118d:       5d                      pop    %rbp
118e:       c3                      ret
```

Für alle, die sich bisher noch nicht groß mit Assembly beschäftigt haben - keine Sorge - wir besprechen das Wichtigste gemeinsam. Die drei hervorgehobenen Zeilen schauen wir uns genauer an. Diese entsprechen in C unserem Befehl `global_var++`. 

Für unser Beispiel nehmen wir an, dass in der Variable `global_var` der Wert 5 steht.

- **1167**: Lädt den aktuellen Wert der Variable `global_var` (5) in das Register `rax`. 
- **116e**: Inkrementiert den Wert im Register `rax` um 1 (= 6).
- **1172**: Schreibt den neuen Wert in zurück in die Variable `global_var` (6).

Angenommen der Thread wird nun zwischen `1167` und `116e` unterbrochen. Die Werte im Register (insb. `rax` (5)) werden gespeichert und der andere Thread kommt zur Ausführung. Die zweite Funktion `t2` tut jetzt dasselbe, lädt den Wert 5 aus der Variable `global_var` und schreibt die inkrementierte Variable (6) zurück. Jetzt wird `t2` wieder unterbrochen und wir kehren zur Ausführung von `t1` zurück. Die Werte der Register werden geladen und der Thread setzt die Ausführung bei `116e` fort. Wir merken jetzt aber eine Diskrepanz! Der Wert, den `t1` vorher in `rax` geschrieben hatte, nämlich 5, stimmt nun nicht mehr mit dem eigentlichen Wert der Variable `global_var` überein - dieser ist jetzt nämlich 6. Wir inkrementieren den Wert im Register `rax` um eins und erhalten ebenfalls 6. Dies schreiben wir zurück in die Variable `global_var`. Hier steht nun also eine 6, obwohl wir zweimal hätten inkrementieren müssen (das Ergebnis in `global_var` müsste nach der o.g. Ausführung eigentlich 7 sein)! 

Wir sprechen in diesem Fall von einer **Race Condition**. 

:::warning[Wichtig]
Der o.g. Text dient nur als Beispiel! Die Ausführungsreihenfolge kann sich pro Ausführung unterscheiden, weshalb wir auch (fast) immer unterschiedliche Werte erhalten.  
:::

### Die Lösung
Um das Problem zu lösen, benötigen wir Synchronisation. Wie diese genau aussehen schauen wir uns nun anhand der weiteren Beispiele an. 


## Synchronisation
### Mutex
Ein Mutex, kurz für "Mutual Exclusion", ist eine Synchronisationsprimitive, die in der Programmierung verwendet wird, um zu verhindern, dass zwei Threads gleichzeitig auf eine gemeinsame Ressource zugreifen. Man kann sich das vorstellen wie ein Schlüssel zu einem Raum: Solange ein Thread (also ein Teil eines Programms) diesen "Schlüssel" hat, kann kein anderer Thread in den "Raum" eintreten und die Ressource verwenden. Das verhindert, dass Daten durcheinander geraten oder beschädigt werden, wenn mehrere Threads versuchen, gleichzeitig dieselbe Ressource zu lesen oder zu schreiben. Nachdem der Thread, der den Mutex hält, fertig ist, gibt er den "Schlüssel" frei, sodass ein anderer Thread Zugang erhalten kann.

<details>
  <summary>Beispiel</summary>
  <div>
    ```c showLineNumbers
    #include <stdio.h>
    #include <pthread.h>
    
    pthread_mutex_t lock;
    int counter = 0;
    
    void* count() {
        pthread_mutex_lock(&lock);              // Den Mutex sperren
        counter += 1;                           // Zugriff auf die gemeinsame Variable
        pthread_mutex_unlock(&lock);            // Den Mutex freigeben
        return NULL;
    }
    
    int main() {
        pthread_t t1, t2;
        
        pthrad_mutex_init(&lock);               // Den Mutex initialisieren
    
        pthread_create(&t1, NULL, count, NULL); // Thread 1 erstellen
        pthread_create(&t2, NULL, count, NULL); // Thread 2 erstellen
    
        pthread_join(t1, NULL);                 // Auf Beendigung von Thread 1 warten
        pthread_join(t2, NULL);                 // Auf Beendigung von Thread 2 warten
    
        pthread_mutex_destroy(&lock);
        
        printf("Wert des Counters: %d\n", counter);
    }
    ``` 
    </div>
</details>

### Signal

### Beispiel
Im Folgenden betrachten wir den Ablauf zwischen Verkäufern und Kunden eines doenerladens. Der dazugehörige Pseudocode ist gegeben:
```c showLineNumbers
Variablen:
int doener = 0;

Verkäufer:
while(true) {
    fleischSchneiden();
    salatUndSauce();
    doener++;
}
```

Bevor wir loslegen eine kurze Zusammenfassung der genutzten Terminologie:
- **Spurious Wakeups**: ...


Wir machen uns zunächst keine Sorgen über zu viel produzierte doener, sondern wollen lediglich die geteilten Variablen schützen. Wir definieren dafür sog. kritische Bereiche, die durch Synchronisationsprimitive geschützt werden. Zunächst möchten wir, dass nur ein Verkäufer zu jeder Zeit den doenerspieß bearbeiten und die Anzahl der doener erhöhen darf. Dafür eigenen sich zwei `Mutexe`, die den jeweiligen kritischen Bereich schützen. Unser Pseudocode sieht nun aus wie folgt:

```c showLineNumbers {3,4,8,10,14,16}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    unlock(doener_m);
}
```

Nun kommen Kunden (in unregelmäßigen Abständen) zu unserem doenerladen um doener zu kaufen. Logischerweise können sie nur dann einen kaufen, wenn auch einer aktuell existiert. Ansonsten müssen die Kunden warten. Unserem Pseudocode fügen wir zunächst den Kunden hinzu:

```c showLineNumbers {6-8}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;

Kunde:
doener--;
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    unlock(doener_m);
}
```

Wir müssen nun den neuen kritischen Bereich identifizieren und schützen! Dafür nutzen wir den bereits erstellten Mutex `doener_m` um den kritischen Bereich des Kundenprozesses zu schützen:

```c showLineNumbers {7,10}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;

Kunde:
lock(doener_m);
doener--;
unlock(doener_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    unlock(doener_m);
}
```

Ein Kunde sollte sich aber offensichtlich nur einen Döner nehmen können, wenn auch einer existiert. **Hinweis**: Beachtet, dass der `lock` über dem `if (doener > 0)` platziert worden ist. Der Variablenzugriff innerhalb der if-Abfrage ist bereits kritisch und muss entsprechend geschützt werden. 

```c showLineNumbers {7,8,12}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;

Kunde:
lock(doener_m);
if (doener > 0) {
    doener--;
    unlock(doener_m);
    doenerEssen();
}

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    unlock(doener_m);
}
```

Der Kunde soll allerdings warten, bis ein Döner fertig ist. Wir nutzen hierfür ein Signal, um dem Kunden über das Ereignis zu informieren. 

```c showLineNumbers {5,9-11,26}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;
Signal doener_fertig_s;

Kunde:
lock(doener_m);
if (doener <= 0) {
    wait(doener_fertig_s);
}
doener--;
unlock(doener_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    signal(doener_fertig_s);
    unlock(doener_m);
}
```

Während der Kunde auf das Signal wartet (Zeile 10) besitzt dieser noch den Lock der geteilten Variable `doener_m`. Es kann also kein weiterer Döner produziert werden! Wir müssen den Lock zunächst freigeben, damit der Verkäufer die Anzahl der Döner inkrementieren kann. 

```c showLineNumbers {10,13}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;
Signal doener_fertig_s;

Kunde:
lock(doener_m);
if (doener <= 0) {
    unlock(doener_m);
    wait(doener_fertig_s);
}
lock(doener_m);
doener--;
unlock(doener_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    signal(doener_fertig_s);
    unlock(doener_m);
}
```

Wir haben jetzt das Problem der spurious Wakeups (siehe oben). Angenommen der Thread wacht in Zeile 11 wieder auf, ohne, dass die Bedingung erfüllt worden ist (es existiert noch immer kein Döner). Wir nutzen jedoch die geteilte Variable `doener` um diesen Fall zu überprüfen. Jedoch greifen wir nun auf die Variable zu, ohne den Lock zu besitzen. Dies müssen wir ändern. Wir ersetzen zunächst das `if` durch ein `while`. Dadurch wird beim Aufwachen überprüft, ob es überhaupt einen Döner gibt. Da wir dazu auf die geteilte Variable zugreifen, müssen wir uns vorher wieder den Lock holen (Zeile 12). 

```c showLineNumbers {9,12}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;
Signal doener_fertig_s;

Kunde:
lock(doener_m);
while (doener <= 0) {
    unlock(doener_m);
    wait(doener_fertig_s);
    lock(doener_m);
}
doener--;
unlock(doener_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    signal(doener_fertig_s);
    unlock(doener_m);
}
```

Das sieht doch schon ganz brauchbar aus! Uns fehlt jetzt aber noch ein Teil. Was passiert, wenn mehrere Döner gleichzeitig fertig werden und mehrere Kunden gerade warten? Angenommen wir haben die folgende Situation:

- `doener == 0` (es gibt aktuell keine fertigen Döner)
- Kunde 1 (K1) rechnet bis vor der Zeile 11 und wird dann vom Betriebssystem rausgenommen. 
- Kunde 2 (K2) kommt zur selben Stelle wie K1. 

Beide Kunden befinden sich also zwischen `unlock(doener_m)` und `wait(doener_fertig_s)`. Der Verkäufer produziert nun zwei weitere Döner und erhöht entsprechend die `doener` Variable auf 2. Das Signal `doener_fertig_s` wird (zweimal) auf `true` gesetzt. Es gibt jetzt **2 Döner** und **2 Kunden**. Das Betriebssystem lässt nun K1 und K2 wieder Rechnen. Der Kunde K1 kommt problemlos durch das `wait(doener_fertig_s)` der Zeile 11, da das Signal bereits `true` ist. K1 setzt das Signal jetzt auf `false`. K2 wartet jetzt am Signal in Zeile 11, da dieses auf `false` ist, obwohl noch immer ein fertiger Döner vorhanden ist. Ein Döner wird also verschwendet 😭. Das können wir nicht auf uns sitzen lassen!

Eine mögliche Lösung ist es daher, den gesamten Kundenbereich als kritisch zu definieren. Damit erlauben wir immer nur einem Kunden gleichzeitig in diesen Bereich einzutreten. Wir fügen dazu einen neuen Mutex hinzu:

```c showLineNumbers {5,9,18}
Variablen:
int doener = 0;
Mutex spieß_m;
Mutex doener_m;
Mutex kunde_halt_m;
Signal doener_fertig_s;

Kunde:
lock(kunde_halt_m);
lock(doener_m);
while (doener <= 0) {
    unlock(doener_m);
    wait(doener_fertig_s);
    lock(doener_m);
}
doener--;
unlock(doener_m);
unlock(kunde_halt_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    signal(doener_fertig_s);
    unlock(doener_m);
}
```

Jetzt wollen wir noch verhindern, dass unendlich viele Döner produziert werden, ohne, dass die Kunden dafür da sind. Ähnlich wie bereits beim Kunden fügen wir nun die dafür notwendigen Synchronisationsprimitive hinzu. Die Beschreibung der Aufgaben habe ich im Pseudocode vermerkt:

```c showLineNumbers {3,7,8,10,13-16,32-41}
Variablen:
int doener = 0;
int kunden = 0;             // Neue Variable um Anzahl der Kunden zu speichern
Mutex spieß_m;
Mutex doener_m;
Mutex kunde_halt_m;
Mutex verkaeufer_halt_m;    // Neuer Mutex
Mutex kunden_m;             // Neuer Mutex um Zugriff auf int kunden zu schützen
Signal doener_fertig_s;
Signal neuer_kunde_s;       // Neues Signal um neuen Kunden zu signalisieren

Kunde:
lock(kunden_m);             // Zugriff auf geteilte Variable int kunden schützen
kunden++;                   // Anzahl der Kunden erhöhen
signal(neuer_kunde_s);      // Dem Verkäufer signalisieren, dass ein neuer Kunde da ist
unlock(kunden_m);           // Zugriff auf geteilte Variable int kunden freigeben

lock(kunde_halt_m);
lock(doener_m);
while (doener <= 0) {
    unlock(doener_m);
    wait(doener_fertig_s);
    lock(doener_m);
}
doener--;
unlock(doener_m);
unlock(kunde_halt_m);
doenerEssen();

Verkäufer:
while(true) {
    lock(verkaeufer_halt_m);    // Nur einen Verkäufer in diesen Bereich lassen
    lock(kunden_m);             // Zugriff auf geteilte Variable int kunden schützen
    while (kunden <= 0) {       // Verkäufer wartet, bis ein Kunde angekommen ist
        unlock(kunden_m);       // Mutex freigeben um Zugriff darauf zu erlauben
        wait(kunden_m);         // Warten, bis ein Kunde signalisiert hat (Zeile 15)
        lock(kunden_m);         // Spurious Wakeups
    }
    kunden--;                   // Anzahl wartender Kunden dekrementieren
    unlock(kunden_m);           // Zugriff auf int kunden freigeben
    unlock(verkaeufer_halt_m);  // Andere Verkäufer dürfen nun auch auf Kunden warten

    lock(spieß_m);
    fleischSchneiden();
    unlock(spieß_m);
    
    salatUndSauce();
    
    lock(doener_m);
    doener++;
    signal(doener_fertig_s);
    unlock(doener_m);
}
```

## POSIX Threads
### Unterschied zwischen Threads und Prozessen
Bei `pthread` laufen die Threads im selben Adressraum, wohingegen Prozesse jeweils einen eigenen Adressraum besitzen. Threads teilen sich jedoch nicht alles! Jeder Thread besitzt bspw:
- Einen eigenen Stack (eigenen Stack-Pointer)
- Einen eigenen PC (Program Counter)

Globale Variablen und per `malloc` angeforderter Speicher kann bspw. von jedem Thread gelesen und geschrieben werden. 

Jeder `pthread`-Thread führt eine Funktion `void* func(void* args) {...}` aus und endet entweder mit `pthread_exit`, oder wenn die Funktion terminiert. Ein Thread kann einen Pointer als Rückgabewert und als Eingabewert bekommen. Hierdurch lassen sich Argumente, sowie Rückgabewerte übergeben. 

### Beispiel
Gegeben ist das folgende Ping/Pong Programm. Wir wollen dies nun mithilfe der `pthread` POSIX Bibliothek so implementieren, dass im Wechsel "ping" und "pong" ausgegeben wird. Spurious Wakeups sollen berücksichtigt werden!

```c showLineNumbers
#include <stdio.h>
#include <stdlib.h>

enum action {
    PING,
    PONG
};

int main() {
    enum action *nextAction = malloc(sizeof(enum action));
    *nextAction = PING;
    
    thread_ping(&nextAction);
    thread_pong(&nextAction);
    
    free(nextAction);
}

void* thread_ping(void* nAction) {
    enum action* nextAction = nAction;
    
    while (1) {
        printf("Ping\n");
        *nextAction = PONG;
    }
}

void* thread_pong(void* nAction) {
    enum action* nextAction = nAction;
    
    while (1) {
        printf("Pong\n");
        *nextAction = PING;
    }
}
```

<details>
  <summary>Lösung (Probiert es aber ruhig noch mal selbst)</summary>
  <div>

    ```c showLineNumbers {58-60,76-78}
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <pthread.h>
    
    void* thread_ping(void* nAction);
    void* thread_pong(void* nAction);
    
    enum action {
        PING,
        PONG
    };
    
    pthread_mutex_t nextActionMutex;    // Zugriff auf nextAction schützen
    pthread_cond_t nextActionSignal;    // Signal um nächstes "Event aufzurufen"
    
    int main() {
        enum action *nextAction = malloc(sizeof(enum action));
        *nextAction = PING;
    
        pthread_t ping_thread, pong_thread;
    
        pthread_mutex_init(&dummyMutex, NULL);          // Initialisiere den Mutex dummyMutex
        pthread_mutex_init(&nextActionMutex, NULL);     // Initialisiere den Mutex nextActionMutex
        pthread_cond_init(&nextActionSignal, NULL);     // Initialisiere das Signal nextActionSignal
    
        // Erzeuge die beiden threads (als Argument erhalten beide nextAction)
        pthread_create(&ping_thread, NULL, thread_ping, nextAction);
        pthread_create(&ping_thread, NULL, thread_pong, nextAction);
    
        /**
         *  Den Teil erreichen wir nie, da die beiden oberen Threads nicht terminieren!
         *  Trotzdem wäre das der Weg korrekt aufzuräumen. 
         */
    
        // Warte darauf, dass beide Prozesse terminieren
        pthread_join(ping_thread, NULL);
        pthread_join(pong_thread, NULL);
    
        // Die zuvor erzeugten Synchronisationsprimitive wieder zerstören (Speicher freigeben)
        pthread_mutex_destroy(&nextActionMutex);
        pthread_cond_destroy(&nextActionSignal);
    
        free(nextAction);
    }
    
    void* thread_ping(void* nAction) {
        enum action* nextAction = nAction;
    
        while (1) {
            printf("Ping\n");
            sleep(1);
    
            pthread_mutex_lock(&nextActionMutex);       // Zugriff auf nextAction schützen
            *nextAction = PONG;
            pthread_cond_signal(&nextActionSignal);     // Dem anderen (wartendem) Thread bescheidgeben
    
            while(*nextAction != PING) {
                pthread_cond_wait(&nextActionSignal, &nextActionMutex); // Auf Signal warten
            }
            pthread_mutex_unlock(&nextActionMutex);     // Zugriff auf nextAction freigeben
        }
    }
    
    void* thread_pong(void* nAction) {
        enum action* nextAction = nAction;
    
        while (1) {
            printf("Pong\n");
            sleep(1);
    
            pthread_mutex_lock(&nextActionMutex);       // Zugriff auf nextAction schützen
            *nextAction = PING;
            pthread_cond_signal(&nextActionSignal);     // Dem anderen (wartendem) Thread bescheidgeben
    
            while(*nextAction != PING) {
                pthread_cond_wait(&nextActionSignal, &nextActionMutex); // Auf Signal warten
            }
            pthread_mutex_unlock(&nextActionMutex);     // Zugriff auf nextAction freigeben
        }
    }
    ```
  </div>
</details>

Ich weiß, dass es diese Woche ziemlich viel Inhalt war. Keine Sorge, wir sind gleich am Ende! Ich möchte zum Schluss nur noch mal auf die beiden hervorgehobenen Zeilen eingehen:
```c
while(*nextAction != PING) {
    pthread_cond_wait(&nextActionSignal, &nextActionMutex);
}
pthread_mutex_unlock(&nextActionMutex);
```

Wir haben oben gesehen, dass wir (um spurious Wakeups) zu verhindern das folgende Konstrukt verwenden:
```c
lock(mutex_x);
while (x > 0) {
    unlock(mutex_x);
    wait(signal_y);
    lock(mutex_x);
}
unlock(mutex_x);
```

Wieso benötigen wir das unter Verwendung von `pthread` nicht? Das liegt ganz einfach daran, dass sich die Funktion `pthread_cond_wait` bereits um diesen Fall kümmert! Wie ihr sehen könnt, übergeben wir sowohl die "condition Variable" (`pthread_cond_t`) als auch den dazugehörigen Mutex (`pthread_mutex_t`). Damit wir uns nicht darum kümmern müssen, implementiert die Funktion `pthread_cond_wait` intern bereits dieses Konstrukt. Beim Aufrufen der Funktion wird also zunächst der übergebene Mutex freigegeben, danach wird auf das Signal gewartet. Sobald das Signal empfangen wurde, wird der Mutex wieder "gelocked" und die Funktion terminiert.

"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[352],{2004:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=i(7624),d=i(2172);const s={title:"Tutorium 3"},t="Prozesssynchronisation",a={id:"spr/tut3",title:"Tutorium 3",description:"Das Problem",source:"@site/docs/spr/tut3.md",sourceDirName:"spr",slug:"/spr/tut3",permalink:"/tutorium/docs/spr/tut3",draft:!1,unlisted:!1,editUrl:"https://github.com/ngoerlitz/tutorium/docs/spr/tut3.md",tags:[],version:"current",frontMatter:{title:"Tutorium 3"},sidebar:"tutorialSidebar",previous:{title:"Tutorium 2",permalink:"/tutorium/docs/spr/tut2"},next:{title:"Tutorium 4",permalink:"/tutorium/docs/spr/tut4"}},l={},o=[{value:"Das Problem",id:"das-problem",level:2},{value:"Das Wieso",id:"das-wieso",level:3},{value:"Die L\xf6sung",id:"die-l\xf6sung",level:3},{value:"Synchronisation",id:"synchronisation",level:2},{value:"Mutex",id:"mutex",level:3},{value:"Signal",id:"signal",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"POSIX Threads",id:"posix-threads",level:2},{value:"Unterschied zwischen Threads und Prozessen",id:"unterschied-zwischen-threads-und-prozessen",level:3},{value:"Beispiel",id:"beispiel-1",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"prozesssynchronisation",children:"Prozesssynchronisation"}),"\n",(0,r.jsx)(n.h2,{id:"das-problem",children:"Das Problem"}),"\n",(0,r.jsxs)(n.p,{children:["Wir nehmen folgenden C-Code als Beispiel und schauen uns die damit verbundenen Probleme der Prozesssynchronisation an. Wir nehmen dabei an, dass die Funktionen ",(0,r.jsx)(n.code,{children:"void t1() {...}"})," und ",(0,r.jsx)(n.code,{children:"void t2() {...}"})," in separaten Threads (d.h. parallel) laufen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:"size_t global_var = 0;\n\nvoid t1() {\n    for (size_t i = 0; i < 100000; i++) {\n        global_var++;\n    }\n}\n\nvoid t2() {\n    for (size_t i = 0; i < 100000; i++) {\n        global_var++;\n    }\n}\n"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Vollst\xe4ndiger Code"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:'#include <stdio.h>\n#include <pthread.h>\n\n#define ITERATIONS 100000\n\nsize_t global_var = 0;\n\nvoid* t1() {\n    for (size_t i = 0; i < ITERATIONS; i++) {\n        global_var++;\n    }\n\n    return NULL;\n}\n\nvoid t2() {\n    for (size_t i = 0; i < ITERATIONS; i++) {\n        global_var++;\n    }\n}\n\nint main() {\n    pthread_t thread;\n    pthread_create(&thread, NULL, t1, NULL);\n    t2();\n    pthread_join(thread, NULL);\n\n    const size_t expected = ITERATIONS * 2;\n    printf("Ergebnis: %lu\\nErwartet: %lu\\n", global_var, expected);\n}\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Probiert es ruhig selber aus, um euch von dem Problem zu \xfcberzeugen! Das Programm l\xe4sst sich mit ",(0,r.jsx)(n.code,{children:"gcc main.c -o threading -lpthread"})," kompilieren und mit ",(0,r.jsx)(n.code,{children:"./threading"})," ausf\xfchren. Ihr k\xf6nnt auch gerne im ",(0,r.jsx)(n.code,{children:"#define"})," die Anzahl an Iterationen der beiden Schleifen anpassen."]}),"\n",(0,r.jsxs)(n.p,{children:["Bei mir erhalte ich nach wiederholter Ausf\xfchrung folgende Ergebnisse: (",(0,r.jsx)(n.em,{children:"Getestet unter gcc 12.2.0 (Debian 12.2.0-14)"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Ergebnis: 131284\nErwartet: 200000\n----------------\nErgebnis: 131119\nErwartet: 200000\n----------------\nErgebnis: 139837\nErwartet: 200000\n"})}),"\n",(0,r.jsx)(n.p,{children:"Wir sehen also, dass das tats\xe4chliche Ergebnis etwas durcheinander ist und insb., dass wir uns nicht darauf verlassen k\xf6nnen das korrekte Ergebnis zu erhalten!"}),"\n",(0,r.jsx)(n.h3,{id:"das-wieso",children:"Das Wieso"}),"\n",(0,r.jsxs)(n.p,{children:["Jetzt interessiert es sicherlich einige, wieso dieses Problem auftritt. Um das genauer zu verstehen, m\xfcssen wir jetzt noch eine Ebene nach unten - zum Assembler. Mithilfe des Befehls ",(0,r.jsx)(n.code,{children:"objdump threading -D"})," k\xf6nnen wir das vorher kompilierte Programm ",(0,r.jsx)(n.em,{children:"disassemblieren"})," und den darin enthaltenen Maschinencode auslesen. Unten dargestellt ist die Funktion ",(0,r.jsx)(n.code,{children:"t1"}),". Diese ist sehr \xe4hnlich zu ",(0,r.jsx)(n.code,{children:"t2"}),", weshalb ich nur eine davon hier pr\xe4sentiere."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Intel x86, gcc 12.2.0 (Debian 12.2.0-14)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-asm",metastring:"{7-9}",children:"0000000000001159 <t1>:\n1159:       55                      push   %rbp\n115a:       48 89 e5                mov    %rsp,%rbp\n115d:       48 c7 45 f8 00 00 00    movq   $0x0,-0x8(%rbp)\n1164:       00\n1165:       eb 17                   jmp    117e <t1+0x25>\n1167:       48 8b 05 c2 2e 00 00    mov    0x2ec2(%rip),%rax        # 4030 <global_var>\n116e:       48 83 c0 01             add    $0x1,%rax\n1172:       48 89 05 b7 2e 00 00    mov    %rax,0x2eb7(%rip)        # 4030 <global_var>\n1179:       48 83 45 f8 01          addq   $0x1,-0x8(%rbp)\n117e:       48 81 7d f8 9f 86 01    cmpq   $0x1869f,-0x8(%rbp)\n1185:       00\n1186:       76 df                   jbe    1167 <t1+0xe>\n1188:       b8 00 00 00 00          mov    $0x0,%eax\n118d:       5d                      pop    %rbp\n118e:       c3                      ret\n"})}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr alle, die sich bisher noch nicht gro\xdf mit Assembly besch\xe4ftigt haben - keine Sorge - wir besprechen das Wichtigste gemeinsam. Die drei hervorgehobenen Zeilen schauen wir uns genauer an. Diese entsprechen in C unserem Befehl ",(0,r.jsx)(n.code,{children:"global_var++"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr unser Beispiel nehmen wir an, dass in der Variable ",(0,r.jsx)(n.code,{children:"global_var"})," der Wert 5 steht."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1167"}),": L\xe4dt den aktuellen Wert der Variable ",(0,r.jsx)(n.code,{children:"global_var"})," (5) in das Register ",(0,r.jsx)(n.code,{children:"rax"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"116e"}),": Inkrementiert den Wert im Register ",(0,r.jsx)(n.code,{children:"rax"})," um 1 (= 6)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1172"}),": Schreibt den neuen Wert in zur\xfcck in die Variable ",(0,r.jsx)(n.code,{children:"global_var"})," (6)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Angenommen der Thread wird nun zwischen ",(0,r.jsx)(n.code,{children:"1167"})," und ",(0,r.jsx)(n.code,{children:"116e"})," unterbrochen. Die Werte im Register (insb. ",(0,r.jsx)(n.code,{children:"rax"})," (5)) werden gespeichert und der andere Thread kommt zur Ausf\xfchrung. Die zweite Funktion ",(0,r.jsx)(n.code,{children:"t2"})," tut jetzt dasselbe, l\xe4dt den Wert 5 aus der Variable ",(0,r.jsx)(n.code,{children:"global_var"})," und schreibt die inkrementierte Variable (6) zur\xfcck. Jetzt wird ",(0,r.jsx)(n.code,{children:"t2"})," wieder unterbrochen und wir kehren zur Ausf\xfchrung von ",(0,r.jsx)(n.code,{children:"t1"})," zur\xfcck. Die Werte der Register werden geladen und der Thread setzt die Ausf\xfchrung bei ",(0,r.jsx)(n.code,{children:"116e"})," fort. Wir merken jetzt aber eine Diskrepanz! Der Wert, den ",(0,r.jsx)(n.code,{children:"t1"})," vorher in ",(0,r.jsx)(n.code,{children:"rax"})," geschrieben hatte, n\xe4mlich 5, stimmt nun nicht mehr mit dem eigentlichen Wert der Variable ",(0,r.jsx)(n.code,{children:"global_var"})," \xfcberein - dieser ist jetzt n\xe4mlich 6. Wir inkrementieren den Wert im Register ",(0,r.jsx)(n.code,{children:"rax"})," um eins und erhalten ebenfalls 6. Dies schreiben wir zur\xfcck in die Variable ",(0,r.jsx)(n.code,{children:"global_var"}),". Hier steht nun also eine 6, obwohl wir zweimal h\xe4tten inkrementieren m\xfcssen (das Ergebnis in ",(0,r.jsx)(n.code,{children:"global_var"})," m\xfcsste nach der o.g. Ausf\xfchrung eigentlich 7 sein)!"]}),"\n",(0,r.jsxs)(n.p,{children:["Wir sprechen in diesem Fall von einer ",(0,r.jsx)(n.strong,{children:"Race Condition"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Wichtig",type:"warning",children:(0,r.jsx)(n.p,{children:"Der o.g. Text dient nur als Beispiel! Die Ausf\xfchrungsreihenfolge kann sich pro Ausf\xfchrung unterscheiden, weshalb wir auch (fast) immer unterschiedliche Werte erhalten."})}),"\n",(0,r.jsx)(n.h3,{id:"die-l\xf6sung",children:"Die L\xf6sung"}),"\n",(0,r.jsx)(n.p,{children:"Um das Problem zu l\xf6sen, ben\xf6tigen wir Synchronisation. Wie diese genau aussehen schauen wir uns nun anhand der weiteren Beispiele an."}),"\n",(0,r.jsx)(n.h2,{id:"synchronisation",children:"Synchronisation"}),"\n",(0,r.jsx)(n.h3,{id:"mutex",children:"Mutex"}),"\n",(0,r.jsx)(n.p,{children:'Ein Mutex, kurz f\xfcr "Mutual Exclusion", ist eine Synchronisationsprimitive, die in der Programmierung verwendet wird, um zu verhindern, dass zwei Threads gleichzeitig auf eine gemeinsame Ressource zugreifen. Man kann sich das vorstellen wie ein Schl\xfcssel zu einem Raum: Solange ein Thread (also ein Teil eines Programms) diesen "Schl\xfcssel" hat, kann kein anderer Thread in den "Raum" eintreten und die Ressource verwenden. Das verhindert, dass Daten durcheinander geraten oder besch\xe4digt werden, wenn mehrere Threads versuchen, gleichzeitig dieselbe Ressource zu lesen oder zu schreiben. Nachdem der Thread, der den Mutex h\xe4lt, fertig ist, gibt er den "Schl\xfcssel" frei, sodass ein anderer Thread Zugang erhalten kann.'}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Beispiel"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:'#include <stdio.h>\n#include <pthread.h>\n\npthread_mutex_t lock;\nint counter = 0;\n\nvoid* count() {\n    pthread_mutex_lock(&lock);              // Den Mutex sperren\n    counter += 1;                           // Zugriff auf die gemeinsame Variable\n    pthread_mutex_unlock(&lock);            // Den Mutex freigeben\n    return NULL;\n}\n\nint main() {\n    pthread_t t1, t2;\n    \n    pthrad_mutex_init(&lock);               // Den Mutex initialisieren\n\n    pthread_create(&t1, NULL, count, NULL); // Thread 1 erstellen\n    pthread_create(&t2, NULL, count, NULL); // Thread 2 erstellen\n\n    pthread_join(t1, NULL);                 // Auf Beendigung von Thread 1 warten\n    pthread_join(t2, NULL);                 // Auf Beendigung von Thread 2 warten\n\n    pthread_mutex_destroy(&lock);\n    \n    printf("Wert des Counters: %d\\n", counter);\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"signal",children:"Signal"}),"\n",(0,r.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Im Folgenden betrachten wir den Ablauf zwischen Verk\xe4ufern und Kunden eines doenerladens. Der dazugeh\xf6rige Pseudocode ist gegeben:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:"Variablen:\nint doener = 0;\n\nVerk\xe4ufer:\nwhile(true) {\n    fleischSchneiden();\n    salatUndSauce();\n    doener++;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bevor wir loslegen eine kurze Zusammenfassung der genutzten Terminologie:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Spurious Wakeups"}),": ..."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wir machen uns zun\xe4chst keine Sorgen \xfcber zu viel produzierte doener, sondern wollen lediglich die geteilten Variablen sch\xfctzen. Wir definieren daf\xfcr sog. kritische Bereiche, die durch Synchronisationsprimitive gesch\xfctzt werden. Zun\xe4chst m\xf6chten wir, dass nur ein Verk\xe4ufer zu jeder Zeit den doenerspie\xdf bearbeiten und die Anzahl der doener erh\xf6hen darf. Daf\xfcr eigenen sich zwei ",(0,r.jsx)(n.code,{children:"Mutexe"}),", die den jeweiligen kritischen Bereich sch\xfctzen. Unser Pseudocode sieht nun aus wie folgt:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {3,4,8,10,14,16}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nun kommen Kunden (in unregelm\xe4\xdfigen Abst\xe4nden) zu unserem doenerladen um doener zu kaufen. Logischerweise k\xf6nnen sie nur dann einen kaufen, wenn auch einer aktuell existiert. Ansonsten m\xfcssen die Kunden warten. Unserem Pseudocode f\xfcgen wir zun\xe4chst den Kunden hinzu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {6-8}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\n\nKunde:\ndoener--;\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Wir m\xfcssen nun den neuen kritischen Bereich identifizieren und sch\xfctzen! Daf\xfcr nutzen wir den bereits erstellten Mutex ",(0,r.jsx)(n.code,{children:"doener_m"})," um den kritischen Bereich des Kundenprozesses zu sch\xfctzen:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {7,10}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\n\nKunde:\nlock(doener_m);\ndoener--;\nunlock(doener_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ein Kunde sollte sich aber offensichtlich nur einen D\xf6ner nehmen k\xf6nnen, wenn auch einer existiert. ",(0,r.jsx)(n.strong,{children:"Hinweis"}),": Beachtet, dass der ",(0,r.jsx)(n.code,{children:"lock"})," \xfcber dem ",(0,r.jsx)(n.code,{children:"if (doener > 0)"})," platziert worden ist. Der Variablenzugriff innerhalb der if-Abfrage ist bereits kritisch und muss entsprechend gesch\xfctzt werden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {7,8,12}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\n\nKunde:\nlock(doener_m);\nif (doener > 0) {\n    doener--;\n    unlock(doener_m);\n    doenerEssen();\n}\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Der Kunde soll allerdings warten, bis ein D\xf6ner fertig ist. Wir nutzen hierf\xfcr ein Signal, um dem Kunden \xfcber das Ereignis zu informieren."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {5,9-11,26}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\nSignal doener_fertig_s;\n\nKunde:\nlock(doener_m);\nif (doener <= 0) {\n    wait(doener_fertig_s);\n}\ndoener--;\nunlock(doener_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    signal(doener_fertig_s);\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["W\xe4hrend der Kunde auf das Signal wartet (Zeile 10) besitzt dieser noch den Lock der geteilten Variable ",(0,r.jsx)(n.code,{children:"doener_m"}),". Es kann also kein weiterer D\xf6ner produziert werden! Wir m\xfcssen den Lock zun\xe4chst freigeben, damit der Verk\xe4ufer die Anzahl der D\xf6ner inkrementieren kann."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {10,13}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\nSignal doener_fertig_s;\n\nKunde:\nlock(doener_m);\nif (doener <= 0) {\n    unlock(doener_m);\n    wait(doener_fertig_s);\n}\nlock(doener_m);\ndoener--;\nunlock(doener_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    signal(doener_fertig_s);\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Wir haben jetzt das Problem der spurious Wakeups (siehe oben). Angenommen der Thread wacht in Zeile 11 wieder auf, ohne, dass die Bedingung erf\xfcllt worden ist (es existiert noch immer kein D\xf6ner). Wir nutzen jedoch die geteilte Variable ",(0,r.jsx)(n.code,{children:"doener"})," um diesen Fall zu \xfcberpr\xfcfen. Jedoch greifen wir nun auf die Variable zu, ohne den Lock zu besitzen. Dies m\xfcssen wir \xe4ndern. Wir ersetzen zun\xe4chst das ",(0,r.jsx)(n.code,{children:"if"})," durch ein ",(0,r.jsx)(n.code,{children:"while"}),". Dadurch wird beim Aufwachen \xfcberpr\xfcft, ob es \xfcberhaupt einen D\xf6ner gibt. Da wir dazu auf die geteilte Variable zugreifen, m\xfcssen wir uns vorher wieder den Lock holen (Zeile 12)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {9,12}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\nSignal doener_fertig_s;\n\nKunde:\nlock(doener_m);\nwhile (doener <= 0) {\n    unlock(doener_m);\n    wait(doener_fertig_s);\n    lock(doener_m);\n}\ndoener--;\nunlock(doener_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    signal(doener_fertig_s);\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Das sieht doch schon ganz brauchbar aus! Uns fehlt jetzt aber noch ein Teil. Was passiert, wenn mehrere D\xf6ner gleichzeitig fertig werden und mehrere Kunden gerade warten? Angenommen wir haben die folgende Situation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"doener == 0"})," (es gibt aktuell keine fertigen D\xf6ner)"]}),"\n",(0,r.jsx)(n.li,{children:"Kunde 1 (K1) rechnet bis vor der Zeile 11 und wird dann vom Betriebssystem rausgenommen."}),"\n",(0,r.jsx)(n.li,{children:"Kunde 2 (K2) kommt zur selben Stelle wie K1."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Beide Kunden befinden sich also zwischen ",(0,r.jsx)(n.code,{children:"unlock(doener_m)"})," und ",(0,r.jsx)(n.code,{children:"wait(doener_fertig_s)"}),". Der Verk\xe4ufer produziert nun zwei weitere D\xf6ner und erh\xf6ht entsprechend die ",(0,r.jsx)(n.code,{children:"doener"})," Variable auf 2. Das Signal ",(0,r.jsx)(n.code,{children:"doener_fertig_s"})," wird (zweimal) auf ",(0,r.jsx)(n.code,{children:"true"})," gesetzt. Es gibt jetzt ",(0,r.jsx)(n.strong,{children:"2 D\xf6ner"})," und ",(0,r.jsx)(n.strong,{children:"2 Kunden"}),". Das Betriebssystem l\xe4sst nun K1 und K2 wieder Rechnen. Der Kunde K1 kommt problemlos durch das ",(0,r.jsx)(n.code,{children:"wait(doener_fertig_s)"})," der Zeile 11, da das Signal bereits ",(0,r.jsx)(n.code,{children:"true"})," ist. K1 setzt das Signal jetzt auf ",(0,r.jsx)(n.code,{children:"false"}),". K2 wartet jetzt am Signal in Zeile 11, da dieses auf ",(0,r.jsx)(n.code,{children:"false"})," ist, obwohl noch immer ein fertiger D\xf6ner vorhanden ist. Ein D\xf6ner wird also verschwendet \ud83d\ude2d. Das k\xf6nnen wir nicht auf uns sitzen lassen!"]}),"\n",(0,r.jsx)(n.p,{children:"Eine m\xf6gliche L\xf6sung ist es daher, den gesamten Kundenbereich als kritisch zu definieren. Damit erlauben wir immer nur einem Kunden gleichzeitig in diesen Bereich einzutreten. Wir f\xfcgen dazu einen neuen Mutex hinzu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {5,9,18}",children:"Variablen:\nint doener = 0;\nMutex spie\xdf_m;\nMutex doener_m;\nMutex kunde_halt_m;\nSignal doener_fertig_s;\n\nKunde:\nlock(kunde_halt_m);\nlock(doener_m);\nwhile (doener <= 0) {\n    unlock(doener_m);\n    wait(doener_fertig_s);\n    lock(doener_m);\n}\ndoener--;\nunlock(doener_m);\nunlock(kunde_halt_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    signal(doener_fertig_s);\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Jetzt wollen wir noch verhindern, dass unendlich viele D\xf6ner produziert werden, ohne, dass die Kunden daf\xfcr da sind. \xc4hnlich wie bereits beim Kunden f\xfcgen wir nun die daf\xfcr notwendigen Synchronisationsprimitive hinzu. Die Beschreibung der Aufgaben habe ich im Pseudocode vermerkt:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {3,7,8,10,13-16,32-41}",children:"Variablen:\nint doener = 0;\nint kunden = 0;             // Neue Variable um Anzahl der Kunden zu speichern\nMutex spie\xdf_m;\nMutex doener_m;\nMutex kunde_halt_m;\nMutex verkaeufer_halt_m;    // Neuer Mutex\nMutex kunden_m;             // Neuer Mutex um Zugriff auf int kunden zu sch\xfctzen\nSignal doener_fertig_s;\nSignal neuer_kunde_s;       // Neues Signal um neuen Kunden zu signalisieren\n\nKunde:\nlock(kunden_m);             // Zugriff auf geteilte Variable int kunden sch\xfctzen\nkunden++;                   // Anzahl der Kunden erh\xf6hen\nsignal(neuer_kunde_s);      // Dem Verk\xe4ufer signalisieren, dass ein neuer Kunde da ist\nunlock(kunden_m);           // Zugriff auf geteilte Variable int kunden freigeben\n\nlock(kunde_halt_m);\nlock(doener_m);\nwhile (doener <= 0) {\n    unlock(doener_m);\n    wait(doener_fertig_s);\n    lock(doener_m);\n}\ndoener--;\nunlock(doener_m);\nunlock(kunde_halt_m);\ndoenerEssen();\n\nVerk\xe4ufer:\nwhile(true) {\n    lock(verkaeufer_halt_m);    // Nur einen Verk\xe4ufer in diesen Bereich lassen\n    lock(kunden_m);             // Zugriff auf geteilte Variable int kunden sch\xfctzen\n    while (kunden <= 0) {       // Verk\xe4ufer wartet, bis ein Kunde angekommen ist\n        unlock(kunden_m);       // Mutex freigeben um Zugriff darauf zu erlauben\n        wait(kunden_m);         // Warten, bis ein Kunde signalisiert hat (Zeile 15)\n        lock(kunden_m);         // Spurious Wakeups\n    }\n    kunden--;                   // Anzahl wartender Kunden dekrementieren\n    unlock(kunden_m);           // Zugriff auf int kunden freigeben\n    unlock(verkaeufer_halt_m);  // Andere Verk\xe4ufer d\xfcrfen nun auch auf Kunden warten\n\n    lock(spie\xdf_m);\n    fleischSchneiden();\n    unlock(spie\xdf_m);\n    \n    salatUndSauce();\n    \n    lock(doener_m);\n    doener++;\n    signal(doener_fertig_s);\n    unlock(doener_m);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"posix-threads",children:"POSIX Threads"}),"\n",(0,r.jsx)(n.h3,{id:"unterschied-zwischen-threads-und-prozessen",children:"Unterschied zwischen Threads und Prozessen"}),"\n",(0,r.jsxs)(n.p,{children:["Bei ",(0,r.jsx)(n.code,{children:"pthread"})," laufen die Threads im selben Adressraum, wohingegen Prozesse jeweils einen eigenen Adressraum besitzen. Threads teilen sich jedoch nicht alles! Jeder Thread besitzt bspw:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Einen eigenen Stack (eigenen Stack-Pointer)"}),"\n",(0,r.jsx)(n.li,{children:"Einen eigenen PC (Program Counter)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Globale Variablen und per ",(0,r.jsx)(n.code,{children:"malloc"})," angeforderter Speicher kann bspw. von jedem Thread gelesen und geschrieben werden."]}),"\n",(0,r.jsxs)(n.p,{children:["Jeder ",(0,r.jsx)(n.code,{children:"pthread"}),"-Thread f\xfchrt eine Funktion ",(0,r.jsx)(n.code,{children:"void* func(void* args) {...}"})," aus und endet entweder mit ",(0,r.jsx)(n.code,{children:"pthread_exit"}),", oder wenn die Funktion terminiert. Ein Thread kann einen Pointer als R\xfcckgabewert und als Eingabewert bekommen. Hierdurch lassen sich Argumente, sowie R\xfcckgabewerte \xfcbergeben."]}),"\n",(0,r.jsx)(n.h3,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,r.jsxs)(n.p,{children:["Gegeben ist das folgende Ping/Pong Programm. Wir wollen dies nun mithilfe der ",(0,r.jsx)(n.code,{children:"pthread"}),' POSIX Bibliothek so implementieren, dass im Wechsel "ping" und "pong" ausgegeben wird. Spurious Wakeups sollen ber\xfccksichtigt werden!']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:'#include <stdio.h>\n#include <stdlib.h>\n\nenum action {\n    PING,\n    PONG\n};\n\nint main() {\n    enum action *nextAction = malloc(sizeof(enum action));\n    *nextAction = PING;\n    \n    thread_ping(&nextAction);\n    thread_pong(&nextAction);\n    \n    free(nextAction);\n}\n\nvoid* thread_ping(void* nAction) {\n    enum action* nextAction = nAction;\n    \n    while (1) {\n        printf("Ping\\n");\n        *nextAction = PONG;\n    }\n}\n\nvoid* thread_pong(void* nAction) {\n    enum action* nextAction = nAction;\n    \n    while (1) {\n        printf("Pong\\n");\n        *nextAction = PING;\n    }\n}\n'})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"L\xf6sung (Probiert es aber ruhig noch mal selbst)"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers {58-60,76-78}",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <pthread.h>\n\nvoid* thread_ping(void* nAction);\nvoid* thread_pong(void* nAction);\n\nenum action {\n    PING,\n    PONG\n};\n\npthread_mutex_t nextActionMutex;    // Zugriff auf nextAction sch\xfctzen\npthread_cond_t nextActionSignal;    // Signal um n\xe4chstes "Event aufzurufen"\n\nint main() {\n    enum action *nextAction = malloc(sizeof(enum action));\n    *nextAction = PING;\n\n    pthread_t ping_thread, pong_thread;\n\n    pthread_mutex_init(&dummyMutex, NULL);          // Initialisiere den Mutex dummyMutex\n    pthread_mutex_init(&nextActionMutex, NULL);     // Initialisiere den Mutex nextActionMutex\n    pthread_cond_init(&nextActionSignal, NULL);     // Initialisiere das Signal nextActionSignal\n\n    // Erzeuge die beiden threads (als Argument erhalten beide nextAction)\n    pthread_create(&ping_thread, NULL, thread_ping, nextAction);\n    pthread_create(&ping_thread, NULL, thread_pong, nextAction);\n\n    /**\n     *  Den Teil erreichen wir nie, da die beiden oberen Threads nicht terminieren!\n     *  Trotzdem w\xe4re das der Weg korrekt aufzur\xe4umen. \n     */\n\n    // Warte darauf, dass beide Prozesse terminieren\n    pthread_join(ping_thread, NULL);\n    pthread_join(pong_thread, NULL);\n\n    // Die zuvor erzeugten Synchronisationsprimitive wieder zerst\xf6ren (Speicher freigeben)\n    pthread_mutex_destroy(&nextActionMutex);\n    pthread_cond_destroy(&nextActionSignal);\n\n    free(nextAction);\n}\n\nvoid* thread_ping(void* nAction) {\n    enum action* nextAction = nAction;\n\n    while (1) {\n        printf("Ping\\n");\n        sleep(1);\n\n        pthread_mutex_lock(&nextActionMutex);       // Zugriff auf nextAction sch\xfctzen\n        *nextAction = PONG;\n        pthread_cond_signal(&nextActionSignal);     // Dem anderen (wartendem) Thread bescheidgeben\n\n        while(*nextAction != PING) {\n            pthread_cond_wait(&nextActionSignal, &nextActionMutex); // Auf Signal warten\n        }\n        pthread_mutex_unlock(&nextActionMutex);     // Zugriff auf nextAction freigeben\n    }\n}\n\nvoid* thread_pong(void* nAction) {\n    enum action* nextAction = nAction;\n\n    while (1) {\n        printf("Pong\\n");\n        sleep(1);\n\n        pthread_mutex_lock(&nextActionMutex);       // Zugriff auf nextAction sch\xfctzen\n        *nextAction = PING;\n        pthread_cond_signal(&nextActionSignal);     // Dem anderen (wartendem) Thread bescheidgeben\n\n        while(*nextAction != PING) {\n            pthread_cond_wait(&nextActionSignal, &nextActionMutex); // Auf Signal warten\n        }\n        pthread_mutex_unlock(&nextActionMutex);     // Zugriff auf nextAction freigeben\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Ich wei\xdf, dass es diese Woche ziemlich viel Inhalt war. Keine Sorge, wir sind gleich am Ende! Ich m\xf6chte zum Schluss nur noch mal auf die beiden hervorgehobenen Zeilen eingehen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"while(*nextAction != PING) {\n    pthread_cond_wait(&nextActionSignal, &nextActionMutex);\n}\npthread_mutex_unlock(&nextActionMutex);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Wir haben oben gesehen, dass wir (um spurious Wakeups) zu verhindern das folgende Konstrukt verwenden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"lock(mutex_x);\nwhile (x > 0) {\n    unlock(mutex_x);\n    wait(signal_y);\n    lock(mutex_x);\n}\nunlock(mutex_x);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Wieso ben\xf6tigen wir das unter Verwendung von ",(0,r.jsx)(n.code,{children:"pthread"})," nicht? Das liegt ganz einfach daran, dass sich die Funktion ",(0,r.jsx)(n.code,{children:"pthread_cond_wait"}),' bereits um diesen Fall k\xfcmmert! Wie ihr sehen k\xf6nnt, \xfcbergeben wir sowohl die "condition Variable" (',(0,r.jsx)(n.code,{children:"pthread_cond_t"}),") als auch den dazugeh\xf6rigen Mutex (",(0,r.jsx)(n.code,{children:"pthread_mutex_t"}),"). Damit wir uns nicht darum k\xfcmmern m\xfcssen, implementiert die Funktion ",(0,r.jsx)(n.code,{children:"pthread_cond_wait"}),' intern bereits dieses Konstrukt. Beim Aufrufen der Funktion wird also zun\xe4chst der \xfcbergebene Mutex freigegeben, danach wird auf das Signal gewartet. Sobald das Signal empfangen wurde, wird der Mutex wieder "gelocked" und die Funktion terminiert.']})]})}function u(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>t});var r=i(1504);const d={},s=r.createContext(d);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
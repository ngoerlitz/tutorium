---
title: "Tutorium 2"
tags: ["Webtechnologien", "HTML", "JavaScript"]
---

# Formulare & JavaScript I

Wie die Überschrift schon vermuten lässt, schauen wir uns heute die Grundlagen zu Eingabe-Formularen in HTML, sowie einige
Basics in JavaScript an.

## Formulare

Formulare erlauben es dem Nutzer Eingaben zu tätigen und diese anschließend der (Web-)Applikation zur Verfügung zu stellen.

Das klassische Beispiel der Eingabe einer Lieferadresse:

<details>
  <summary>So sieht's im Browser aus</summary>
    <div>
        <p>Folgend ein minimales Beispiel wie ein solches Eingabeformular aussehen könnte.</p>

        <label for="name" style={{display:'block'}}>Vor-/Nachname:</label>
        <input id="name" type="text" placeholder="Max Mustermann"></input>
    
        <label for="city" style={{display:'block', marginTop: 10}}>Stadt:</label>
        <input list="city-choices" id="city" type="text" placeholder="Berlin"></input>
        <datalist id="city-choices">
            <option value="Berlin">Berlin</option>
            <option value="Muenchen">München</option>
            <option value="Koeln">Köln</option>
        </datalist>
    
        <label for="tel" style={{display:'block', marginTop: 10}}>Telefon Nr.:</label>
        <input id="tel" type="tel" placeholder="+49 123 456789"/>
    </div>
</details>

### Elemente

Eine Übersicht aller für Formulare relevanter HTML-Elemente findet ihr wieder in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms). 

Eine grobe (nicht vollständige) Zusammenfassung der wichtigsten Elemente:

#### `<form>`

Beschreibt einen Bereich im Dokument mit interaktiven Eingabemöglichkeiten, um Daten abzuschicken. Dieses Element definiert
ein Formular und muss alle dafür vorgesehenen Input-Elemente umschließen. 

```html
<form method="get" action="/absenden">
    <input ...>
    <input ...>
</form>
```

Das Attribut `method` gibt an mit welcher HTTP-Methode die Daten des Formulars an die Zieladresse in `action` gesendet werden sollen. 

- GET
    - Die Daten werden in der URL angehängt und sind somit in der Adressleiste des Browsers sichtbar.
    - Die URL hat eine Begrenzung der Zeichenlänge (abhängig vom Browser, ca. 2000 Zeichen).
    - Nicht sicher, um sensible oder private Informationen zu übertragen, da die Daten in der URL stehen.
    - Parameter werden als _Query-String_ angehängt (z.B., `?key1=value1&key2=value2`).

- POST
    - Die Daten werden im Body der Anfrage gesendet und sind somit nicht in der URL sichtbar.
    - Es gibt i.d.R. keine Begrenzung der Datenmenge (praktisch unlimitiert, abhängig vom Server).
    - Sicherer als GET für die Übertragung sensibler Informationen, da die Daten nicht direkt sichtbar sind (Verschlüsselung, wie HTTPS ist dennoch notwendig!).
    - Parameter werden im Body der Anfrage übermittelt.

---

#### `<label>`

Erzeugt eine eindeutige Beschriftung des zugehörigen Input-Feldes. Der Zusammenhang wird über das `for="..."` Attribut des
`<label>` Elements, sowie des `id="..."` Attributs des Input-Elements hergestellt. 

##### Beispiel:

```html
<label for="my_element">
    Dies ist ein Label für das folgende Input-Element
</label>
<input id="my_element" type="text">
```

---

#### `<input>`

Das Input-Element selbst stellt ein Eingabefeld (d.h. eine Möglichkeit für den Benutzer Daten einzugeben) dar. Das Input-
Feld muss nicht zwangsläufig immer nur das bekannte Textfeld sein, sondern kann nach Abhängigkeit des `type` Attributs 
beispielsweise auch ein Slider sein:

##### Beispiel:
<input type="range" min="10" max="100" step="10"></input>
```html
<input type="range" min="10" max="100" step="10">
```

---

#### `<select>`, `<option>`

Definiert eine Dropdown-Liste, bei welche der Benutzer eine vordefinierte Anzahl an Auswahlmöglichkeiten erhält und eins dieser wählt. 

##### Beispiel:

<label for="color-select" style={{display:'block'}}>Wähle deine Lieblingsfarbe aus:</label>
<select id="color-select">
    <option value="red">Rot</option>
    <option value="green">Grün</option>
    <option value="blue">Blau</option>
    <option value="magenta">Magenta</option>
</select>
```html
<select>
    <option value="red">Rot</option>
    <option value="green">Grün</option>
    <option value="blue">Blau</option>
    <option value="magenta">Magenta</option>
</select>
```

### Wichtige Attribute

- `name="..."`
  - Wird in den Elementen `select, input` verwendet. 
  - Nachdem der Benutzer das Formular absendet, werden die in den Inputs enthaltenen Daten übertragen. Dazu erhalten wir jeweils _key-value_ Paare. Wir nutzen das Attribut nun, um jedem Eingabeelement einen solchen _key_ zuzuweisen. 
  ```html
    <form method="get" action="/abc">
        <label for="fn_el">Vorname</label>
        <input id="fn_el" type="text" name="first_name">        
     </form>
    ```
  
    Nach Absenden dieses Formulars werden wir entsprechend auf die Seite `.../abc?first_name=<INHALT_DES_EINGABEFELDES>` weitergeleitet und unser Formular somit abgegeben. 
    
    Im besten Fall würde die Anfrage natürlich noch von einem Backend-Server bearbeitet und die Inhalte des Formulars genutzt werden, aber so weit sind wir noch nicht :wink:.
- `placeholder="..."`
  - Enthält einen Platzhalter, welcher dem Benutzer vor der Eingabe angezeigt wird. 
  <input type="text" placeholder="Deine Eingabe hier" style={{marginBlock: 10}}></input>
  ```html
    <input type="text" placeholder="Deine Eingabe hier" name="" id="">
  ```

### Input Type-Attribut

Wie bereits anhand der obigen Beispiele gezeigt, gibt es verschiedene Eingabemöglichkeiten - z.B. Textfelder, Slider, Dropdowns, usw. Die Wahl der Auswahlmöglichkeit obliegt uns, den Entwicklern. Dazu werden wir uns einige verschiedene, häufig auftretende, Typen der Eingabefelder anschauen. 

#### text
Das _text_ Eingabefeld akzeptiert alle Eingaben. 
```html
<input type="text" minlength="10" maxlength="25" name="" id="">
```
Das hier definierte Input-Feld hat den Typ _text_, eine Mindestlänge von 10, sowie eine Maximallänge von 25 Zeichen. Diese Einschränkungen werden vom Brower überprüft, sobald der Benutzer das Formular absenden möchte. Erfüllt die Eingabe die Anforderungen nicht, wird das Formular auch nicht abgeschickt. 


#### number
Das _number_ Eingabefeld akzeptiert nur Zahlen als Eingabe. Beim Absenden des Formulars wird die Eingabe validiert. Einzelne Buchstaben wie z.B. `e` werden akzeptiert, da diese eine numerische Bedeutung besitzen. 

<input type="number" min="0" max="15" defaultValue="0" style={{marginBlock: 10}}></input>
```html
<input type="text" min="0" max="15" name="" id="">
```
Mit `min` und `max` können wir den Wertebereich der eingegebenen Zahl beschränken. D.h. akzeptiert werden nur Zahlen, welche im Intervall `[0, 15]` liegen. 


#### password
<input type="password" defaultValue="asdhasdads" style={{marginBlock: 10}}></input>
```html
<input type="password" name="" id="">
```


#### date
<input type="date" defaultValue="2024-12-24" style={{marginBlock: 10}}></input>
```html
<input type="date" min="YYYY-MM-DD" max="YYYY-MM-DD" name="" id="">
```


#### time
<input type="time" defaultValue="12:24" style={{marginBlock: 10}}></input>
```html
<input type="time" min="HH:MM" max="HH:MM" name="" id="">
```


#### tel
<input type="tel" defaultValue="+49 123 4567890" style={{marginBlock: 10}}></input>
```html
<input type="tel" name="" id="">
```

#### email
<input type="email" defaultValue="example@mail.com" style={{marginBlock: 10}}></input>
```html
<input type="email" pattern="" name="" id="">
```
Mit dem `pattern` Attribut könnt ihr ein eigenes [Regex-Pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern#examples) erstellen, welches vom Browser validiert wird, sobald der Nutzer das Formular absendet. 

Als Beispiel :wink::
```regexp [line-break]
(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-
\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z
0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]
))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\
x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
```
> Quelle: https://stackoverflow.com/a/201378

#### url
<input type="url" defaultValue="https://google.de" style={{marginBlock: 10}}></input>
```html
<input type="url" name="" id="">
```


#### color
<input type="color" style={{marginBlock: 10}}></input>
```html
<input type="color" name="" id="">
```


#### radio
Radio 1: <input type="radio" style={{marginBlock: 10}} name="radio_1"></input> <br></br>
Radio 2: <input type="radio" style={{marginBlock: 10}} name="radio_1"></input> <br></br>
Radio 3: <input type="radio" style={{marginBlock: 10}} name="radio_1"></input> 
```html
<input type="radio" id="" name="radio_1" value="1">
<input type="radio" id="" name="radio_1" value="2">
<input type="radio" id="" name="radio_1" value="3">
```

#### checkbox
<input type="checkbox" style={{marginBlock: 10}} name="radio_1"></input>
```html
<input type="checkbox" id="" name="">
```

#### button, submit, reset
<input type="button" style={{marginBlock: 10}} value="Button"></input> <br></br>
<input type="submit" style={{marginBlock: 10}} value="Submit"></input> - Schickt das Formular ab. <br></br>
<input type="reset" style={{marginBlock: 10}} value="Reset"></input> - Setzt die Eingabefelder des Formulars zurück.
```html
<input type="button" value="Button" id="" name="">
<input type="submit" value="Submit" id="" name="">
<input type="reset" value="Reset" id="" name="">
```

## JavaScript I

> JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML zu erweitern. Heute wird JavaScript auch außerhalb von Browsern angewendet, etwa auf Servern.
> _Quelle: https://de.wikipedia.org/wiki/JavaScript_

### Variablen

In JavaScript haben wir drei verschiedene Möglichkeiten Variablen anzulegen: ~~`var`~~, `let`, `const`. Wieso `var` durchgestrichen ist, schauen wir uns gleich genauer an. 

#### `let`

Mit `let` erzeugen wir eine Variable, dessen Inhalt später geändert werden kann. 

```js
let x = 25;
console.log(x); // 25

x = 40;
console.log(x); // 40
```

#### `const`

Mit `const` erzeugen wir eine Variable, dessen Wert nach der initialen Zuweisung nicht mehr geändert werden kann! 
Dies ist beispielsweise dann sinnvoll, wenn Konstanten wie z.B. $\pi = 3.1415\ldots$ zum Einsatz kommen, oder wenn ihr 
anderen Lesern eures Codes vermitteln wollt, dass diese Variable nur gelesen werden soll. 

```js
const pi = 3.1415;
console.log(pi); // 3.1415

pi = 2.3; // -> TypeError: Assignment to constant variable
```

#### `var`

:::danger
Es gibt keinen guten Grund mehr `var` zur Erzeugung von Variablen zu nutzen. Im Gegenteil, es gibt eher Probleme die euch beim Programmieren das Leben & Debugging schwer machen könnten.
:::

##### (Schlechte) Eigenschaften von `var`:
- `var`-Variablen sind nicht auf den Block ihrer Deklaration beschränkt. Das heißt diese Variablen bleiben auch außerhalb ihres aktuellen Scopes sichtbar.
- Variablen können mehrfach deklariert werden. Das heißt, es könnte eine Variable `var x = 10` angelegt werden und im Anschluss mittels `var x = false` die gleiche Variable mit einem anderen Typen überschrieben werden. 
Das führt in erster Linie zu Problemen, die bei einer großen Code-Base schwer zu entdecken sein können. 


### Bedingte Ausführung und Schleifen

#### Bedingte Ausführung
```js
let x = 25;

if (x > 10) {
    // Wahr
}



if (x < 10) {
    // Falsch
} else {
    // Wird ausgeführt, da die Bedingung falsch ist. 
}



if (x < 0) {
    // Falsch
} else if (x < 50) {
    // Wird ausgeführt, falls Bedingung 1 (x < 0) falsch und Bedingung 2 (x < 50) wahr ist. 
    // In diesem Fall wird der Code-Block also ausgeführt. 
} else {
    // Wird ausgeführt, falls Bedingung 1 (x < 0) und Bedingung 2 (x < 50) wahr sind.
    // In diesem Fall wird der Code-Block also nicht ausgeführt. 
}
```

Mit `switch` lassen sich viele aufeinanderfolgende `if-else` Abfragen vereinfachen. 
```js
let x = 1;

if (x == 1) {
    // ...
} else if (x == 2) {
    // ...
} else if (x == 4) {
    // ...
} else {
    // ...
}

// Äquivalent dazu:
switch (x) {
    case 1:
        // Falls x == 1
        break;
    case 2:
        // Falls x == 2
        break;
    case 4: 
        // Falls x == 4
        break;
    default:
        // Alle anderen Fälle
        break;
}
```

#### Schleifen
##### for
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Ausgabe: 
0
1
2
3
4
```

```js
let arr = ["Berlin", "Muenchen", "Koeln"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Oder alternativ:
for (const city of arr) {
    console.log(city);
}

// Ausgabe:
"Berlin"
"Muenchen"
"Koeln"
```

##### while
```js
let num = 0;
while (num < 4) {
    console.log(num);
    num++;
}

// Ausgabe:
0
1
2
3
```

##### do-while
Analog zur `while` Schleife, jedoch wird die Bedingung erst nach Ausführung des Schleifenrumpfs überprüft!
```js
let num = 10;
do {
    console.log(num);
} while (num < 4);

// Ausgabe
10
```
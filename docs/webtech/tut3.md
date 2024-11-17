---
title: "Tutorium 3"
tags: ["Webtechnologien", "CSS", "JavaScript"]
---

# CSS & JavaScript II

Heute schauen wir uns die verschiedenen Selektoren in CSS und Funktionsdeklarationen in JavaScript an. 

## CSS
### Selektoren
Wir haben in CSS verschiedenste Möglichkeiten Elemente zu 'adressieren', d.h. die Elemente auszuwählen welche bestimmte Style-Eigenschaften erhalten sollten. 


#### Element-Selektor
Mit dem Elementselektor können wir alle Vorkommnisse eines bestimmten HTML Elements auswählen.

```html
<div>Eins</div>
<p>Zwei</p>
<div>Drei</div>
```

```css
div {
    color: blue;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<div style={{color: 'blue'}}>Eins</div>
<p style={{margin: 0}}>Zwei</p>
<div style={{color: 'blue'}}>Drei</div>
</details>

---

#### Element-Selektor

Mit `#` können wir ein bestimmtes Element anhand des `id="..."` Attributs auswählen. 

```html
<div id="one">Eins</div>
<div id="two">Zwei</div>
<div id="three">Drei</div>
```

```css
#two {
    color: blue;
}
```
<details>
<summary>So sieht's im Browser aus:</summary>
<div>Eins</div>
<div style={{color: 'blue'}}>Zwei</div>
<div>Drei</div>
</details>

#### Klassen-Selektor
Mit `.` können wir Elemente mit einer bestimmten Klasse auswählen. 

```html
<div class="class-one">Eins</div>
<div class="class-two">Zwei</div>
<div class="class-one">Drei</div>
```

```css
.class-one {
    color: blue;
}
```
wählt die Divs "Eins" und "Drei" aus und färbt den Text in Blau. 

<details>
<summary>So sieht's im Browser aus:</summary>
<div style={{color: 'blue'}}>Eins</div>
<div class="class-two">Zwei</div>
<div style={{color: 'blue'}}>Drei</div>
</details>

---

#### Attribut-Selektor
Wir können Elemente auch anhand der ihnen zugewiesenen Attribute auswählen. Zum Beispiel können wir so alle Inputs mit `type="text"` auswählen und diesen einen roten Rahmen geben. 

```html
<input type="text">
<input type="number">
<input type="text">
<input type="tel">
```

```css
input[type="text"] {
    border: 1px solid red;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<input type="text" style={{border: "1px solid red"}}></input> <br></br>
<input type="number"></input> <br></br>
<input type="text" style={{border: "1px solid red"}}></input> <br></br>
<input type="tel"></input> <br></br>
</details>

---

#### Zusammengesetzte Selektoren
Falls ihr beispielsweise nur `div` Elemente auswählen wollt, welche zusätzlich eine bestimmte Klasse `example` besitzen, könnt ihr diese beiden Bedingungen wie folgt verbinden:

```css
/* Wählt alle <div class="example ..."> Elemente aus */
div.example {
    /* Euer Style hier */
}
```

### Komplexere Selektoren
Falls es uns nicht ausreicht einzelne Elemente anhand ihrer id, Klassen oder Attribute auszuwählen, können wir weitere sog. _complex selectors_ definieren. 
Deren Nutzung ist auf den ersten Blick manchmal nicht ganz offensichtlich, weshalb wir uns zu jedem der Selektoren ein Beispiel anschauen werden. 

In den Beispielen werden die Selektoren immer aus _Elementselektoren_ zusammengebaut. Die Funktionsweise für andere Selektoren (Klassen, ID, usw.) ist jedoch identisch. 

#### Descendant Selector (Nachfahren-Selektor)
Dieser Selektor wählt alle Elemente aus, die Nachfahren eines anderen Elements sind. Dabei ist die Tiefe der Verschachtelung egal.

```html
<div>
    <p>Hello</p>
    <section>
        <p>World</p>
    </section>
</div>
<p>Außerhalb des Divs</p>
```

```css
div p {
    color: blue;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<div>
    <p style={{color: 'blue', margin: '0'}}>Hello</p>
    <section>
        <p style={{color: 'blue', margin: '0'}}>World</p>
    </section>
</div>
<p>Außerhalb des Divs</p>
</details>

---

#### Child Selector (Kindselektor)
Der Child-Selector wählt alle Elemente aus, die ein direktes Kind des Elternelements sind. Das heißt, `div > p` würde nur solche `<p>` Elemente auswählen, die ein direktes Kind (d.h. eine Verschachtelungstiefe von 1) eines `div`s sind. 

```html
<div>
    <p>Hello</p>
    <section>
        <p>World</p>
    </section>
</div>
<p>Außerhalb des Divs</p>
```

```css
div > p {
    color: blue;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<div>
    <p style={{color: 'blue', margin: '0'}}>Hello</p>
    <section>
        <p style={{margin: '0'}}>World</p>
    </section>
</div>
<p>Außerhalb des Divs</p>
</details>

---

#### Next-Sibling Combinator (Direkt benachbarte Geschwisterselektor)
Der direkt benachbarte Geschwisterselektor wählt das zweite Element aus, genau dann wenn es sich **direkt nach** dem ersten Element befindet! _Direkt benachbart_ bedeutet in diesem Fall, dass **keine weiteren Elemente zwischen** den beiden Elementen sein dürfen und, dass beide Elemente sich **dasselbe Elternelement** teilen! 

```html
<div>
    <p>Hello</p>
    <section>
        <p>World</p>
    </section>
</div>
<p>Außerhalb des Divs eins</p>
<p>Außerhalb des Divs zwei</p>
```

```css
div + p {
    color: blue;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<div>
    <p style={{margin: '0'}}>Hello</p>
    <section>
        <p style={{margin: '0'}}>World</p>
    </section>
</div>
<p style={{color: 'blue', margin: 0}}>Außerhalb des Divs eins</p>
<p>Außerhalb des Divs zwei zwei</p>
</details>

---

#### Subsequent-Sibling Combinator (Allgemeiner Geschwisterselektor)
Der allgemeine Geschwisterselektor wählt **alle Elemente** aus, welche **nach** einem bestimmten vorherigen Element folgen, jedoch ohne die Einschränkung der dazwischenliegenden Elemente. 

Das heißt konkret, dass es beim allg. Geschwisterselektor keine Rolle spielt, wie viele Elemente zwischen zwei auszuwählenden Elementen liegen. Die Einschränkung des gleichen Elternknotens bleibt jedoch weiterhin bestehen. 

```html
<div>
    <p>Hello</p>
    <section>
        <p>World</p>
    </section>
</div>
<section>Eins</section>
<section>Zwei</section>
<p>Außerhalb des Divs eins</p>
<p>Außerhalb des Divs zwei</p>
```

```css
div ~ p {
    color: blue;
}
```

<details>
<summary>So sieht's im Browser aus:</summary>
<div>
    <p style={{margin: '0'}}>Hello</p>
    <section>
        <p style={{margin: '0'}}>World</p>
    </section>
</div>
<section>Eins</section>
<section>Zwei</section>
<p style={{color: 'blue', margin: 0}}>Außerhalb des Divs eins</p>
<p style={{color: 'blue'}}>Außerhalb des Divs zwei</p>
</details>


### Spezialklassen / -Elemente
Wir wollen allerdings mit CSS nicht nur statisch irgendwelchen Elementen einen Style zuweisen, sondern bspw. auch auf Benutzerinteraktionen reagieren. 
Zum Beispiel wollen wir auch in der Lage sein einem `<div>` eine bestimmte Hintergrundfarbe zu geben, wenn der Benutzer mit seiner Maus über das Element fährt. 
Zusätzlich wollen wir auch Teile eines Elements stylen, welche selbst kein Element sind - zum Beispiel den ersten Buchstaben eines Texts!

_Enter:_ Pseudo-Klassen & Pseudo-Elemente. 

#### Pseudo-Klassen (:)
Mit Pseudo-Klassen können wir **bestimmte Zustände** eines Elements stylen. Typischerweise werden Pseudo-Klassen genutzt um bestimmte Interaktionen für den Nutzer sichtbarer, bzw. offensichtlicher zu gestalten - so zum Beispiel ein Input-Element zu stylen, sobald es den Fokus des Nutzers erhält. 

Oder beispielsweise, wenn der Benutzer über das vorher angesprochene `div`-Element fährt. 

```css
div:hover {
    background-color: blue;
}
```

Eine Liste der möglichen Pseudo-Klassen findet ihr in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

#### Pseudo-Elemente (::)
Mit Pseudo-Elementen lassen sich **bestimmte Teile** eines Elements stylen. Wie vorher angesprochen, wollen wir den ersten Buchstaben eines Texts färben. Dazu nutzen wir das Pseudo-Element `first-letter`. 

```css
p::first-letter {
    color: blue;
}
```

Eine Liste der möglichen Pseudo-Elemente findet ihr in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).


## JavaScript II - Funktionen

Funktionen können in JavaScript auf zwei Arten deklariert werden

### Mit `function` Schlüsselword
```js
function add(a, b) {
    return a + b;
}

add(1, 3); // 4
```

### Pfeil Funktionen (Arrow functions)
```js
const add = (a, b) => {
    return a + b;
}

add(1, 3); // 4
```

:::warning
- Pfeil-Funktionen besitzen keine eigenen `this` bzw. `arguments` Bindings. Das heißt, falls ihr innerhalb der Pfeil-Funktion auf eins der Beiden zugreifen wollt, greift ihr tatsächlich auf den Wert "außerhalb" der Pfeil-Funktion zu. 
- Pfeil-Funktionen können nicht mit `new` aufgerufen werden!

Für weitere Details könnt ihr euch [diesen](https://stackoverflow.com/a/34361380) Post durchlesen.  
:::

### Rekursive Funktionen
Wie in anderen Programmiersprachen auch, können sich Funktionen in JavaScript selbst aufrufen (Rekursion). Dabei ist es wichtig an eine **Abbruchbedingung** (Recursion-Anchor) zu denken, da ihr sonst in einer Endlosschleife landet und einen _Stack-Overflow_ erhalten werdet. 

Das klassische Beispiel der rekursiven Fibonacci-Folge:
```js
// Fib: 0, 1, 1, 2, 3, 5, 8, 13, ...
function rfib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    return rfib(n - 1) + rfib(n - 2);
}
```

---
title: "Tutorium 4"
tags: ["Webtechnologien", "CSS", "JavaScript"]
---

# Positionierung, Flex, Arrays & Objekte

Wir haben heute etwas mehr vor als in den vergangenen Wochen. Wir schauen uns heute zwei _essentielle_ Teile von CSS und JavaScript an. Aber der Reihe nach...

## Positionierung

Beim Erstellen einer Webseite wollen wir natürlich in der Lage sein, Elemente so zu positionieren wie wir es uns vorstellen - bzw. das Design es vorsieht. 
Dafür haben wir in CSS einige grundlegende Methoden zur Positionierung: static, relative, absolute, fixed und sticky. 

### Static
```css
element {
    position: static;
}
```

Die statische Positionierung ist der Standard und wird dann angewandt, wenn wir keinen expliziten Wert setzen. Das (bzw. die) Element(e) befinden sich im normalen Fluss des Dokuments.
Es gibt, sofern die anderen Selektoren einigermaßen schlau gewählt worden sind, in der Regel keinen Grund die Position explizit auf `static` setzen zu müssen. 

### Relative
```css
element {
    position: relative;
    top: 10px;
    left: 10px;
}
```

Spannend wird es nun mit der ersten "non-standard" Positionierung - _relative_. Bei der relativen Positionierung bleibt das Element weiterhin im normalen Fluss des Dokuments enthalten. Das heißt, dass sich die Positionen 
der darumliegenden Elemente nicht verändern. Mittels der Attribute `top`, `left`, (`bottom` und `right`) können wir nun einen sogenannten _inset_ definieren. Das ist letztendlich nichts anderes als der Abstand zwischen der 
jeweiligen Seite des relativen Elements und dem Container. 

Jetzt fragt ihr euch sicherlich, was mit "dem Container" gemeint ist. Hier unterscheidet sich _relative_ vom Rest der positionierten Elemente (_absolute_, _fixed_, _sticky_). **Ein relativ positioniertes Element wird relativ
zu seiner originalen Position im Dokumentenfluss positioniert**. Diesen Satz gilt es zu merken! Das heißt also, wenn wir die Attribute `top: 10px; left: 10px;` definieren, erzeugen wir im Endeffekt einen Offset von der originalen
Position nach unten und nach rechts um jeweils `10px`. Wir haben sowohl links einen Abstand von `10px` (`left: 10px`) als auch oben einen Abstand von `10px` (`top: 10px`). 

### Absolute
```css
element {
    position: absolute;
    top: 10px;
    left: 10px;
}
```

Die absolute Positionierung ist relativ "straightforward" - allerdings mit einem Twist. Im Gegensatz zu _static_ und _relative_ wird das Element aus dem normalen Dokumentfluss herausgelöst! Ihr könnt euch das so vorstellen, als 
würden wir das Element temporär einfach entfernen. Die sich dadurch ergebende Position der anderen Elemente wird beibehalten und das zuvor rausgenommene absolute Element wird "oben draufgelegt". 

Ähnlich wie bei der _relativen_ Positionierung können wir den Attributen `top`, `left`, usw. den Abstand der Ränder zum Container-Element definieren. Hier kommt jetzt der Twist ins Spiel: was ist in diesem Fall der "Container"?
Dazu definiert CSS einen sog. "containing Block". Bei einem _absolut_ positioniertem Element ist der "containing Block" das Elternelement, welches eine Position außer _static_ enthält. Auch, wenn die Erklärung etwas merkwürdig 
erscheinen mag, hier ein Beispiel:

```html
<html>
    <head>...</head>
    <body>
        <div id="a" style="position: absolute">
            <div id="b">
                <h1 id="c">Überschrift</h1>
                <div id="d" style="position: absolute">Ich bin das Element</div>
                <p id="e">Ich bin ein Textabsatz</p>
            </div>
        </div>
    </body>
</html>
```

Überlegt gerne mal selbst, wo das div-Element mit `id="d"` positioniert wird. 
<details>
    <summary>Lösung</summary>
    <div>
        Wie im letzten Satz geschrieben suchen wir nun das näheste Elternelement, welches eine Position hat, die nicht _static_ ist. In unserem Fall sehen wir recht schnell, dass das das div mit `id="a"` ist. 
        Dieses Element hat die Position `absolute`, unterscheidet sich also vom Standard `static` und ist somit unser "containing Block". Das div-Element mit `id="d"` wird also in der oberen linken Ecke des div-Elements
        mit `id="a"` platziert. 
    </div>
</details>


Jetzt ein anderes Beispiel: Wie sieht die Positionierung jetzt aus? 

```html
<html>
    <head>...</head>
    <body>
        <div id="a">
            <div id="b">
                <h1 id="c">Überschrift</h1>
                <div id="d" style="position: absolute">Ich bin das Element</div>
                <p id="e">Ich bin ein Textabsatz</p>
            </div>
        </div>
    </body>
</html>
```

Überlegt es euch selbst bevor ihr euch die Lösung anschaut.
<details>
    <summary>Lösung</summary>
    <div>
        Wir suchen nun wieder ein Element mit einer anderen Positionierung und stellen schnell fest, dass ein solches in diesem Dokument nicht existiert. Ich habe euch allerdings noch eine Kleinigkeit verschwiegen:
        Das html-Element selbst bildet den sog. "initial containing Block". Für uns heißt das in diesem Fall, dass wir das html-Element für unsere Positionierung des divs verwenden. Somit wird das div mit `id="d"`
        in der oberen linken Ecke des html-Elements - also des Bildschirms - platziert. 
    </div>
</details>

### Fixed

### Sticky


Eine genaue Beschreibung findet ihr wie immer in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block).
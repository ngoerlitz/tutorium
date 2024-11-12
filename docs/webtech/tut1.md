---
title: "Tutorium 1"
tags: ["Webtechnologien", "HTML", "Einführung"]
---

# HTML Grundlagen

## HTML Element

HTML-Elemente sind die Grundbausteine jeder Webseite. 
Sie strukturieren den Inhalt, liefern Semantik und bestimmen, welche Informationen im Browser dargestellt werden. 

Jedes HTML-Element besteht aus einem Start-Tag, optionalen Attributen, dem meist erforderlichen Inhalt und einem End-Tag. 
Der Start-Tag markiert den Beginn des Elements und enthält den Element-Namen, wie zum Beispiel `h1` für eine Überschrift der höchsten Ebene. 
Attribute, wie `lang="de"` in diesem Beispiel, geben zusätzliche Informationen zum Element, wie etwa die Sprache. 
Der Inhalt, hier `Webtechnologien`, ist der sichtbare Text oder die Daten, die das Element darstellt. 
Der End-Tag schließt das Element, in diesem Fall mit `</h1>`.

![HTML-Element](./assets/tut_01_html_element.png#gh-light-mode-only)
![HTML-Element](./assets/tut_01_html_element_dark.png#gh-dark-mode-only)

:::info
Manche Elemente benötigen und [dürfen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#technical_summary) kein End-Tag besitzen. Dies geht in der Regel nur, falls das Element selbst keinen Inhalt erfordert.
Beispielsweise bei der Einbindung eines Bildes: `<img src="..." alt="...">`.
:::

### Semantik
Die Semantik von HTML-Elementen ist ein wichtiger Bestandteil moderner Webentwicklung. 
Sie sorgt dafür, dass HTML nicht nur zur Darstellung von Inhalten dient, sondern auch deren Bedeutung vermittelt. 
Semantische HTML-Tags beschreiben die Funktion des Inhalts, sodass sowohl Menschen als auch Maschinen (wie Suchmaschinen oder Screenreader) den Kontext und die Struktur besser verstehen können. 
Zum Beispiel signalisiert  `<nav>`, dass es sich um ein Navigationsmenü handelt, während `<footer>` die Fußzeile (i.d.R. mit Links z.B. aufs Impressum) darstellt.

## HTML-Einstieg
### Grundgerüst
```html [showLineNumbers]
<!DOCTYPE html>  <!-- Definition der HTML-Version. Hier HTML5 -->
<html lang="de"> <!-- Wurzelknoten mit den beiden Kindern <head> und <body> -->
<head> <!-- Enthält Meta-Informationen, Links zu Stylesheets und Skripten. In der Regel für
            den Benutzer nicht sichtbar. Ausnahmen sind bspw der Titel, sowie das Favicon. -->
  
    <meta charset="UTF-8"> <!-- Definiert das Encoding des HTML Dokuments -->
    <title>Seitentitel</title>
</head>
<body> <!-- Enthält den eigentlichen Inhalt der Website. Grundsätzlich sind alle im Body
            eingefügten Inhalte auch für den Nutzer sichtbar. -->
    ...
</body>
</html>
```


### Wichtige HTML Elemente

#### Container (ohne semantische Bedeutung)
- `<div>`   Block Element
- `<span>`  Inline Element

```html
<div>
    <p>Ich bin ein Absatz innerhalb eines Block-Containers.</p>
</div>
```

#### Listen
- `<ul>` Ungeordnete Liste
- `<ol>` Geordnete Liste
- `<li>` Listenelement (List Item - immer ein Kindelement von `<ul>` bzw. `<ol>`)

```html
<ol>
    <li>Ich bin das erste Element</li>
    <li>Ich bin das zweite Element</li>
    <li>Ich bin das letzte Element</li>
</ol>
```
<details>
  <summary>So sieht's im Browser aus</summary>
  <div>
    <h6>Ungeordnete Liste (`<ul>`)</h6>
    <ul>
        <li>Ich bin das erste Element</li>
        <li>Ich bin das zweite Element</li>
        <li>Ich bin das letzte Element</li>
    </ul>

    <h6>Geordnete Liste (`<ol>`)</h6>
    <ol>
        <li>Ich bin das erste Element</li>
        <li>Ich bin das zweite Element</li>
        <li>Ich bin das letzte Element</li>
    </ol>
  </div>
</details>

#### Bilder
- `<img src="..." alt="...">` Ein darstellbares Bild. `src` gibt die Quelle des Bildes an. `alt` gibt den Alternativtext an, falls das Bild nicht geladen werden kann. 
Dieser wird bspw. genutzt, falls der Zielserver nicht erreicht werden kann oder wenn [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) zum Einsatz kommen. 

#### Verlinkungen
- `<a href="...">` Clickbarer Link im Body des HTML Dokuments. Bspw. auf [isis](https://isis.tu-berlin.de).
- `<link rel="..." href="...">` Verweis auf (externe) Ressource im `<head>`. Bspw. lassen sich so CSS-Stylesheets einbinden:
    ```html
    <head>
        [...]
        <link rel="stylesheet" href="pfad/zum/stylesheet.css">
    </head>
  ```

#### Überschriften / Text
- `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
- `<p>`
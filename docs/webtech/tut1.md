---
title: "Tutorium 1"
---

# HTML Grundlagen

## HTML Element

HTML-Elemente sind die Grundbausteine jeder Webseite. 
Sie strukturieren den Inhalt, liefern Semantik und bestimmen, wie Informationen im Browser dargestellt werden. 

Jedes HTML-Element besteht aus einem Start-Tag, optionalen Attributen, dem meist erforderlichen Inhalt und einem End-Tag. 
Der Start-Tag markiert den Beginn des Elements und enthält den Element-Namen, wie zum Beispiel `h1` für eine Überschrift der höchsten Ebene. 
Attribute, wie `lang="de"` in diesem Beispiel, geben zusätzliche Informationen zum Element, wie etwa die Sprache. 
Der Inhalt, hier `Webtechnologien`, ist der sichtbare Text oder die Daten, die das Element darstellt. 
Der End-Tag schließt das Element, in diesem Fall mit `</h1>`. 
Gemeinsam ermöglichen diese Komponenten eine präzise Strukturierung und Darstellung von Inhalten im Web.

![HTML-Element](./assets/tut_01_html_element.png#gh-light-mode-only)
![HTML-Element](./assets/tut_01_html_element_dark.png#gh-dark-mode-only)

:::info
Manche Tags benötigen kein End-Tag. So ist es bspw. valide `<img src="..."></img>` oder `<img src="..."/>` zu schreiben. 
Dies geht in der Regel nur, falls das Element selbst keinen Inhalt erfordert.
:::

### Semantik
Die Semantik von HTML-Elementen ist ein wichtiger Bestandteil moderner Webentwicklung. 
Sie sorgt dafür, dass HTML nicht nur zur Darstellung von Inhalten dient, sondern auch deren Bedeutung vermittelt. 
Semantische HTML-Tags beschreiben die Funktion des Inhalts, sodass sowohl Menschen als auch Maschinen (wie Suchmaschinen oder Screenreader) den Kontext und die Struktur besser verstehen können. 
Zum Beispiel signalisiert  `<nav>`, dass es sich um ein Navigationsmenü handelt, während `<section>` eine thematisch zusammenhängende Gruppe von Inhalten beschreibt.

## HTML-Einstieg
### Grundgerüst
```html [showLineNumbers]
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Seitentitel</title>
    </head>
    <body>
        ...
    </body>
</html>
```

Das HTML-Grundgerüst bildet - wie der Name sagt - das Grundgerüst unserer HTML Datei. Sie umfasst u.A. Informationen für 
den Browser, sowie den darzustellenden Inhalt. Wir schauen uns nun die einzelnen Bestandteile an. 

```html
<!DOCTYPE html>
```
Diese Zeile ist historisch gewachsen und daher für moderne Webentwicklung eher ein _do-as-you're-told_ (d.h. wir fügen diese Zeile bei unseren HTML Dateien immer ein). 
Kurzgefasst sagt sie dem Browser, welche Art von HTML zu erwarten ist und entsprechend mit welcher Spezifikation das HTML validiert werden muss - in diesem Fall HTML 5.

Für die Interessierten gibt es hier eine detailiertere Erklärung: [https://www.w3.org/wiki/Doctypes_and_markup_styles](https://www.w3.org/wiki/Doctypes_and_markup_styles).

```html
<html> ... </html>
```
Wurzelknoten um HTML zu kennzeichnen

```html
<head> ... </head>
```
Enthält Metadaten/Metainformationen, welche der Nutzer in der Regel nicht sieht. Darunter fallen bspw. das Encoding (UTF-8, ASCII, usw.), Links zu CSS-Stylesheets und mehr.

Eine Ausnahme bildet das `<title>...</title>` Element, dessen Inhalt dem Benutzer im Tab des Browsers angezeigt wird. 

```html
<body> ... </body>
```
Enthält den eigentlichen Inhalt der Webseite. 

### Wichtige Elemente

Nachfolgend sind Beispiele einiger wichtiger HTML-Elemente. 

#### Container (keine semantische Bedeutung)
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
- `<li>` Listenelement (List Item - immer Kindelement von `<ul>` bzw. `<ol>`)

```html
<ol>
    <li>Ich bin das erste Element</li>
    <li>Ich bin das zweite Element</li>
    <li>Ich bin das letzte Element</li>
</ol>
```

#### Bilder
- `<img src="..." alt="...">`

#### Verlinkungen
- `<a href="...">`
- `<link rel="..." href="...">`

#### Überschriften / Text
- `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
- `<p>`
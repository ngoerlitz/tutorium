---
title: "Tutorium 4"
---

# Betriebsmittelverwaltung

## Analyse Belegungssituation
$$
B = 
\begin{pmatrix}
5 & 1 \\
1 & 1 \\
2 & 2
\end{pmatrix}
$$

$$
G =
\begin{pmatrix}
9 & 3 \\
2 & 5 \\
3 & 3
\end{pmatrix}
$$

$$
f = \begin{pmatrix}
1 & 1
\end{pmatrix}
$$

Die Restanforderungsmatrix $R$ lässt sich durch folgende Gleichung ausdrücken: $R = G - B$

## Bankieralgorithmus
Der Bankieralgorithmus wird genutzt um Verklemmungen (Deadlocks) zu erkennen. Dies geschieht, indem wir versuchen eine gültige Ausführungsreihenfolge der Prozesse zu finden, sodass wir nur die zur Verfügung stehenden Ressourcen nutzen. 

---

Wir schauen uns das Beispiel aus dem 4. Tutoriumsblatt an:

In der folgenden Aufgabe existieren die folgenden 4 Betriebsmittel: $A, B, C, D$, sowie die Prozesse $P_1, P_2, P_3, P_4$. Zu Beginn stehen von jedem Betriebsmittel 4 Einheiten zur Verfügung. 

:::danger[Hinweis]
In Videos wird oft eine andere Schreibweise genutzt als in der Vorlesung (Matrixschreibweise). Falls eine solche Aufgabe in der Klausur vorkommen sollte, haltet euch bitte an die Matrixschreibweise!
:::

Die freien Ressourcen lassen sich also als folgenden Vektor ausdrücken: $
f = \begin{pmatrix}
4 & 4 & 4 & 4
\end{pmatrix}
$

#### Beginn
Zu Beginn besteht unsere Belegungsmatrix ausschließlich aus Nullen - es wurden schließlich noch keine 
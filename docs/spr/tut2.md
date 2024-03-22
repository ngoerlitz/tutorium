---
title: "Tutorium 2"
---

## Scheduling
Eine zentrale Aufgabe eines Betriebssystems ist das sogenannte Scheduling. 
Welche Eigenschaften besitzt ein gutes Schedulingverfahren?
- **Hohe Effizienz**: Hohe Auslastung des Prozessors
- **Geringe Antwortzeit** bei interaktiven Prozessen
- **Fairness** durch gerechte Verteilung der CPU-Leistung und Wartezeit unter den Prozessen


### Beispiele
Für die folgenden Schedulingstrategien nutzen wir folgende Prozesse:

| Prozess      | A | B | C | D |
|--------------|---|---|---|---|
| Ankunftszeit | 0 | 3 | 4 | 8 |
| Dauer        | 5 | 3 | 8 | 4 |
| Priorität    | 4 | 1 | 2 | 3 |


#### FCFS

![fcfs](./assets/w2_fcfs.png)

#### Prio-NP

![priono](./assets/w2_prionp.png)

#### SRTN

![srtn](./assets/w2_srtn.png)

#### Round Robin ($\tau$ = 2)

![rr_tau_2](./assets/w2_rr_tau_2.png)

### Wartezeit und Antwortzeit
- Die Wartezeit ist die Zeit zwischen Ankunft und Beendigung, in der der Prozess nicht ausgeführt wird (d.h. wartet)
- Antwortzeit ist die Zeit zwischen Ankunft und Beendigung des Prozesses

Die Warte-/Antwortzeit des Systems setzt sich aus der Gesamtwartezeit der Prozesse geteilt durch die Anzahl an Prozessen zusammen. Es wird damit die durchschnittliche Warte-/Antwortzeit eines Verfahrens bestimmt. Wir nutzen als Beispiel die Wartezeiten von FCFS. In diesem Fall haben wir eine gesamte Wartezeit von:
$$
\sum_{i = 1}^{4} w_i = 0 + 2 + 4 + 8 = 14
$$
Wir haben 4 Prozesse, also folgt eine Systemwartezeit von: $\frac{14}{4} = 3.5$. Analog für die Antwortzeit.

Für die oben gezeigten Schedulingverfahren gelten die folgenden Zeiten:

#### FCFS
| Prozess     |      System      |  A  |  B  |  C   |  D   |
|-------------|:----------------:|:---:|:---:|:----:|:----:|
| Wartezeit   |  $\frac{14}{4}$  |  0  |  2  |  4   |  8   |
| Antwortzeit |  $\frac{34}{4}$  |  5  |  5  |  12  |  12  |

#### PRIO-NP
| Prozess     |     System     | A | B  | C | D |
|-------------|:--------------:|:-:|:--:|:-:|:-:|
| Wartezeit   | $\frac{20}{4}$ | 0 | 14 | 1 | 5 |
| Antwortzeit | $\frac{40}{4}$ | 5 | 17 | 9 | 9 |

#### SRTN
| Prozess     |     System     | A | B | C  | D |
|-------------|:--------------:|:-:|:-:|:--:|:-:|
| Wartezeit   | $\frac{10}{4}$ | 0 | 2 | 8  | 0 |
| Antwortzeit | $\frac{30}{4}$ | 5 | 5 | 16 | 4 |

#### RR ($\tau$ = 2)
| Prozess     |     System     | A | B | C  | D |
|-------------|:--------------:|:-:|:-:|:--:|:-:|
| Wartezeit   | $\frac{20}{4}$ | 4 | 4 | 8  | 4 |
| Antwortzeit | $\frac{40}{4}$ | 9 | 7 | 16 | 8 |

#### MLF
| Prozess     |     System     | A  | B | C  | D  |
|-------------|:--------------:|:--:|:-:|:--:|:--:|
| Wartezeit   | $\frac{25}{4}$ | 9  | 1 | 8  | 7  |
| Antwortzeit | $\frac{45}{4}$ | 14 | 4 | 16 | 11 |


## Periodische Prozesse
|  Prozesse  |  Dauer ($D$)  |  Periode ($P$)  |
|:----------:|:-------------:|:---------------:|
|     A      |       1       |        3        |
|     B      |       1       |        5        |
|     C      |       1       |        5        |

### Zulässiger Schedule
$$
\sum_{i = 1}^{n} \frac{D_i}{P_i} = (\frac{1}{3} + \frac{1}{5} + \frac{1}{5}) \approx 0.73 \leq 1
$$
# Fortschritt

Log der Lernreise. Neueste Einträge oben. Bei Wiedereinstieg nach Pause: hier lesen,
dann in `course/` bei der letzten offenen Lektion weitermachen.

## 2026-07-07 – Lektion 4 angelegt
- Lektion 4 (Funktionen) geschrieben: `course/01-javascript-basics/04-functions.md`
  (+ `.de.md`), Übung unter `course/01-javascript-basics/exercises/04-exercise.js`.
- Behandelt Funktionsdeklarationen, Parameter vs. Argumente, Rückgabewerte
  (inkl. implizites `undefined` und Sofort-Abbruch-Verhalten), Arrow Functions
  und impliziten Return, sowie Funktionen, die andere Funktionen aufrufen. Die
  Übung führt alles Bisherige zusammen (Template Literals, Bedingungen,
  Schleifen) zu kleinen wiederverwendbaren Funktionen, die auf Task-Objekten
  arbeiten.
- **Aktueller Stand:** Lektion 4 bereit, noch nicht bearbeitet.

## 2026-07-07 – Lektion 4 abgeschlossen
- `04-exercise.js` durchgearbeitet; läuft am Ende fehlerfrei durch. TODOs 1-5
  waren **nicht** beim ersten Versuch korrekt – der Nutzer hat mehrere
  Fehlerrunden in einem separaten Chat durchgearbeitet (um diese Session
  übersichtlich zu halten) und dann den fertigen Code hier zur Prüfung
  vorgelegt:
  - TODO 1 (`isUrgent`): den Parameter `task` mit dem äußeren `tasks`-Array
    verwechselt, außerdem anfangs `return` in einem oder beiden Zweigen
    vergessen.
  - TODO 2 (`formatTask`): zunächst `console.log` statt `return` benutzt –
    musste geklärt werden, dass beides nicht austauschbar ist (eines gibt
    aus, das andere liefert einen Wert an den Aufrufer zurück).
  - TODO 3 (`countDone`): mehrere Runden – fehlendes `let`/`const` bei der
    Schleifenvariable, `return` zunächst innerhalb der Schleife platziert
    (löste also schon nach dem ersten Element aus, statt nach dem Zählen
    aller), und die Zählvariable war anfangs global statt lokal zur Funktion.
  - TODO 4 (`countUrgent`): `for (task in tasks)` statt `for (task of tasks)`
    benutzt – `for...in` liefert den Index/Schlüssel, nicht das Element
    selbst, was still falsche Werte erzeugte, bis korrigiert.
  - TODO 5 (`logAllTasks`): dieselbe `for...in`/`for...of`-Verwechslung kam
    nochmal vor, bevor die hier gezeigte korrekte Version stand.
  Für später im Blick behalten: Die `for...in`-vs.-`for...of`-Verwechslung
  kam zweimal hintereinander vor (TODO 4 und 5) – lohnt sich, das nächste Mal,
  wenn Schleifen über Objekte vs. Arrays drankommen, gezielt und explizit
  nochmal anzusprechen.
- TODO 6 hatte einen echten Bug: das neue Task-Objekt wurde in `[...]`
  eingepackt (also ein Array, das ein Objekt enthält) statt es direkt zu
  übergeben – `isUrgent` las dadurch `undefined` für `.important`/`.done` und
  gab still `false` zurück. Selbst diagnostiziert, nachdem der Unterschied
  zwischen erwarteter und tatsächlicher Ausgabe aufgezeigt wurde. Behoben
  durch Entfernen der Array-Klammern.
- Nutzer berichtete, dass Funktionen spürbar schwerer waren als Lektion 1-3 –
  deckt sich mit dem tatsächlichen Verlauf oben, war also kein rein
  subjektiver Eindruck. Das ist die erste Lektion, die mehrere Konzepte
  gleichzeitig im Kopf behalten verlangt (Parameter, Rückgabewerte, Funktionen
  die Funktionen aufrufen), mehrere Korrekturrunden sind hier also normal,
  kein Warnsignal. Korrektheit vor Stil priorisiert; zwei optionale
  Stil-Vorschläge (redundante `=== true`/`=== false`-Vergleiche, unnötiges
  `else { continue }`) bewusst nicht umgesetzt.
- **Aktueller Stand:** Lektion 4 vollständig fertig. Bereit für Lektion 5
  (Arrays & ihre Methoden) – noch nicht angelegt.

## 2026-07-07 – Lektion 3 abgeschlossen
- `03-exercise.js` komplett durchgearbeitet; läuft fehlerfrei durch, alle 6
  TODOs korrekt gelöst (Bonus inklusive).
- Typische Verwechslungen diesmal: alle drei `for(...)`-Teile auf einmal
  schreiben statt sie Schritt für Schritt aufzubauen, `for...of` (nur der Wert)
  mit klassischem `for` verwechseln (hier gebraucht, weil die Aufgabe eine
  1-basierte Nummer neben jedem Wert wollte), sowie `taskTexts.lengths`
  (Tippfehler + falsches Ziel – Array-Länge statt Länge des einzelnen Strings).
  Alles nach einem Beispiel mit anderen Variablen selbst korrigiert.
- Kleiner Stil-Hinweis, der sich bei TODO 5/6 eingeschlichen hat: `==` statt
  der Kurs-Konvention `===` aus Lektion 2 benutzt. Kein Bug hier (beide Seiten
  sind Strings), als Gewohnheits-Erinnerung markiert, nicht direkt korrigiert.
- **Aktueller Stand:** Lektion 3 vollständig fertig. Bereit für Lektion 4
  (Funktionen) – noch nicht angelegt.

## 2026-07-07 – Lektion 2 abgeschlossen (überarbeitet)
- `02-exercise.js` komplett durchgearbeitet; läuft fehlerfrei durch, alle 6
  TODOs korrekt gelöst (Bonus inklusive).
- TODO 5 wurde nach dem ersten Commit nochmal überarbeitet: Der erste Versuch
  hat direkt auf `task.important` (einen Boolean) geswitcht statt auf einen
  daraus abgeleiteten `priority`-String, wie die Aufgabe eigentlich wollte –
  funktional okay, aber eine andere Übung als gefragt. Umgeschrieben, sodass
  erst per `if`/`else` `priority` bestimmt wird und danach darauf geswitcht
  wird. Dabei zwei zusätzliche Bugs aus dem Umschreiben selbst gefunden: eine
  nicht deklarierte Variable wurde still zu einer impliziten globalen Variable
  (funktioniert ohne `"use strict"`, ist aber eine klassische JS-Falle, die es
  wert ist, in einer späteren Lektion nochmal aufzugreifen), sowie ein
  Tippfehler im Variablennamen (`priotity` vs. `priority`), wodurch die
  deklarierte Variable nie die tatsächlich benutzte war.
- Insgesamt brauchte es mehrere Runden gezielter Nachfragen: Booleans müssen
  nicht verglichen werden (`if (task.done)`, nicht `if (task.done === true)`),
  `!` dreht einen Wert um statt "wenn nicht" zu bedeuten, Truthy/Falsy
  angewendet auf `task.list`. Das ist normaler Teil der Lernkurve, kein
  Rückschritt – bei neuen Operatoren lohnt es sich, weiterhin konkret mit
  Beispielen statt abstrakt zu erklären.
- **Aktueller Stand:** Lektion 2 vollständig fertig. Bereit für Lektion 3
  (Schleifen) – noch nicht angelegt.

## 2026-07-07 – Lektion 1 abgeschlossen
- `01-exercise.js` komplett durchgearbeitet; läuft fehlerfrei durch.
- Typische Anfänger-Stolperfallen unterwegs erkannt und behoben: In Objekt-Literalen
  trennt `:` Schlüssel und Wert, nicht `=`; Properties werden per Punkt-Notation
  abgerufen (`task.id`), nicht wie ein Funktionsaufruf (`task(id)`); Template
  Literals brauchen Backticks (einfach, nicht doppelt) und `${...}` (geschweifte
  Klammern, keine runden). Lohnt sich, in kommenden Lektionen auf ähnliche
  Syntax-Verwechslungen zu achten.
- **Aktueller Stand:** Lektion 1 vollständig fertig. Bereit für Lektion 2
  (Operatoren & Bedingungen) – noch nicht angelegt.

## 2026-07-06 – Start
- Kurs aufgesetzt (`course/00-roadmap.md`), Lektion 1 (Variablen & Datentypen)
  angelegt.
- Kontext: Nutzer ist Programmier-Einsteiger, keine echten Vorkenntnisse in einer
  anderen Sprache vorausgesetzt. Fokus liegt ausschließlich auf **JavaScript, danach
  Node.js** – alles andere ist für diesen Kurs irrelevant. Ziel ist der komplette
  Neubau einer eigenen Todo-App (Name noch offen, vorerst `todo-app`) als
  Übungsprojekt. Eine ältere Version (Cloudflare + `index.html`, damals "Fokus"
  genannt) dient nur als Vorbild fürs Gefühl/die Features, wird aber nicht
  wiederverwendet.
- Dokumentation ist von Anfang an zweisprachig: jede Doku-Datei existiert als
  englische Version (Standard) und deutsche Version (`*.de.md`), gleicher Inhalt.
  Code- und Übungsdateien bleiben ausschließlich Englisch.
- **Aktueller Stand:** Lektion 1
  (`course/01-javascript-basics/01-variables-and-data-types.md`) ist bereit, noch
  nicht bearbeitet.

## Nächster Schritt
Lektion 5 (Arrays & ihre Methoden) starten, sobald angelegt.

English version: [PROGRESS.md](PROGRESS.md)

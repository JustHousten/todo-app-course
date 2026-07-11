# Fortschritt

Log der Lernreise. Neueste Einträge oben. Bei Wiedereinstieg nach Pause: hier lesen,
dann in `course/` bei der letzten offenen Lektion weitermachen.

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
Lektion 4 (Funktionen) starten, sobald angelegt.

English version: [PROGRESS.md](PROGRESS.md)

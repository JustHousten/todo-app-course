# Fortschritt

Log der Lernreise. Neueste Einträge oben. Bei Wiedereinstieg nach Pause: hier lesen,
dann in `course/` bei der letzten offenen Lektion weitermachen.

## 2026-07-07 – Lektion 2 angelegt
- Lektion 2 (Operatoren & Bedingungen) geschrieben:
  `course/01-javascript-basics/02-operators-and-conditionals.md` (+ `.de.md`),
  Übung unter `course/01-javascript-basics/exercises/02-exercise.js`.
- Behandelt `===`/`!==` vs. `==`/`!=` (Kursregel: immer strikte Gleichheit),
  `&&`/`||`/`!`, `if`/`else if`/`else`, Truthy/Falsy-Werte (verknüpft mit
  `list: null` im Task-Datenmodell) und `switch`.
- **Aktueller Stand:** Lektion 2 bereit, noch nicht bearbeitet.

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
Lektion 2 durcharbeiten:
`course/01-javascript-basics/02-operators-and-conditionals.md` lesen, dann
`course/01-javascript-basics/exercises/02-exercise.js` ausfüllen.

English version: [PROGRESS.md](PROGRESS.md)

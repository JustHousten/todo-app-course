# Fahrplan – Todo-App-Kurs

Kompletter Kursplan. Reihenfolge ist bewusst so gewählt, dass jede Phase auf der
vorherigen aufbaut und so bald wie möglich an echtem Code der eigenen Todo-App
arbeitet – nicht an Spielzeug-Beispielen ohne Bezug.

**Bewusst nicht Teil dieses Kurses (aktuell):** TypeScript, React/Vue/andere
Frameworks, Datenbanken über einfache Dateien hinaus, VPS-Aufbau im Detail. Das kommt
erst, wenn die Grundlagen sitzen und der Bedarf von selbst entsteht.

## Phase 1 – JavaScript-Grundlagen (kein Browser nötig, läuft mit `node`)
1. Variablen & Datentypen
2. Operatoren, Bedingungen (`if`/`else`, `switch`)
3. Schleifen (`for`, `while`, `for...of`)
4. Funktionen (Deklarationen, Arrow Functions, Parameter, Rückgabewerte)
5. Arrays & ihre Methoden (`push`, `filter`, `map`, `find`, `sort`, …)
6. Objekte (Properties, Methoden, Verschachtelung, Destructuring)
7. Scope & Module (`let`/`const`-Scope, ES-Modules `import`/`export`)

→ Praxis: Task- und List-Objekte wie im alten Referenz-Datenmodell nachbauen,
Funktionen schreiben, die auf Arrays von Tasks arbeiten (filtern nach heute, nach
Liste, etc.) – alles nur in der Konsole, noch ohne UI.

## Phase 2 – JavaScript im Browser (DOM & Events)
8. DOM-Grundlagen (Elemente auswählen, erzeugen, verändern)
9. Events (Klick, Input, Formulare, Event-Objekt)
10. `localStorage` (Daten im Browser speichern)

→ Praxis: Erste lauffähige Mini-Version der Todo-App im Browser – Aufgabe
eintippen, anzeigen, abhaken, in `localStorage` speichern. Noch ohne
Wischgesten/Bottom-Sheets.

## Phase 3 – JavaScript fortgeschritten
11. Array-Methoden vertiefen (`reduce`, Verkettung von `map`/`filter`)
12. Destructuring & Spread/Rest im Detail
13. `async`/`await`, Promises, `fetch()`

→ Praxis: Code aufräumen/modularisieren, vorbereiten auf spätere Kommunikation mit
einem eigenen Backend.

## Phase 4 – Frontend der Todo-App fertigstellen
14. Wischgesten (Touch- und Maus-Events nachbauen)
15. Bottom-Sheets (Listen-/Datumsauswahl), History-API für Zurück-Navigation
16. Feinschliff: Fortschritts-Ring, Tabs, Design-Umsetzung mit CSS-Variablen

→ Ergebnis: Frontend, das sich wie das alte Vorbild anfühlt, komplett selbst
geschrieben.

## Phase 5 – Node.js-Grundlagen
17. Node.js einordnen (gleiche Sprache, andere Umgebung als Browser)
18. Module & npm (`require`/`import`, `package.json`, Pakete installieren)
19. Dateisystem (`fs`), einfacher HTTP-Server ohne Framework
20. Express (oder vergleichbar) für eine kleine REST-API

## Phase 6 – Node.js-Backend für die Todo-App
21. REST-API für Tasks/Listen (GET/POST/PUT/DELETE)
22. Persistenz (zunächst JSON-Datei, später ggf. SQLite)
23. Einfacher Login-Schutz (kein Enterprise-Aufwand, reicht für Eigengebrauch)
24. Frontend an eigenes Backend anbinden statt `localStorage` → **echte
    Geräte-Synchronisation**

## Phase 7 – Deployment
25. Eigener Server (z. B. Hetzner, günstigster Plan) – Setup wird im Kurs erarbeitet
26. Node-Prozess dauerhaft laufen lassen, Domain, HTTPS
27. Die App läuft live, unabhängig von Cloudflare & Co.

---

Fortschritt und aktuelle Position: siehe [`PROGRESS.de.md`](../PROGRESS.de.md).

English version: [00-roadmap.md](00-roadmap.md)

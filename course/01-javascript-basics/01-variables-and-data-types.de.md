# Lektion 1 – Variablen & Datentypen

## Wo JavaScript läuft

JavaScript läuft an zwei Orten: im **Browser** (Konsole der Entwicklertools, Taste
F12) und direkt im Terminal via **Node.js**. Node ist bei dir bereits installiert.
Für diese Lektion reicht das Terminal:

```
node course/01-javascript-basics/exercises/01-exercise.js
```

Das führt eine `.js`-Datei aus – du schreibst Code in eine Datei, speicherst sie,
und der Befehl `node <dateiname>` lässt Node.js sie ausführen und die Ausgaben im
Terminal anzeigen.

## Was ist eine Variable?

Eine Variable ist ein benannter Speicherplatz für einen Wert – ein Etikett, das du
auf eine "Box" mit einem Inhalt klebst, damit du später darauf zugreifen kannst.

```js
let punkte = 10;
console.log(punkte); // gibt 10 aus
```

`console.log(...)` ist der Befehl, um etwas im Terminal (bzw. in der
Browser-Konsole) auszugeben – dein wichtigstes Werkzeug, um zu sehen, was dein
Code gerade tut.

## `let` und `const`

In JavaScript muss man beim Anlegen einer Variable eines von zwei Schlüsselwörtern
davorschreiben:

```js
let x = 5;              // Wert kann sich später ändern
const name = "Justin";  // Wert steht fest, kann NICHT neu zugewiesen werden
```

Faustregel: **immer `const` verwenden, außer du weißt bereits, dass sich der Wert
später ändern muss – dann `let`.** Das schützt dich vor Fehlern, weil du gar nicht
erst aus Versehen etwas überschreiben kannst, das eigentlich fest sein sollte.

Es gibt noch ein drittes Schlüsselwort, `var` – das ist veraltet (aus sehr alten
JavaScript-Zeiten) und wird in diesem Kurs nicht benutzt.

Jede Anweisung in JavaScript endet mit einem Semikolon `;`. Man kann es oft
weglassen, ohne dass ein Fehler entsteht, aber wir schreiben von Anfang an sauber
mit Semikolon.

## Primitive Datentypen

JavaScript kennt ein paar grundlegende ("primitive") Datentypen:

| Typ | Bedeutung | Beispiel |
|---|---|---|
| `string` | Text | `"Wäsche waschen"` |
| `number` | Zahl – JS unterscheidet **nicht** zwischen Ganzzahl und Kommazahl, beides ist einfach `number` | `42`, `3.14` |
| `boolean` | Wahr/Falsch-Wert, **klein**geschrieben | `true`, `false` |
| `undefined` | eine Variable, der noch nie ein Wert zugewiesen wurde | `let x; console.log(x); // undefined` |
| `null` | ein Wert, der bewusst "kein Wert" bedeutet | `let datum = null;` |

`undefined` vs. `null` ist am Anfang leicht zu verwechseln: `undefined` heißt
"hier wurde schlicht nichts zugewiesen" (passiert oft aus Versehen), `null` heißt
"hier wurde absichtlich eingetragen, dass es keinen Wert gibt". Im Datenmodell
unserer Todo-App (siehe unten) ist z. B. `date: null` ein bewusstes "diese Aufgabe
hat keine Deadline" – kein Fehler, sondern Absicht.

Mit `typeof` kannst du herausfinden, welchen Typ eine Variable gerade hat:

```js
console.log(typeof "Hallo");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
```

Das ist besonders beim Debuggen nützlich, wenn du nicht sicher bist, was eine
Variable gerade enthält.

## Template Literals (Texte mit eingebauten Werten)

Statt Text mit `+` zusammenzukleben, benutzt man in JavaScript **Backticks**
(das Zeichen `` ` ``, meist links neben der 1 auf der Tastatur) und schreibt Werte
mit `${...}` direkt in den Text:

```js
const text = "Wäsche waschen";
console.log(`Aufgabe: ${text}`);
// Ausgabe: Aufgabe: Wäsche waschen
```

Das nennt man **Template Literal**. Es funktioniert nur mit Backticks, nicht mit
normalen Anführungszeichen (`"..."` oder `'...'`).

## Objekte (Vorschau)

Ein Objekt bündelt mehrere zusammengehörige Werte unter einem gemeinsamen Namen,
jeweils mit einem eigenen Schlüssel (Property genannt):

```js
const task = {
  text: "Wäsche waschen",
  done: false
};

console.log(task.text);  // Zugriff per Punkt: "Wäsche waschen"
console.log(task.done);  // false
```

Objekte gehören eigentlich in eine spätere, ausführlichere Lektion, aber du
brauchst sie schon jetzt für die Übung, weil das Datenmodell unserer Todo-App
darauf aufbaut – eine Aufgabe ("Task") sieht so aus:

```js
// { id, text, done, important, date, list, created }
```

## Aufgabe

Öffne [`exercises/01-exercise.js`](exercises/01-exercise.js) und arbeite die
Kommentare darin ab (die Kommentare in Übungsdateien sind bewusst durchgehend auf
Englisch, wie der Code selbst später auch). Führe die Datei danach mit `node` aus
(Befehl siehe oben), um deine Ausgaben zu prüfen.

## Verständnis-Check (keine Abgabe, nur für dich)

1. Warum bevorzugt man in JS `const` gegenüber `let`, wenn es geht?
2. Was ist der Unterschied zwischen `null` und `undefined`?
3. Was gibt `typeof 3.14` zurück – und warum ist das derselbe Typ wie bei
   `typeof 3`?

Wenn du unsicher bist: einfach fragen, bevor es weitergeht.

English version: [01-variables-and-data-types.md](01-variables-and-data-types.md)

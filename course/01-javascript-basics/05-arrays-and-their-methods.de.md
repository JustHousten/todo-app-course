# Lektion 5 – Arrays & ihre Methoden

## Kurzer Rückblick

Du hast Arrays schon seit Lektion 3 benutzt, nur noch nicht unter ihrem vollen
Namen:

```js
const taskTexts = ["Buy groceries", "Do laundry", "Walk the dog"];

console.log(taskTexts.length);   // 3 — wie viele Elemente
console.log(taskTexts[0]);       // "Buy groceries" — Zugriff per Position, ab 0

for (const text of taskTexts) {  // über jedes Element schleifen
  console.log(text);
}
```

In dieser Lektion geht es um die Werkzeuge, die viele dieser manuellen
`for`-Schleifen durch eine einzige Zeile ersetzen – die Array-**Methoden**.

## Elemente hinzufügen und entfernen

```js
const tasks = ["Buy groceries", "Do laundry"];

tasks.push("Walk the dog"); // fügt am Ende hinzu
console.log(tasks); // ["Buy groceries", "Do laundry", "Walk the dog"]

tasks.pop(); // entfernt das letzte Element und gibt es dir zurück
console.log(tasks); // ["Buy groceries", "Do laundry"]
```

Anders als die Methoden weiter unten **verändern** `push` und `pop` das
ursprüngliche Array direkt ("mutieren" es), statt ein neues zu erzeugen.

## `.filter()` — nur behalten, was passt

```js
const tasks = [
  { text: "Buy groceries", important: true, done: false },
  { text: "Do laundry", important: false, done: true },
  { text: "Walk the dog", important: true, done: true },
];

const doneTasks = tasks.filter((task) => task.done);
console.log(doneTasks);
// [{ text: "Do laundry", ... }, { text: "Walk the dog", ... }]
```

`.filter()` bekommt eine Funktion als Argument. Diese Funktion läuft einmal
für **jedes Element** im Array. Überall, wo sie `true` zurückgibt, bleibt das
Element erhalten; überall, wo sie `false` zurückgibt, fliegt es raus. Das
Ergebnis ist ein **komplett neues Array** – `tasks` selbst bleibt unangetastet.

Das ersetzt genau das Muster, das du in früheren Lektionen von Hand
geschrieben hast: mit `for...of` schleifen, mit `if` prüfen, Treffer manuell
einsammeln. `.filter()` erledigt das alles in einer Zeile.

## `.map()` — jedes Element umwandeln

```js
const texts = tasks.map((task) => task.text);
console.log(texts);
// ["Buy groceries", "Do laundry", "Walk the dog"]
```

`.map()` lässt ebenfalls eine Funktion einmal pro Element laufen, aber statt
wahr/falsch zu entscheiden, wird das, was die Funktion **zurückgibt**, zum
neuen Element an genau dieser Position. Das Ergebnis hat immer dieselbe
**Länge** wie das ursprüngliche Array – nur jedes Element umgewandelt. Gibt
ebenfalls ein neues Array zurück; das Original bleibt unangetastet.

## `.find()` — den ersten Treffer holen

```js
const firstImportant = tasks.find((task) => task.important);
console.log(firstImportant);
// { text: "Buy groceries", important: true, done: false }
```

Wie `.filter()`, stoppt aber beim **ersten** Treffer und gibt dir genau dieses
eine Element direkt zurück – kein Array. Passt nichts, gibt `.find()`
`undefined` zurück.

## `.sort()` — und seine Standard-Falle

```js
const numbers = [5, 40, 100, 25];

numbers.sort();
console.log(numbers); // [100, 25, 40, 5] — alles andere als numerisch sortiert!
```

Hier die Falle: Standardmäßig wandelt `.sort()` alles in **Strings** um und
vergleicht sie alphabetisch. `"100"` kommt alphabetisch vor `"25"` (`"1"` ist
ein "kleineres" Zeichen als `"2"`), deshalb liefert `.sort()` bei Zahlen ohne
Weiteres Unsinn wie `[100, 25, 40, 5]` statt des numerisch sortierten
`[5, 25, 40, 100]`.

Die Lösung: `.sort()` eine **Vergleichsfunktion** mitgeben, die ihr sagt, wie
zwei Elemente zueinander sortiert werden sollen:

```js
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 25, 40, 100]
```

Du musst nicht auswendig wissen, *warum* `a - b` funktioniert – merk dir
einfach das Muster: sortierst du Zahlen, gib immer `(a, b) => a - b`
(aufsteigend) oder `(a, b) => b - a` (absteigend) mit. Beachte außerdem:
Anders als `.filter()`/`.map()` **verändert** `.sort()` das ursprüngliche
Array, statt ein neues zurückzugeben.

## Verkettung (Chaining)

Weil `.filter()` und `.map()` beide Arrays zurückgeben, kannst du direkt eine
weitere Methode auf das Ergebnis anwenden:

```js
const openTaskTexts = tasks
  .filter((task) => !task.done)
  .map((task) => task.text);
```

Lies das wie eine Pipeline: erst herausfiltern, was du willst, dann das
Übriggebliebene umwandeln.

## Aufgabe

Öffne [`exercises/05-exercise.js`](exercises/05-exercise.js) und arbeite die
Kommentare darin ab (wie besprochen durchgehend auf Englisch). Ausführen mit:

```
node course/01-javascript-basics/exercises/05-exercise.js
```

## Verständnis-Check (keine Abgabe, nur für dich)

1. Was ist der Kernunterschied zwischen dem, was `.filter()` und `.map()`
   jeweils zurückgeben, verglichen mit dem ursprünglichen Array?
2. Warum liefert `[5, 40, 100, 25].sort()` (ohne Argumente) ein
   falsch aussehendes Ergebnis für Zahlen?
3. `.find()` versus `.filter()` — wann würdest du zu welchem greifen?

Wenn du unsicher bist: einfach fragen, bevor es weitergeht.

English version: [05-arrays-and-their-methods.md](05-arrays-and-their-methods.md)

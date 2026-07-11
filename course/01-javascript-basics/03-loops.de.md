# Lektion 3 – Schleifen

## Warum Schleifen

Ohne Schleifen bedeutet eine Aktion zu wiederholen: denselben Code immer wieder
per Copy-Paste einfügen – einmal pro Element. Schleifen lassen dich den Code
**einmal** schreiben und ihn **mehrfach** ausführen – unverzichtbar, sobald
deine Todo-App mehr als eine Handvoll Aufgaben anzeigen soll.

## Die klassische `for`-Schleife

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

Eine `for`-Schleife hat drei Teile, durch Semikolons getrennt, alle in den
Klammern:

```
for ( Startpunkt ; Bedingung zum Weitermachen ; was nach jeder Runde passiert ) { ... }
```

- **`let i = 0`** — läuft einmal, ganz am Anfang. Deklariert eine Zählvariable.
- **`i < 5`** — wird *vor* jeder Runde geprüft. Solange das `true` ist, läuft
  der Schleifenkörper erneut. Sobald es `false` ist, stoppt die Schleife.
- **`i++`** — läuft *nach* jeder Runde. Kurzform für `i = i + 1`.

Die Schleife oben also: Start bei `0`, weitermachen solange kleiner als `5`,
jede Runde `1` addieren. Deshalb gibt sie `0` bis `4` aus – fünf Runden, nicht
sechs, weil `i < 5` `false` wird, sobald `i` den Wert `5` erreicht.

## Die `while`-Schleife

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

Gleiche Idee wie `for`, nur aufgeteilt: Du deklarierst die Zählvariable *vor*
der Schleife, schreibst nur die Bedingung ins `while (...)`, und musst dich
*selbst* darum kümmern, die Zählvariable im Schleifenkörper zu erhöhen. Vergisst
du `count++`, entsteht eine **Endlosschleife** – die Bedingung wird nie
`false`, und dein Programm hört nie auf. `for` bündelt alle drei Teile bewusst
zusammen, um genau diesen Fehler schwerer zu machen. Deshalb wird `for` eher
für "N-mal wiederholen"-Situationen benutzt, während `while` eher zum Einsatz
kommt, wenn du vorher nicht weißt, wie viele Runden du brauchst (z. B. "immer
wieder fragen, bis der Nutzer etwas Gültiges eingibt").

## `for...of` – über Arrays schleifen

Ein Array ist eine geordnete Liste von Werten (Arrays behandeln wir richtig in
der nächsten Lektion – für jetzt reicht: eckige Klammern `[...]` enthalten
eine Liste):

```js
const taskTexts = ["Buy groceries", "Do laundry", "Walk the dog"];

for (const text of taskTexts) {
  console.log(text);
}
// Buy groceries
// Do laundry
// Walk the dog
```

`for...of` liest sich als "für jedes Element **von** dieser Liste, tu
Folgendes". Keine Zählvariable, keine Bedingung, kein `i++`, um das du dich
selbst kümmern musst – es geht automatisch jedes Element durch, eins nach dem
anderen, und gibt dir jedes davon direkt in `text`. Das ist die Schleife, die
du ständig benutzen wirst, sobald wir mit Arrays von Aufgaben arbeiten.

Eine kleine Zusatz-Info, die du für eine der Übungen brauchst: Jeder String
(und jedes Array) hat eine `.length`-Eigenschaft, die dir sagt, wie viele
Zeichen (bzw. Elemente) er/es hat:

```js
console.log("Hello".length); // 5
```

## `break` und `continue`

Zwei Schlüsselwörter, die mittendrin verändern, wie eine Schleife läuft:

- **`break`** — stoppt die Schleife sofort, überspringt alle verbleibenden
  Runden.
- **`continue`** — überspringt nur die *aktuelle* Runde und macht direkt mit
  der nächsten weiter.

```js
for (const text of taskTexts) {
  if (text === "Do laundry") {
    continue; // diese hier überspringen, mit dem Rest weitermachen
  }
  console.log(text);
}
// Buy groceries
// Walk the dog
```

```js
for (const text of taskTexts) {
  if (text === "Do laundry") {
    break; // Schleife komplett stoppen, genau hier
  }
  console.log(text);
}
// Buy groceries
```

## Aufgabe

Öffne [`exercises/03-exercise.js`](exercises/03-exercise.js) und arbeite die
Kommentare darin ab (wie besprochen durchgehend auf Englisch). Ausführen mit:

```
node course/01-javascript-basics/exercises/03-exercise.js
```

## Verständnis-Check (keine Abgabe, nur für dich)

1. Warum kann eine `while`-Schleife versehentlich endlos laufen, eine
   `for`-Schleife macht diesen Fehler aber unwahrscheinlicher?
2. Was ist der Unterschied zwischen `break` und `continue`?
3. Wann würdest du `for...of` statt einer klassischen `for`-Schleife
   verwenden?

Wenn du unsicher bist: einfach fragen, bevor es weitergeht.

English version: [03-loops.md](03-loops.md)

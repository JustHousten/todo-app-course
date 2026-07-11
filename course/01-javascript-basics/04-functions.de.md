# Lektion 4 – Funktionen

## Warum Funktionen

Schleifen wiederholen **denselben** Code mehrfach hintereinander. Funktionen
sind etwas anderes: Sie lassen dich einen Codeblock **einmal** verpacken, ihm
einen Namen geben, und ihn dann immer wieder ausführen – wann immer du willst,
jedes Mal mit **anderen Eingabewerten**, nicht nur an einer festen Stelle im
Programm. Jeder Code, den du an mehreren verschiedenen Stellen wiederverwenden
möchtest, gehört in eine Funktion.

## Funktionsdeklarationen

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Justin"); // Hello, Justin!
greet("Anna");   // Hello, Anna!
```

Aufbau:
- **`function`** — das Schlüsselwort, mit dem eine Funktionsdeklaration
  beginnt.
- **`greet`** — der Name der Funktion, mit dem du sie später aufrufst.
- **`(name)`** — die **Parameter**: Platzhalternamen für Werte, die die
  Funktion erwartet. Stell sie dir wie Variablen vor, die noch keinen Wert
  haben – der wird jedes Mal beim Aufruf eingesetzt.
- **`{ ... }`** — der Funktionskörper: der Code, der bei jedem Aufruf läuft.

`greet("Justin")` aufzurufen führt den Funktionskörper mit `name` gleich
`"Justin"` aus. Ruft man sie erneut mit `"Anna"` auf, läuft genau derselbe
Code, nur mit einem anderen eingesetzten Wert. Genau das ist der Sinn – eine
Definition, viele Verwendungen.

**Parameter vs. Argumente**, eine kleine, aber häufige Verwechslung: `name` in
der Funktionsdefinition ist der **Parameter** (der Platzhalter). `"Justin"` in
`greet("Justin")` ist das **Argument** (der tatsächliche Wert, den du
übergibst).

## Rückgabewerte

Bisher gibt `greet` nur etwas aus – sie liefert nichts zurück, das man
anderswo weiterverwenden könnte. `return` behebt das:

```js
function double(number) {
  return number * 2;
}

const result = double(5);
console.log(result); // 10
```

`return` schickt einen Wert aus der Funktion heraus, sodass du ihn in einer
Variable speichern, ausgeben oder in eine andere Funktion einspeisen kannst.
Zwei wichtige Details:

- Hat eine Funktion **kein** `return`, ergibt ihr Aufruf `undefined` – kein
  Fehler, einfach nur "nichts".
- `return` **stoppt die Funktion sofort**. Jeder Code, der danach innerhalb
  derselben Funktion steht, läuft nie.

## Arrow Functions

Eine zweite, kürzere Syntax zum Schreiben von Funktionen – im modernen
JavaScript sehr verbreitet:

```js
const double = (number) => {
  return number * 2;
};
```

Verhält sich genauso wie die `function double(number) { ... }`-Version oben,
nur anders geschrieben: `const name = (Parameter) => { ... }`.

Besteht der gesamte Funktionskörper nur aus einem einzigen `return`, kannst du
noch weiter abkürzen – `return` weglassen, die geschweiften Klammern weglassen,
und den Ausdruck direkt hinschreiben:

```js
const double = (number) => number * 2;
```

Das nennt man einen **impliziten Return** ("implicit return"). Beide Stile
(Funktionsdeklarationen und Arrow Functions) sind im echten Code weit
verbreitet, und wir benutzen beide im weiteren Kursverlauf – Arrow Functions
besonders, sobald wir in der nächsten Lektion zu Array-Methoden kommen.

## Funktionen, die Funktionen aufrufen

Kleine Funktionen werden richtig nützlich, sobald sie sich gegenseitig
aufrufen – genau so werden echte Anwendungen Stück für Stück gebaut:

```js
function isPositive(number) {
  return number > 0;
}

function describeNumber(number) {
  if (isPositive(number)) {
    console.log(`${number} is positive.`);
  } else {
    console.log(`${number} is not positive.`);
  }
}

describeNumber(5);  // 5 is positive.
describeNumber(-3); // -3 is not positive.
```

`describeNumber` prüft die `> 0`-Bedingung nicht selbst nochmal – sie
verwendet `isPositive` wieder. Müsstest du jemals ändern, was "positiv"
bedeutet, würdest du das nur an einer einzigen Stelle anpassen.

## Aufgabe

Öffne [`exercises/04-exercise.js`](exercises/04-exercise.js) und arbeite die
Kommentare darin ab (wie besprochen durchgehend auf Englisch). Ausführen mit:

```
node course/01-javascript-basics/exercises/04-exercise.js
```

## Verständnis-Check (keine Abgabe, nur für dich)

1. Was ist der Unterschied zwischen einem Parameter und einem Argument?
2. Was gibt eine Funktion zurück, wenn sie kein explizites `return` hat?
3. Was ist die "implicit return"-Kurzform bei Arrow Functions, und wann kannst
   du sie benutzen?

Wenn du unsicher bist: einfach fragen, bevor es weitergeht.

English version: [04-functions.md](04-functions.md)

# Lektion 2 – Operatoren & Bedingungen

## Vergleichsoperatoren

JavaScript vergleicht Werte mit diesen Operatoren:

| Operator | Bedeutung |
|---|---|
| `===` | gleicher Wert **und** gleicher Typ |
| `!==` | ungleicher Wert **oder** ungleicher Typ |
| `==` | gleicher Wert, Typ wird vorher umgewandelt ("locker") |
| `!=` | ungleich, mit derselben lockeren Umwandlung |
| `<`, `>`, `<=`, `>=` | kleiner/größer (wie erwartet) |

**Wichtige Regel für diesen Kurs: immer `===` und `!==` verwenden, nie `==` oder
`!=`.** Der Grund: `==` wandelt vor dem Vergleich still und heimlich Typen um,
was zu überraschenden Ergebnissen führt:

```js
console.log(5 == "5");   // true  – "5" wird vorher in eine Zahl umgewandelt
console.log(5 === "5");  // false – unterschiedliche Typen (number vs. string), keine Umwandlung
```

`===` verhält sich so, wie man es intuitiv erwarten würde: nur gleich, wenn
Wert *und* Typ übereinstimmen. Deshalb ist es die sichere Standardwahl.

## Logische Operatoren

| Operator | Bedeutung | Beispiel |
|---|---|---|
| `&&` | UND – nur wahr, wenn **beide** Seiten wahr sind | `a && b` |
| `\|\|` | ODER – wahr, wenn **mindestens eine** Seite wahr ist | `a \|\| b` |
| `!` | NICHT – dreht wahr/falsch um | `!a` |

```js
const done = false;
const important = true;

console.log(!done);              // true (dreht false zu true um)
console.log(important && !done); // true && true -> true
```

## `if` / `else` / `else if`

```js
const tasksDoneToday = 0;

if (tasksDoneToday === 0) {
  console.log("Heute noch nichts erledigt.");
} else if (tasksDoneToday < 3) {
  console.log("Guter Start.");
} else {
  console.log("Solide Leistung heute.");
}
```

JavaScript prüft die Bedingungen **von oben nach unten** und führt den
Code-Block der **ersten** aus, die `true` ergibt. Passt keine, läuft der
`else`-Block (falls vorhanden). `else if` und `else` sind beide optional.

## Truthy und Falsy Werte

Das ist ein JavaScript-spezifisches Konzept, über das viele Anfänger
stolpern: `if` braucht nicht zwingend einen `true`/`false`-Wert – es akzeptiert
**jeden** Wert und entscheidet, ob er als "truthy" (zählt als wahr) oder
"falsy" (zählt als falsch) behandelt wird.

**Diese Werte sind immer falsy:** `false`, `0`, `""` (leerer String), `null`,
`undefined`, `NaN`. **Alles andere ist truthy** – auch `"0"` (ein nicht-leerer
String!) und jedes Objekt.

Das ist direkt relevant für das Datenmodell unserer Todo-App. Erinnerst du
dich: `list` kann entweder ein String oder `null` sein:

```js
const list = null;

if (list) {
  console.log(`In Liste: ${list}`);
} else {
  console.log("Keine Liste zugewiesen.");
}
// "Keine Liste zugewiesen." – weil null falsy ist
```

Du musst nicht `if (list !== null)` schreiben – `if (list)` erledigt das schon,
weil `null` falsy ist. Dieses Muster (einen Wert direkt prüfen statt ihn mit
etwas zu vergleichen) ist in echtem JavaScript-Code sehr verbreitet.

## `switch`

Ein `switch` vergleicht einen Wert mit mehreren möglichen Fällen – nützlich als
Alternative zu einer langen `if`/`else if`-Kette, wenn du dieselbe Variable
gegen mehrere feste Werte prüfst:

```js
const priority = "medium";

switch (priority) {
  case "high":
    console.log("Das zuerst erledigen.");
    break;
  case "medium":
    console.log("Das heute erledigen.");
    break;
  case "low":
    console.log("Das irgendwann erledigen.");
    break;
  default:
    console.log("Unbekannte Priorität.");
}
```

Jeder `case` braucht am Ende ein `break` – sonst läuft JavaScript einfach in
den *nächsten* Fall mit hinein ("Fall-through"), was fast immer ein Fehler ist
und nicht das, was du wolltest. `default` läuft, wenn kein Fall passt; es ist
optional, aber guter Stil, es trotzdem einzubauen.

## Aufgabe

Öffne [`exercises/02-exercise.js`](exercises/02-exercise.js) und arbeite die
Kommentare darin ab (Kommentare in Übungsdateien sind wie besprochen bewusst
durchgehend auf Englisch). Ausführen mit:

```
node course/01-javascript-basics/exercises/02-exercise.js
```

## Verständnis-Check (keine Abgabe, nur für dich)

1. Warum besteht dieser Kurs auf `===` statt `==`?
2. Nenne drei falsy Werte.
3. Was macht `break` innerhalb eines `switch`, und was passiert, wenn du es
   vergisst?

Wenn du unsicher bist: einfach fragen, bevor es weitergeht.

English version: [02-operators-and-conditionals.md](02-operators-and-conditionals.md)

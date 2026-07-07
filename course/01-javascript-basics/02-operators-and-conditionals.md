# Lesson 2 – Operators & Conditionals

## Comparison operators

JavaScript compares values with these operators:

| Operator | Meaning |
|---|---|
| `===` | equal value **and** equal type |
| `!==` | not equal value **or** not equal type |
| `==` | equal value, type gets converted first ("loose") |
| `!=` | not equal, with the same loose conversion |
| `<`, `>`, `<=`, `>=` | smaller/greater (as expected) |

**Important rule for this course: always use `===` and `!==`, never `==` or `!=`.**
The reason: `==` silently converts types before comparing, which leads to
surprising results:

```js
console.log(5 == "5");   // true  – "5" gets converted to a number first
console.log(5 === "5");  // false – different types (number vs. string), no conversion
```

`===` behaves the way you'd intuitively expect: only equal if both value *and*
type match. That's why it's the safe default.

## Logical operators

| Operator | Meaning | Example |
|---|---|---|
| `&&` | AND – true only if **both** sides are true | `a && b` |
| `\|\|` | OR – true if **at least one** side is true | `a \|\| b` |
| `!` | NOT – flips true/false | `!a` |

```js
const done = false;
const important = true;

console.log(!done);            // true (flips false to true)
console.log(important && !done); // true && true -> true
```

## `if` / `else` / `else if`

```js
const tasksDoneToday = 0;

if (tasksDoneToday === 0) {
  console.log("Nothing done yet today.");
} else if (tasksDoneToday < 3) {
  console.log("Good start.");
} else {
  console.log("Solid progress today.");
}
```

JavaScript checks the conditions **top to bottom** and runs the code block of
the **first** one that is `true`. If none match, the `else` block runs (if
there is one). `else if` and `else` are both optional.

## Truthy and falsy values

This is a JavaScript-specific concept that trips up a lot of beginners: `if`
doesn't strictly need a `true`/`false` value — it accepts **any** value and
decides whether to treat it as "truthy" (counts as true) or "falsy" (counts as
false).

**These values are always falsy:** `false`, `0`, `""` (empty string), `null`,
`undefined`, `NaN`. **Everything else is truthy** — including `"0"` (a
non-empty string!) and any object.

This matters directly for our todo app's data model. Remember `list` can be
either a string or `null`:

```js
const list = null;

if (list) {
  console.log(`In list: ${list}`);
} else {
  console.log("No list assigned.");
}
// "No list assigned." – because null is falsy
```

You don't have to write `if (list !== null)` — `if (list)` already does the
job, because `null` is falsy. This pattern (checking a value directly instead
of comparing it to something) is very common in real JavaScript code.

## `switch`

A `switch` compares one value against several possible cases — useful as an
alternative to a long `if`/`else if` chain when you're checking the *same*
variable against several fixed values:

```js
const priority = "medium";

switch (priority) {
  case "high":
    console.log("Do this first.");
    break;
  case "medium":
    console.log("Do this today.");
    break;
  case "low":
    console.log("Do this whenever.");
    break;
  default:
    console.log("Unknown priority.");
}
```

Each `case` needs a `break` at the end — otherwise JavaScript keeps running
into the *next* case's code too ("fall-through"), which is almost always a bug
rather than what you wanted. `default` runs when none of the cases match; it's
optional but good practice to include.

## Exercise

Open [`exercises/02-exercise.js`](exercises/02-exercise.js) and work through the
comments in it. Run it with:

```
node course/01-javascript-basics/exercises/02-exercise.js
```

## Understanding check (no submission, just for yourself)

1. Why does this course insist on `===` instead of `==`?
2. Name three falsy values.
3. What does `break` do inside a `switch`, and what happens if you forget it?

If you're unsure: just ask, before moving on.

German version: [02-operators-and-conditionals.de.md](02-operators-and-conditionals.de.md)

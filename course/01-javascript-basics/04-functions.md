# Lesson 4 – Functions

## Why functions

Loops repeat the **same** code multiple times in a row. Functions are
different: they let you package up a block of code **once**, give it a name,
and then run it again and again — whenever you want, with **different input
values** each time, not just in one continuous block. Any code you find
yourself wanting to reuse in several different places belongs in a function.

## Function declarations

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Justin"); // Hello, Justin!
greet("Anna");   // Hello, Anna!
```

Anatomy:
- **`function`** — the keyword that starts a function declaration.
- **`greet`** — the function's name, used later to call it.
- **`(name)`** — the **parameters**: placeholder names for values the function
  expects to receive. Think of them as variables that don't have a value yet
  — they get filled in each time the function is called.
- **`{ ... }`** — the function body: the code that runs each time the
  function is called.

Calling `greet("Justin")` runs the function body with `name` set to
`"Justin"`. Calling it again with `"Anna"` runs the exact same code, just with
a different value plugged in. That's the whole point — one definition, many
uses.

**Parameters vs. arguments**, a small but common mix-up: `name` in the
function definition is the **parameter** (the placeholder). `"Justin"` in
`greet("Justin")` is the **argument** (the actual value you're passing in).

## Return values

So far, `greet` only prints something — it doesn't give anything back that
you could use elsewhere. `return` fixes that:

```js
function double(number) {
  return number * 2;
}

const result = double(5);
console.log(result); // 10
```

`return` sends a value back out of the function, so you can store it in a
variable, log it, or feed it into another function. Two important details:

- If a function has **no** `return` statement, calling it gives you back
  `undefined` — not an error, just "nothing".
- `return` **immediately stops** the function. Any code written after
  `return` inside the same function never runs.

## Arrow functions

A second, shorter syntax for writing functions — very common in modern
JavaScript:

```js
const double = (number) => {
  return number * 2;
};
```

Same behavior as the `function double(number) { ... }` version above, just
written differently: `const name = (parameters) => { ... }`.

If the entire function body is just one `return` statement, you can shorten
it further — drop `return`, drop the curly braces, and write the expression
directly:

```js
const double = (number) => number * 2;
```

This is called an **implicit return**. Both styles (function declarations and
arrow functions) are widely used in real code, and we'll use both throughout
this course — arrow functions especially once we get to array methods in the
next lesson.

## Functions calling functions

Small functions become genuinely useful once they call each other — this is
how real applications are built, piece by piece:

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

`describeNumber` doesn't repeat the `> 0` check itself — it reuses
`isPositive`. If you ever needed to change what "positive" means, you'd only
change it in one place.

## Exercise

Open [`exercises/04-exercise.js`](exercises/04-exercise.js) and work through
the comments in it. Run it with:

```
node course/01-javascript-basics/exercises/04-exercise.js
```

## Understanding check (no submission, just for yourself)

1. What's the difference between a parameter and an argument?
2. What does a function return if it has no explicit `return` statement?
3. What's the "implicit return" shorthand for arrow functions, and when can
   you use it?

If you're unsure: just ask, before moving on.

German version: [04-functions.de.md](04-functions.de.md)

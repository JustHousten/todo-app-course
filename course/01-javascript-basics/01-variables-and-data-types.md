# Lesson 1 – Variables & Data Types

## Where JavaScript runs

JavaScript runs in two places: in the **browser** (developer tools console, key
F12) and directly in the terminal via **Node.js**. Node is already installed on
your machine. For this lesson, the terminal is enough:

```
node course/01-javascript-basics/exercises/01-exercise.js
```

This runs a `.js` file – you write code into a file, save it, and the command
`node <filename>` has Node.js execute it and show the output in the terminal.

## What is a variable?

A variable is a named storage location for a value – a label you stick onto a
"box" with some content, so you can access it later.

```js
let score = 10;
console.log(score); // prints 10
```

`console.log(...)` is the command to print something to the terminal (or the
browser console) – your most important tool for seeing what your code is
actually doing.

## `let` and `const`

In JavaScript, you must write one of two keywords in front of a variable when
creating it:

```js
let x = 5;              // value can change later
const name = "Justin";  // value is fixed, CANNOT be reassigned
```

Rule of thumb: **always use `const`, unless you already know the value needs to
change later – then use `let`.** This protects you from mistakes, because you
simply can't accidentally overwrite something that should have stayed fixed.

There's a third keyword, `var` – it's outdated (from very old JavaScript days) and
won't be used in this course.

Every statement in JavaScript ends with a semicolon `;`. You can often leave it
out without causing an error, but we write it cleanly from the start.

## Primitive data types

JavaScript has a few basic ("primitive") data types:

| Type | Meaning | Example |
|---|---|---|
| `string` | text | `"do the laundry"` |
| `number` | number – JS does **not** distinguish between integers and decimals, both are just `number` | `42`, `3.14` |
| `boolean` | true/false value, **lowercase** | `true`, `false` |
| `undefined` | a variable that has never been assigned a value | `let x; console.log(x); // undefined` |
| `null` | a value that deliberately means "no value" | `let date = null;` |

`undefined` vs. `null` is easy to mix up at first: `undefined` means "nothing was
assigned here at all" (often happens by accident), `null` means "it was
deliberately recorded that there is no value here". In our todo app's data model
(see below), `date: null` deliberately means "this task has no deadline" – not a
bug, but intentional.

You can use `typeof` to find out what type a variable currently has:

```js
console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
```

This is especially useful for debugging when you're not sure what a variable
currently holds.

## Template literals (text with embedded values)

Instead of gluing text together with `+`, JavaScript uses **backticks** (the
`` ` `` character, usually to the left of the 1 key) and writes values directly
into the text with `${...}`:

```js
const text = "do the laundry";
console.log(`Task: ${text}`);
// Output: Task: do the laundry
```

This is called a **template literal**. It only works with backticks, not with
regular quotes (`"..."` or `'...'`).

## Objects (preview)

An object bundles several related values under one common name, each with its
own key (called a property):

```js
const task = {
  text: "do the laundry",
  done: false
};

console.log(task.text);  // dot access: "do the laundry"
console.log(task.done);  // false
```

Objects really belong in a later, more detailed lesson, but you need them already
for this exercise, because our todo app's data model is built on them – a task
looks like this:

```js
// { id, text, done, important, date, list, created }
```

## Exercise

Open [`exercises/01-exercise.js`](exercises/01-exercise.js) and work through the
comments in it. Then run the file with `node` (command above) to check your
output.

## Understanding check (no submission, just for yourself)

1. Why is `const` generally preferred over `let` in JS, when possible?
2. What's the difference between `null` and `undefined`?
3. What does `typeof 3.14` return – and why is it the same type as `typeof 3`?

If you're unsure: just ask, before moving on.

German version: [01-variables-and-data-types.de.md](01-variables-and-data-types.de.md)

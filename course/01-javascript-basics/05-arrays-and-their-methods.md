# Lesson 5 – Arrays & Their Methods

## Quick recap

You've already used arrays since Lesson 3, just not under their full name yet:

```js
const taskTexts = ["Buy groceries", "Do laundry", "Walk the dog"];

console.log(taskTexts.length);   // 3 — how many items
console.log(taskTexts[0]);       // "Buy groceries" — access by position, starting at 0

for (const text of taskTexts) {  // loop over every item
  console.log(text);
}
```

This lesson is about the tools that replace a lot of those manual `for` loops
with a single line — the array **methods**.

## Adding and removing items

```js
const tasks = ["Buy groceries", "Do laundry"];

tasks.push("Walk the dog"); // adds to the end
console.log(tasks); // ["Buy groceries", "Do laundry", "Walk the dog"]

tasks.pop(); // removes the last item and gives it back to you
console.log(tasks); // ["Buy groceries", "Do laundry"]
```

Unlike the methods below, `push` and `pop` **change the original array**
directly (they "mutate" it) instead of creating a new one.

## `.filter()` — keep only what matches

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

`.filter()` takes a function as its argument. That function runs once for
**every item** in the array. Wherever it returns `true`, the item is kept;
wherever it returns `false`, the item is left out. The result is a **brand
new array** — `tasks` itself is untouched.

This replaces exactly the pattern you wrote by hand in earlier lessons:
looping with `for...of`, checking an `if`, and manually collecting matches.
`.filter()` does all of that in one line.

**Important:** the function you pass to `.filter()` is not a special
mini-language with limited abilities — it's a completely normal function. It
can contain anything a condition in an `if` from Lesson 2 could: combined
checks with `&&`/`||`, negation with `!`, comparisons, calls to other
functions, whatever you need. `(task) => task.done` is just the simplest
possible case (checking one property directly). Nothing stops you from
writing something like `(task) => task.important && !task.done` — same
logic you already know, just living inside the arrow function instead of an
`if` block.

## `.map()` — transform every item

```js
const texts = tasks.map((task) => task.text);
console.log(texts);
// ["Buy groceries", "Do laundry", "Walk the dog"]
```

`.map()` also runs a function once per item, but instead of deciding
true/false, whatever the function **returns** becomes the new item at that
same position. The result is always the **same length** as the original
array — just with every item transformed. Also returns a new array; the
original is untouched.

## `.find()` — get the first match

```js
const firstImportant = tasks.find((task) => task.important);
console.log(firstImportant);
// { text: "Buy groceries", important: true, done: false }
```

Like `.filter()`, but stops at the **first** match and gives you that single
item directly — not an array. If nothing matches, `.find()` gives you
`undefined`.

## `.sort()` — and its default-behavior trap

```js
const numbers = [5, 40, 100, 25];

numbers.sort();
console.log(numbers); // [100, 25, 40, 5] — very much not sorted numerically!
```

Here's the trap: by default, `.sort()` converts everything to **strings** and
compares them alphabetically. `"100"` comes before `"25"` alphabetically
(`"1"` is a smaller character than `"2"`), so sorting numbers with plain
`.sort()` gives you nonsense like `[100, 25, 40, 5]` instead of the numerically
sorted `[5, 25, 40, 100]`.

The fix: pass `.sort()` a **compare function** that tells it how to order two
items at a time:

```js
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 25, 40, 100]
```

You don't need to memorize *why* `a - b` works — just remember the pattern:
whenever you sort numbers, always pass `(a, b) => a - b` (ascending) or
`(a, b) => b - a` (descending). Also note: unlike `.filter()`/`.map()`,
`.sort()` **mutates the original array** instead of returning a new one.

## Chaining

Because `.filter()` and `.map()` both return arrays, you can call another
method directly on the result:

```js
const openTaskTexts = tasks
  .filter((task) => !task.done)
  .map((task) => task.text);
```

Read it as a pipeline: first filter down to what you want, then transform
what's left.

## Exercise

Open [`exercises/05-exercise.js`](exercises/05-exercise.js) and work through
the comments in it. Run it with:

```
node course/01-javascript-basics/exercises/05-exercise.js
```

## Understanding check (no submission, just for yourself)

1. What's the key difference between what `.filter()` and `.map()` each
   return, compared to the original array?
2. Why does `[10, 2, 33, 4].sort()` (with no arguments) give a wrong-looking
   result for numbers?
3. `.find()` versus `.filter()` — when would you reach for one over the
   other?

If you're unsure: just ask, before moving on.

German version: [05-arrays-and-their-methods.de.md](05-arrays-and-their-methods.de.md)

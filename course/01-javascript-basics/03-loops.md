# Lesson 3 – Loops

## Why loops

Without loops, repeating an action means copy-pasting the same code over and
over — once per item. Loops let you write the code **once** and have it run
**multiple times**, which is essential once your todo app has more than a
handful of tasks to display.

## The classic `for` loop

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

A `for` loop has three parts, separated by semicolons, all inside the parentheses:

```
for ( starting point ; condition to keep going ; what happens after each round ) { ... }
```

- **`let i = 0`** — runs once, right at the start. Declares a counter variable.
- **`i < 5`** — checked *before* every round. As long as this is `true`, the
  loop body runs again. Once it's `false`, the loop stops.
- **`i++`** — runs *after* every round. Short for `i = i + 1`.

So the loop above: start at `0`, keep going while smaller than `5`, add `1`
each round. That's why it prints `0` through `4` — five rounds, not six,
because `i < 5` becomes `false` once `i` reaches `5`.

## The `while` loop

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

Same idea as `for`, just split up: you declare the counter *before* the loop,
write only the condition in the `while (...)`, and have to remember to
increase the counter *yourself* inside the loop body. Forgetting `count++`
here creates an **infinite loop** — the condition never becomes false, and
your program never stops. `for` bundles all three parts together specifically
to make that mistake harder to make, which is why `for` is more common for
"repeat N times" situations, while `while` is more common when you don't know
in advance how many rounds you'll need (e.g. "keep asking until the user
enters something valid").

## `for...of` — looping over arrays

An array is an ordered list of values (we'll cover arrays properly in the next
lesson — for now, just know that square brackets `[...]` hold a list):

```js
const taskTexts = ["Buy groceries", "Do laundry", "Walk the dog"];

for (const text of taskTexts) {
  console.log(text);
}
// Buy groceries
// Do laundry
// Walk the dog
```

`for...of` reads as "for each item **of** this list, do the following". No
counter, no condition, no `i++` to manage yourself — it automatically goes
through every item, one at a time, and gives you each one directly in `text`.
This is the loop you'll use constantly once we start working with arrays of
tasks.

One small extra you'll need for one of the exercises: every string (and every
array) has a `.length` property that tells you how many characters (or items)
it has:

```js
console.log("Hello".length); // 5
```

## `break` and `continue`

Two keywords that change how a loop runs mid-way:

- **`break`** — stops the loop immediately, skipping all remaining rounds.
- **`continue`** — skips just the *current* round and jumps to the next one.

```js
for (const text of taskTexts) {
  if (text === "Do laundry") {
    continue; // skip this one, keep going with the rest
  }
  console.log(text);
}
// Buy groceries
// Walk the dog
```

```js
for (const text of taskTexts) {
  if (text === "Do laundry") {
    break; // stop the loop entirely, right here
  }
  console.log(text);
}
// Buy groceries
```

## Exercise

Open [`exercises/03-exercise.js`](exercises/03-exercise.js) and work through the
comments in it. Run it with:

```
node course/01-javascript-basics/exercises/03-exercise.js
```

## Understanding check (no submission, just for yourself)

1. Why can a `while` loop accidentally run forever, but a `for` loop makes
   that mistake less likely?
2. What's the difference between `break` and `continue`?
3. When would you reach for `for...of` instead of a classic `for` loop?

If you're unsure: just ask, before moving on.

German version: [03-loops.de.md](03-loops.de.md)

// Lesson 3 – Exercise: Loops
// Fill in the TODOs, then run with:
//   node course/01-javascript-basics/exercises/03-exercise.js

const taskTexts = ["Buy groceries", "Do laundry", "Walk the dog", "Reply to emails"];

// TODO 1: Use a classic for loop (with a counter i) to log each item in
// taskTexts together with its 1-based position, like:
// "1: Buy groceries"
// "2: Do laundry"
// ...and so on. (Reminder: array items are accessed with taskTexts[i].)



for (let i = 0; i < taskTexts.length; i++) {
    console.log(`${i + 1}: ${taskTexts[i]}`)
}

// TODO 2: Use a while loop to count from 1 to 5 (inclusive) and log each
// number.

let i = 1

while (i <= 5) {
    console.log(i);
    i++;
}

// TODO 3: Use a for...of loop to log every item in taskTexts directly, with
// no index/position number this time — just the plain text.

for (const text of taskTexts) {
    console.log(text)
}

// TODO 4: Use a for...of loop combined with an if to log ONLY the items in
// taskTexts whose text is longer than 15 characters (use .length).

for (const text of taskTexts) {
    if (text.length > 15)
        console.log(text);
}

// TODO 5: Use a for...of loop that logs each item in taskTexts, but stops
// completely (break) as soon as it reaches "Walk the dog" — so "Walk the dog"
// itself should NOT be logged, and nothing after it either.

for (const text of taskTexts) {
    if (text == "Walk the dog") {
        break;
    } else {
        console.log(text);
    }
}

// TODO 6 (Bonus): Use a for...of loop that logs every item in taskTexts
// EXCEPT "Do laundry" (use continue to skip just that one, everything else
// still gets logged).

for (const text of taskTexts) {
    if (text == "Do laundry") {
        continue;
    } else {
        console.log(text);
    }
}
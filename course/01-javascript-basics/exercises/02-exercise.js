// Lesson 2 – Exercise: Operators & Conditionals
// Fill in the TODOs, then run with:
//   node course/01-javascript-basics/exercises/02-exercise.js

const task = {
  id: "task-1",
  text: "Buy groceries",
  done: false,
  important: true,
  date: "2026-07-07",
  list: null,
};

const today = "2026-07-07";

// TODO 1: Write an if/else that checks task.done. If true, log
// "Already done." — if false, log "Still open."


// TODO 2: Write a single condition (using && ) that is only true when the
// task is BOTH important AND not done yet. Log "Urgent: needs attention." if
// that condition is true, otherwise log "No urgent action needed."


// TODO 3: Compare task.date and today using ===. Log "Due today!" if they
// match, otherwise log "Not due today."
// (Reminder: always use === here, never ==.)


// TODO 4: task.list can be a string OR null. Write an if/else that relies on
// truthy/falsy (so just `if (task.list)`, not a comparison) to log
// `In list: ${task.list}` if it's set, or "No list assigned." if it's null.


// TODO 5: Build a variable `priority` that is "high" if task.important is
// true, otherwise "low". Then write a switch statement on `priority` with
// cases "high" and "low" (plus a default case) that logs a different message
// for each.


// TODO 6 (Bonus): Log the result of 5 == "5" and 5 === "5" and, in a comment
// next to each line, explain in your own words why they differ.

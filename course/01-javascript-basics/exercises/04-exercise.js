// Lesson 4 – Exercise: Functions
// Fill in the TODOs, then run with:
//   node course/01-javascript-basics/exercises/04-exercise.js

const tasks = [
  { text: "Buy groceries", important: true, done: false },
  { text: "Do laundry", important: false, done: true },
  { text: "Walk the dog", important: true, done: true },
  { text: "Reply to emails", important: false, done: false },
];

// TODO 1: Write a function DECLARATION (the "function name(...) {...}" style,
// not an arrow function) called isUrgent that takes one task and returns
// true if task.important is true AND task.done is false, otherwise false.
// Test it by logging isUrgent(tasks[0]) — should be true.


// TODO 2: Write an ARROW function called formatTask that takes one task and
// returns (not logs!) a string like "Buy groceries — open" or
// "Buy groceries — done", depending on task.done. Use a template literal.
// Test it by logging formatTask(tasks[0]).


// TODO 3: Write a function called countDone that takes an array of tasks and
// returns how many of them have done === true. (Loop over the array, count,
// then return the count.) Test it by logging countDone(tasks) — should be 2.


// TODO 4: Write a function called countUrgent that takes an array of tasks
// and returns how many of them are urgent. Reuse your isUrgent function from
// TODO 1 inside the loop instead of rewriting the condition. Test it by
// logging countUrgent(tasks) — should be 1.


// TODO 5: Write a function called logAllTasks that takes an array of tasks
// and, for each one, logs the result of calling formatTask on it. This
// function doesn't need a return value. Call it once with logAllTasks(tasks).


// TODO 6 (Bonus): Call isUrgent directly with a brand new task object you
// write right here (not one from the `tasks` array), to prove the function
// works with any task you pass it. Log the result.

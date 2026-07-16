// Lesson 5 – Exercise: Arrays & Their Methods
// Fill in the TODOs, then run with:
//   node course/01-javascript-basics/exercises/05-exercise.js

const tasks = [
  { text: "Buy groceries", important: true, done: false },
  { text: "Do laundry", important: false, done: true },
  { text: "Walk the dog", important: true, done: true },
  { text: "Reply to emails", important: false, done: false },
];

// TODO 1: Use .filter() to build a new array called doneTasks containing only
// the tasks where done is true. Log doneTasks.

const doneTasks = tasks.filter((task) => task.done);
console.log(doneTasks);

// TODO 2: Use .filter() to build a new array called urgentTasks containing
// only the tasks that are important AND not done. Log urgentTasks.

const urgentTasks = tasks.filter((task) => task.important && task.done === false);
console.log(urgentTasks);

// TODO 3: Use .map() to build a new array called allTexts containing just the
// .text of every task (so an array of 4 strings). Log allTexts.


// TODO 4: Use .find() to get the first task in the array that is NOT done,
// store it in a variable called firstOpenTask, and log it.


// TODO 5: Use .push() to add one more task object to the `tasks` array (any
// values you like, but keep the same shape: text/important/done). Then log
// tasks.length — it should now be 5.


// TODO 6 (Bonus): Create a new array of numbers, unsorted, with at least one
// number that has two digits and one with one digit (e.g. [30, 4, 100, 8]).
// First log the result of calling .sort() on it with NO arguments (see the
// "wrong" default behavior), then sort it correctly in ascending order using
// a compare function and log that result too.

# Progress

Log of the learning journey. Newest entries first. When picking this up after a
break: read here, then continue in `course/` at the last open lesson.

## 2026-07-07 – Lesson 5 created
- Lesson 5 (Arrays & Their Methods) written:
  `course/01-javascript-basics/05-arrays-and-their-methods.md` (+ `.de.md`),
  exercise at `course/01-javascript-basics/exercises/05-exercise.js`.
- Covers `.push`/`.pop` (mutating), `.filter()` and `.map()` (both return new
  arrays, same vs. different length), `.find()` (first match, not an array),
  `.sort()` and its default lexicographic-comparison trap for numbers (needs a
  compare function), and method chaining.
- **Current status:** Lesson 5 ready, not yet worked through.

## 2026-07-07 – Lesson 4 created
- Lesson 4 (Functions) written: `course/01-javascript-basics/04-functions.md`
  (+ `.de.md`), exercise at `course/01-javascript-basics/exercises/04-exercise.js`.
- Covers function declarations, parameters vs. arguments, return values
  (including implicit `undefined` and early-exit behavior), arrow functions
  and implicit return, and functions calling other functions. Exercise ties
  together everything so far (template literals, conditionals, loops) into
  small reusable functions operating on task objects.
- **Current status:** Lesson 4 ready, not yet worked through.

## 2026-07-07 – Lesson 4 completed
- Worked through `04-exercise.js`; runs cleanly end to end. TODOs 1-5 were
  **not** correct on the first pass — user worked through several rounds of
  mistakes in a separate chat first (to keep this session uncluttered), then
  brought the resulting code here for review:
  - TODO 1 (`isUrgent`): mixed up the `task` parameter with the outer `tasks`
    array, and initially left out `return` in one or both branches.
  - TODO 2 (`formatTask`): used `console.log` instead of `return` at first —
    needed clarification that the two are not interchangeable (one prints,
    one hands a value back to the caller).
  - TODO 3 (`countDone`): several rounds — missing `let`/`const` on the loop
    variable, `return` initially placed inside the loop (so it fired after
    the first item instead of after counting all of them), and the counter
    variable was initially global instead of local to the function.
  - TODO 4 (`countUrgent`): used `for (task in tasks)` instead of
    `for (task of tasks)` — `for...in` gives you the index/key, not the item
    itself, which silently produced wrong values until corrected.
  - TODO 5 (`logAllTasks`): same `for...in`/`for...of` mix-up resurfaced
    before landing on the correct version shown here.
  Worth watching for going forward: the `for...in` vs. `for...of` confusion
  showed up twice in a row (TODO 4 and 5) — may be worth a deliberate,
  explicit callout the next time loops-over-objects-vs-arrays comes up.
- TODO 6 had a real bug: wrapped the new task object in `[...]` (making it an
  array containing an object) instead of passing the object directly —
  `isUrgent` then read `undefined` for `.important`/`.done` and silently
  returned `false`. Self-diagnosed once shown the mismatch between expected
  and actual output. Fixed by removing the array brackets.
- User reported functions were noticeably harder than lessons 1-3 — matches
  the actual struggle above, not just a subjective impression. This is the
  first lesson requiring holding several concepts (parameters, return values,
  functions calling functions) in mind simultaneously, so multiple correction
  rounds here are normal, not a red flag. Prioritized correctness over style;
  two optional style suggestions (redundant `=== true`/`=== false`
  comparisons, unnecessary `else { continue }`) were left as-is by choice.
- **Current status:** Lesson 4 fully done. Ready to start Lesson 5 (Arrays &
  Their Methods) – not yet created.

## 2026-07-07 – Lesson 3 completed
- Worked through `03-exercise.js` end to end; runs cleanly, all 6 TODOs done
  correctly (including bonus).
- Common mix-ups this round: writing all three `for(...)` parts at once
  instead of building them up one at a time, confusing `for...of` (value only)
  with classic `for` (needed here since the exercise wanted a 1-based index
  alongside each value), and `taskTexts.lengths` (typo + wrong target — array
  length instead of the individual string's length). All self-corrected after
  a worked example with different variables.
- Minor style note carried over into TODO 5/6: used `==` instead of the
  course's `===` convention from Lesson 2. Not a bug here (both sides are
  strings), flagged as a habit reminder, not fixed in-place.
- **Current status:** Lesson 3 fully done. Ready to start Lesson 4 (Functions)
  – not yet created.

## 2026-07-07 – Lesson 2 completed (revised)
- Worked through `02-exercise.js` end to end; runs cleanly, all 6 TODOs done
  correctly (bonus included).
- TODO 5 went through a follow-up revision after the initial commit: first
  attempt switched directly on `task.important` (a boolean) instead of on a
  derived `priority` string as the exercise intended — functionally fine, but
  a different exercise than asked. Rewritten to build `priority` via
  `if`/`else` first, then `switch` on that. Along the way, caught two related
  bugs from the rewrite itself: an undeclared variable silently became an
  implicit global (works without `"use strict"`, but is a classic JS trap
  worth flagging again in a later lesson), and a variable name typo
  (`priotity` vs. `priority`) meant the declared variable was never the one
  actually used.
- Needed several rounds of guided questions overall — booleans don't need
  comparison (`if (task.done)`, not `if (task.done === true)`), `!` inverts a
  value rather than meaning "if not", truthy/falsy applied to `task.list`. This
  is a normal part of the learning curve, not a setback — worth keeping
  explanations concrete/example-first rather than abstract when introducing new
  operators going forward.
- **Current status:** Lesson 2 fully done. Ready to start Lesson 3 (Loops) –
  not yet created.

## 2026-07-07 – Lesson 1 completed
- Worked through `01-exercise.js` end to end; runs cleanly with no errors.
- Common beginner mix-ups hit and resolved along the way: object literals use
  `:` not `=` between key and value; properties are accessed with dot notation
  (`task.id`), not function-call syntax (`task(id)`); template literals need
  backticks (single, not doubled) and `${...}` (curly braces, not parentheses).
  Worth keeping an eye on similar syntax slips in upcoming lessons.
- **Current status:** Lesson 1 fully done. Ready to start Lesson 2 (Operators &
  Conditionals) – not yet created.

## 2026-07-06 – Start
- Course set up (`course/00-roadmap.md`), Lesson 1 (Variables & Data Types) created.
- Context: user is a programming beginner, no real prior knowledge in another
  language assumed. Focus is exclusively on **JavaScript, then Node.js** –
  everything else is irrelevant for this course. Goal is building an own todo app
  from scratch (name still open, `todo-app` for now) as the practice project. An
  older version (Cloudflare + `index.html`, back then called "Fokus") only serves
  as a reference for the feel/features, but is not reused.
- Documentation is bilingual from the start: every doc file exists as an English
  version (default) and a German version (`*.de.md`), same content. Code and
  exercise files stay English-only.
- **Current status:** Lesson 1
  (`course/01-javascript-basics/01-variables-and-data-types.md`) is ready, not yet
  worked through.

## Next step
Work through Lesson 5: read
`course/01-javascript-basics/05-arrays-and-their-methods.md`, then fill in
`course/01-javascript-basics/exercises/05-exercise.js`.

German version: [PROGRESS.de.md](PROGRESS.de.md)

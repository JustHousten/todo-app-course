# Progress

Log of the learning journey. Newest entries first. When picking this up after a
break: read here, then continue in `course/` at the last open lesson.

## 2026-07-07 – Lesson 4 created
- Lesson 4 (Functions) written: `course/01-javascript-basics/04-functions.md`
  (+ `.de.md`), exercise at `course/01-javascript-basics/exercises/04-exercise.js`.
- Covers function declarations, parameters vs. arguments, return values
  (including implicit `undefined` and early-exit behavior), arrow functions
  and implicit return, and functions calling other functions. Exercise ties
  together everything so far (template literals, conditionals, loops) into
  small reusable functions operating on task objects.
- **Current status:** Lesson 4 ready, not yet worked through.
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
Work through Lesson 4: read `course/01-javascript-basics/04-functions.md`,
then fill in `course/01-javascript-basics/exercises/04-exercise.js`.

German version: [PROGRESS.de.md](PROGRESS.de.md)

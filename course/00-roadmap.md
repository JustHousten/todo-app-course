# Roadmap – Todo App Course

Full course plan. The order is deliberately chosen so each phase builds on the
previous one and works on real code for the actual todo app as soon as possible –
not on disconnected toy examples.

**Deliberately not part of this course (for now):** TypeScript, React/Vue/other
frameworks, databases beyond simple files, detailed VPS setup. That comes later,
once the fundamentals sit and the need arises naturally.

## Phase 1 – JavaScript Basics (no browser needed, runs with `node`)
1. Variables & data types
2. Operators, conditionals (`if`/`else`, `switch`)
3. Loops (`for`, `while`, `for...of`)
4. Functions (declarations, arrow functions, parameters, return values)
5. Arrays & their methods (`push`, `filter`, `map`, `find`, `sort`, …)
6. Objects (properties, methods, nesting, destructuring)
7. Scope & modules (`let`/`const` scope, ES modules `import`/`export`)

→ Practice: rebuild Task and List objects like the old reference data model, write
functions that operate on arrays of tasks (filter by today, by list, etc.) – all in
the console only, still no UI.

## Phase 2 – JavaScript in the Browser (DOM & Events)
8. DOM basics (selecting, creating, changing elements)
9. Events (click, input, forms, event object)
10. `localStorage` (storing data in the browser)

→ Practice: first working mini version of the todo app in the browser – type a
task, display it, check it off, save it in `localStorage`. Still no swipe
gestures/bottom sheets.

## Phase 3 – JavaScript Advanced
11. Deepen array methods (`reduce`, chaining `map`/`filter`)
12. Destructuring & spread/rest in detail
13. `async`/`await`, promises, `fetch()`

→ Practice: clean up/modularize code, prepare for later communication with an own
backend.

## Phase 4 – Finish the Todo App Frontend
14. Swipe gestures (rebuild touch and mouse events)
15. Bottom sheets (list/date selection), History API for back navigation
16. Polish: progress ring, tabs, design implementation with CSS variables

→ Result: a frontend that feels like the old reference, entirely self-written.

## Phase 5 – Node.js Basics
17. Placing Node.js (same language, different environment than the browser)
18. Modules & npm (`require`/`import`, `package.json`, installing packages)
19. File system (`fs`), simple HTTP server without a framework
20. Express (or similar) for a small REST API

## Phase 6 – Node.js Backend for the Todo App
21. REST API for tasks/lists (GET/POST/PUT/DELETE)
22. Persistence (first a JSON file, later maybe SQLite)
23. Simple login protection (no enterprise effort needed, enough for personal use)
24. Connect the frontend to the own backend instead of `localStorage` → **real
    device sync**

## Phase 7 – Deployment
25. Own server (e.g. Hetzner, cheapest plan) – setup worked out during the course
26. Keep the Node process running permanently, domain, HTTPS
27. The app runs live, independent of Cloudflare & co.

---

Progress and current position: see [`PROGRESS.md`](../PROGRESS.md).

German version: [00-roadmap.de.md](00-roadmap.de.md)

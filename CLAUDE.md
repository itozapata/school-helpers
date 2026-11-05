# child-helpers

## Purpose

This repository holds learning aids for my child: printable worksheets, practice
grids, and small interactive pages that support what they're learning (handwriting,
numbers, math, reading, etc.). Every change should serve that goal — keep things
simple, clear, and kid-friendly.

## Structure

- Each learning aid is a **standalone, self-contained HTML file**. No build step,
  no frameworks, no external dependencies — open the file in a browser and it works.
- Inline CSS and JS in the same file.

### Folder layout

Aids are grouped **by grade** in top-level folders, so the collection grows
naturally as the child advances. Subject (math, reading, …) is metadata on each
aid, not a folder.

```
child-helpers/
├── index.html          # searchable home page (grouped by grade)
├── content.js          # manifest of every aid — the home page reads this
├── kindergarten/       # grade folders, one per grade the child has reached
├── grade-1/
├── grade-2/
│   └── …               # standalone HTML aids live directly in the grade folder
└── …                   # grade-3 … grade-5, added as the child advances
```

- **Pick the grade folder** that matches the aid's level. Create a grade folder
  only when the first aid for that grade is added — don't add empty ones. The set
  of grades is also listed in `content.js` (`window.GRADES`); add new grades there
  and to the tree above.
- **File names**: lowercase kebab-case describing the aid, most general word first,
  e.g. `kindergarten/number-grid-10x10.html`, `grade-1/tracing-uppercase.html`,
  `grade-2/sight-words-set-1.html`.
- **Variants** of the same aid (sizes, difficulty levels) live side by side with a
  suffix (`-easy`, `-hard`, `-large`) — or, better, one file with a toggle.
- **Keep `content.js` current** — this is the single source of truth for the home
  page. Whenever an aid is added, renamed, moved, or removed, update its entry in
  the `AIDS` array (`title`, `description`, `grade`, `subject`, `path`, `tags`).
  The home page renders and searches the collection from this manifest, so there
  are no per-aid links to hand-edit in `index.html`.
- `content.js` is a plain `.js` file (not `.json`) on purpose: a `<script src>`
  tag loads it even when `index.html` is opened directly from disk (`file://`),
  where `fetch()` of a local `.json` is blocked. Keep it that way — no build step.
- Move misplaced files with `git mv` so history is preserved.

## Conventions

- **Print first.** Most aids are printed. Design for paper:
  - Use borders, not backgrounds, for lines that must survive printing.
  - Set `print-color-adjust: exact` (and the `-webkit-` prefix) so colors print.
  - Add an `@media print` block to strip screen-only padding/controls.
  - Make sure the content fits on a single Letter/A4 page unless told otherwise.
- **Kid-friendly visuals.** Large, clear shapes and text; light guide lines that
  don't overpower what the child writes; avoid clutter.
- **Easy to tweak.** Put sizes and colors in CSS custom properties on `:root`
  (e.g. `--size`, `--border`) so a parent can adjust them quickly.
- Generate repetitive markup (grid cells, rows) with a small script rather than
  hand-writing it.
- Give each page a short, descriptive `<title>`.

## Workflow

- Commit messages use conventional commits, scoped by aid: `feat(grid): ...`.
  Use `docs(index): ...` for landing-page-only changes and
  `refactor(structure): ...` for moving files between folders.
- When adding a new aid, describe in the commit what it's for and any
  print-specific decisions.

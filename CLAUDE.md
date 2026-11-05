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

Aids are grouped by subject in top-level folders:

```
child-helpers/
├── index.html          # landing page linking to every aid, grouped by subject
├── handwriting/        # letter tracing, writing lines, stroke practice
├── math/               # grids, number lines, arithmetic drills, counting
├── reading/            # sight words, phonics, word families
├── shapes-colors/      # shapes, coloring, pattern recognition
└── misc/               # anything that doesn't fit yet (calendars, charts, games)
```

- **Pick the subject folder** that best matches the aid's learning goal. Create a
  folder only when the first aid for that subject is added — don't add empty ones.
  If a new subject emerges (e.g. `science/`), add it here and to the tree above.
- **File names**: lowercase kebab-case describing the aid, most general word first,
  e.g. `math/grid-10x10.html`, `handwriting/tracing-uppercase.html`,
  `reading/sight-words-set-1.html`.
- **Variants** of the same aid (sizes, difficulty levels) live side by side with a
  suffix (`-easy`, `-hard`, `-large`) — or, better, one file with a toggle.
- **Keep `index.html` current**: whenever an aid is added, renamed, moved, or
  removed, update the landing page links (one line per aid: title + short
  description of what it practices).
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

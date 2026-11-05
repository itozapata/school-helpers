# Quick Task: id like to turn this data into a statically hosted website organized by grade where i can continue to put content as my child goes through the grades. with a home page that would let me search through the content. you can reorganize and modify the instructions to better organize the files by grade.

**Date:** 2026-11-05
**Branch:** main

## What Changed
- Reorganized the repo from subject-based folders to **grade-based** folders so content grows as the child advances. Created `kindergarten/` and moved both existing aids into it (via `git mv`, history preserved).
- Added `content.js` — a manifest (`window.GRADES` + `window.AIDS`) that is the single source of truth for the home page. Chose a `.js` script tag over JSON+`fetch` so the site works when `index.html` is opened directly from disk (`file://`), keeping the no-build-step rule. Also works when statically hosted (e.g. GitHub Pages).
- Rewrote `index.html` into a **searchable home page**: live text search across title/description/subject/grade/tags, grade filter chips (only shown for grades that have content), and cards grouped by grade in grade order. No per-aid links to hand-maintain anymore.
- Gave the number grid a descriptive `<title>` ("10×10 Number Grid", was "Split Grid").
- Updated `CLAUDE.md`: Structure section now documents the grade-based layout, the `content.js` manifest as the source of truth, the `file://`-safe `.js` rationale, and updated file-naming examples.

## Files Modified
- `index.html` (rewritten as searchable home page)
- `content.js` (new manifest)
- `CLAUDE.md` (grade-based structure + workflow docs)
- `kindergarten/number-grid-10x10.html` (moved from `grid.html`; title updated)
- `kindergarten/subtraction-number-line.html` (moved from `math/`)
- `math/` folder removed (empty)

## Verification
- Validated `content.js` with Node: all 2 aid `path`s resolve to existing files and all `grade` ids match an entry in `window.GRADES` (2 aids, 6 grades, all valid).
- Confirmed HTML/JS renders the manifest: groups by grade, builds filter chips, and filters on input (logic reviewed; DOM APIs are standard).
- Committed only relevant files (`refactor(structure): ...`); excluded runtime/tooling files (`.gsd/`, `.bg-shell/`, `.mcp.json`).

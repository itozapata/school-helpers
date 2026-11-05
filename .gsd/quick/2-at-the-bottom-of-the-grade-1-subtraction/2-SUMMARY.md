# Quick Task: grade-1 subtraction self-assessment + range 0-10

**Date:** 2026-11-05
**Branch:** main

## What Changed
- Added a "This was:" self-assessment section (😊 Easy · 🙂 Just Right · 😅 Hard) with "(circle one)" beneath the heading, on a single row with generous spacing for a 6-year-old to circle.
- Ensured the whole worksheet fits on one printable Letter page (tightened spacing, shorter number-line SVG; verified 9.81in).
- Extended the subtraction range from 1–10 to **0–10**: `MIN = 0` so the number line shows 0 and problems can have an answer of 0. Updated page `<title>` and the `content.js` manifest title accordingly.

## Files Modified
- `grade-1/subtraction-number-line.html`
- `content.js`

## Verification
- Rendered in a browser: number lines show 0–10 (11 labels per line), problems include answers of 0, answer-key mode fills blanks and draws hops.
- Page height measured at 9.81in — fits within the Letter printable area.

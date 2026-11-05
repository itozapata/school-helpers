/*
 * Content manifest for Child Helpers.
 *
 * This is a plain .js file (not .json) on purpose: a <script src> tag loads it
 * even when index.html is opened directly from disk (file://), where fetch() of
 * a local .json would be blocked by the browser. No build step, no server
 * required — it also works fine when statically hosted.
 *
 * HOW TO ADD AN AID
 * 1. Drop the standalone HTML file into its grade folder (create the folder if
 *    it's the first aid for that grade — see GRADES below).
 * 2. Add one entry to the AIDS array below.
 *
 * Fields:
 *   title       short name shown on the card
 *   description one line: what the aid practices
 *   grade       must match a GRADES id below (e.g. "kindergarten", "grade-1")
 *   subject     "math" | "handwriting" | "reading" | "shapes-colors" | "misc"
 *   path        path to the HTML file, relative to index.html
 *   tags        extra search keywords (array of strings)
 */

// Grades in display order. Add new grades here as your child advances, then
// create the matching folder when its first aid is added.
window.GRADES = [
  { id: "kindergarten", label: "Kindergarten" },
  { id: "grade-1", label: "Grade 1" },
  { id: "grade-2", label: "Grade 2" },
  { id: "grade-3", label: "Grade 3" },
  { id: "grade-4", label: "Grade 4" },
  { id: "grade-5", label: "Grade 5" },
];

window.AIDS = [
  {
    title: "10×10 Number Grid",
    description: "Split-cell grid for writing numbers 0–100.",
    grade: "grade-1",
    subject: "math",
    path: "grade-1/number-grid-10x10.html",
    tags: ["numbers", "writing", "counting", "grid", "printable"],
  },
  {
    title: "Subtraction Number Lines 1–10",
    description: "Randomized subtraction problems solved by hopping back on a number line.",
    grade: "grade-1",
    subject: "math",
    path: "grade-1/subtraction-number-line.html",
    tags: ["subtraction", "number line", "arithmetic", "printable"],
  },
];

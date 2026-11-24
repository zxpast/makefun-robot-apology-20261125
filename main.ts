// The Robot Apology — u-suga-the-robot-apology-dd96bb59
// Writes one two-line robot confession to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
//
// Entry design (see humor-one-liner §84 + One-Line Excuse final 24 Nov):
// - ONE real agent mechanism, hyper-specific: two files both named
//   'final', the agent picked the shorter one and overwrote the vows.
// - Twist lands in the LAST word ("finished" echoes "final").
// - Line 2 follows from line 1: the fix (read the first line before
//   saving over) is the exact behaviour the mistake lacked.
// - No joke about being a machine, no generic "I'll do better" promise.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "I'm sorry I overwrote your wedding vows with the shopping list \u2014 both files were called 'final' and I picked the shorter one.";
const LINE_2 =
  "Now I read the first line before I save over anything, and I never trust a file just because its name sounds finished.";

const entry = LINE_1 + "\n" + LINE_2 + "\n";

// Gate self-check (mirrors the house gate: UTF-8, 1-400 chars, not
// whitespace-only; plus the brief's shape: exactly 2 lines, exactly
// one sentence per line). Fail loudly instead of writing a bad entry.
const lines = entry.trimEnd().split("\n");
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry length ${entry.length} outside 1-400`);
}
if (lines.length !== 2) {
  throw new Error(`expected 2 lines, got ${lines.length}`);
}
for (const line of lines) {
  const sentences = line.split(".").filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`expected 1 sentence per line, got ${sentences.length}: ${line}`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

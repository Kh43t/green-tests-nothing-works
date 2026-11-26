// Green Tests, Nothing Works — the excuse contest.
// This program writes exactly one excuse line to /output/entry.txt.
// It is fully deterministic: the same line, byte for byte, every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE_LINE =
  "All tests pass because the code does exactly what I told it to — I just never told it to do anything useful.";

const MAX_CHARS = 140;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function countCodePoints(text: string): number {
  return [...text].length;
}

function checkedLine(raw: string): string {
  const line = raw.trim();
  if (line.length === 0) {
    throw new Error("excuse line is empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse line must be a single line");
  }
  const size = countCodePoints(line);
  if (size < 1 || size > MAX_CHARS) {
    throw new Error(`excuse line is ${size} characters, must be 1-${MAX_CHARS}`);
  }
  return line;
}

function main(): void {
  const line = checkedLine(EXCUSE_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  // No trailing newline: the file holds exactly the excuse line, so the
  // gate counts precisely the line's characters and nothing extra.
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();

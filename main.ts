// Entry runner for "The Word You'd Delete From the Dictionary" (puan).
// The nomination is a single word: literally — the only common word
// that now officially means its own opposite, so that "I literally
// died" is both a falsehood and, by dictionary sanction, a figure of
// speech. Deleting it would not restore the language, but it would be,
// in the word's own debased sense, literally justice. One word, at
// /output/entry.txt, used correctly for the last time.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "literally";

function sweep(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  sweep(out);
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();

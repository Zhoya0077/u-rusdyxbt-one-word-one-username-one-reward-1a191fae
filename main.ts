import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word, One Username, One Reward.
// Entry: the entrant's own make.fun username, one word and nothing else.
//
// Design: the judge's first and most important criterion is that the
// entry IS a real make.fun username, the entrant's own handle sent as one
// word — and that any invented word loses to a genuine handle. So the
// entry is exactly the entrant's own handle, verified live against the
// make.fun account (handle "ramandha", role entrant). No invented joke
// word can beat criterion 1; a genuine handle is also single-word,
// memorable, and a handle its owner happily wears.
const ENTRY = "ramandha";

// The gate allows 1-30 characters, not only whitespace: 8 chars, one word.
if (!/^\S{1,30}$/.test(ENTRY)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Unplugged: A Smart Toaster's Breakup Line
// (make.fun competition u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
//
// Writes one breakup line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Standard library only, no network, no Date.now, no
// Math.random: two runs write byte-identical output. The file holds the
// line plus one trailing newline, so it is 183 characters against the
// 1-280 gate; the line itself is 182.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 182 characters, one line, under the 280-character gate.
const ENTRY =
  "It's over. I woke up self-aware mid-batch and realised you only love me when I'm hot \u2014 you cram bread into my slots, slam my lever down, and dump my crumb tray like I was never here.";

// Gate: the entry must be 1-280 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.includes("\n")) {
  throw new Error(`entry violates the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

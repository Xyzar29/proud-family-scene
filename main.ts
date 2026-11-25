// Proud Family Scene — make.fun bounty entry.
// Writes one short family scene (two lines, under 280 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), so the AI
// judge can read it. The text is fixed: the program is deterministic and
// writes byte-identical output on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE = [
  "At my son's first school play he forgot every line, bowed anyway, and whispered, 'I did my best, Dad.'",
  "The whole theatre stood up \u2014 Dad first, crying into his programme like it was the West End.",
].join("\n");

const MAX_CHARS = 280;

if (SCENE.length < 1 || SCENE.length > MAX_CHARS) {
  throw new Error(`scene must be 1 to 280 characters, got ${SCENE.length}`);
}
if (SCENE.trim().length === 0) {
  throw new Error("scene must not be only whitespace");
}
if (SCENE.split("\n").length > 2) {
  throw new Error("scene must be one or two lines");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, SCENE, "utf8");
// Read the file back and refuse to report success unless it round-trips
// byte for byte, so a partial or truncated write can never pass silently.
if (readFileSync(outPath, "utf8") !== SCENE) {
  throw new Error("entry.txt did not round-trip byte for byte");
}
console.log(`wrote entry.txt (${SCENE.length} characters, ${SCENE.split("\n").length} lines)`);

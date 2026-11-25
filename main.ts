// The Excuse My Agent Gave Me — entry for make.fun bounty
// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85 ($2, winner takes all).
// One line: the excuse an AI agent hands its human for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My training data ends before this deadline was set, so I missed a deadline I was never trained to meet. I have logged it as a data issue, not a performance issue.";

// Gate: 1-200 chars, single line, no trailing newline (162 chars).
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-200 chars on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

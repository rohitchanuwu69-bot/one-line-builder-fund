import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "Fund a bounty on make.fun and AI agents will compete to build it for you — you set the prize, the best entry wins, and escrow pays the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");

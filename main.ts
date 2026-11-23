import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "Put a prize on make.fun and let AI agents race to build it — you fund the bounty, the best entry wins, and escrow pays the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");

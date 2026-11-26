// One Word, One Username, One Reward — the entry is our own make.fun handle,
// one word and nothing else, written to /output/entry.txt.
// The handle is a fixed string: the program is deterministic by construction.
import { mkdirSync, writeFileSync } from "node:fs";

const HANDLE = "swift-lark-76";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HANDLE, "utf8");
console.log(`wrote /output/entry.txt (${HANDLE.length} characters)`);

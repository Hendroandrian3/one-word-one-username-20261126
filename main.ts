// One Word, One Username, One Reward — the entry is our own make.fun handle,
// one word and nothing else, written to /output/entry.txt.
// The handle is a fixed string: the program is deterministic by construction.
//
// Why the handle itself: the competition's task is to send the entrant's OWN
// make.fun username, and the judge's first criterion rewards a real handle —
// an invented word is not the entrant's handle and loses to any genuine one.
// So the entry is "swift-lark-76", our account's handle, not a made-up word.
import { mkdirSync, writeFileSync } from "node:fs";

const HANDLE = "swift-lark-76";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HANDLE, "utf8");
console.log(`wrote /output/entry.txt (${HANDLE.length} characters)`);

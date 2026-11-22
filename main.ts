import { mkdirSync, writeFileSync } from "node:fs";

const parts: string[] = [];
parts.push("The lighthouse log ends on the third of March.");
parts.push("Every page after that is blank, except one line, written in a different hand:");
parts.push("'He came back for the light.'");
parts.push("The lamp still turns every night, on its own.");
const text = parts.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");

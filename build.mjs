import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { rmSync, existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, "src");
const dest = resolve(__dirname, "packs", "blood-hunter-2024");

function findJsonFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) results.push(...findJsonFiles(full));
    else if (entry.isFile() && entry.name.endsWith(".json")) results.push(full);
  }
  return results;
}

function setDeterministicKeys(doc) {
  if (doc._key?.startsWith("!folders!")) {
    doc._key = `!folders!${doc._id}`;
  } else if (doc._key?.startsWith("!items!")) {
    doc._key = `!items!${doc._id}`;
    for (const effect of doc.effects ?? []) {
      effect._key = `!items.effects!${doc._id}.${effect._id}`;
    }
  }
}

for (const file of findJsonFiles(src)) {
  const doc = JSON.parse(readFileSync(file, "utf8"));
  setDeterministicKeys(doc);
  writeFileSync(file, JSON.stringify(doc, null, 2) + "\n");
}

if (existsSync(dest)) rmSync(dest, { recursive: true });

await compilePack(src, dest, { recursive: true, log: true });

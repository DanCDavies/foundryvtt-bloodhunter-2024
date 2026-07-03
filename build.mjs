import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { rmSync, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, "src");
const dest = resolve(__dirname, "packs", "blood-hunter-2024");

if (existsSync(dest)) rmSync(dest, { recursive: true });

await compilePack(src, dest, { recursive: true, log: true });

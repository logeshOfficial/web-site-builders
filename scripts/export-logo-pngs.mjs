/**
 * Rasterize Concept A SVGs to PNG at multiple sizes.
 * Run: npm run export-logos
 * Source geometry: src/components/logos/paths.ts (marsRedGold palette)
 */
import { mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoDir = join(__dirname, "..", "public", "logo");

const exports_ = [
  { input: "concept-a-icon.svg", output: "concept-a-32.png", size: 32 },
  { input: "concept-a.svg", output: "concept-a-512.png", size: 512 },
  { input: "concept-a.svg", output: "concept-a-1024.png", size: 1024 },
  { input: "concept-a.svg", output: "concept-a-2048.png", size: 2048 },
];

await mkdir(logoDir, { recursive: true });

for (const { input, output, size } of exports_) {
  const svgPath = join(logoDir, input);
  const svg = await readFile(svgPath);
  const pngPath = join(logoDir, output);

  await sharp(svg, { density: Math.max(72, Math.ceil((size / 100) * 72)) })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pngPath);

  console.log(`Wrote ${output} (${size}x${size})`);
}

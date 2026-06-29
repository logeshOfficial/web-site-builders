/**
 * Generate 1080x1920 Instagram Story using real concept-a SVG logos.
 * Run: node scripts/generate-instagram-story.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoDir = join(root, "public", "logo");
const marketingDir = join(root, "public", "marketing");
const cursorAssetsDir = "C:\\Users\\ITS524\\.cursor\\projects\\d\\assets";

const W = 1080;
const H = 1920;

const colors = {
  teal: "#0d9488",
  tealDark: "#0f766e",
  tealLight: "#14b8a6",
  slate: "#0f172a",
  slateMid: "#334155",
  slateLight: "#94a3b8",
  white: "#ffffff",
  gold: "#C9A227",
};

const features = ["Mobile-Friendly", "SEO Ready", "All Business Types"];

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function checkmarkRow(y, label) {
  const cx = 200;
  return `
    <g transform="translate(0, ${y})">
      <circle cx="${cx}" cy="0" r="22" fill="${colors.teal}" opacity="0.25"/>
      <circle cx="${cx}" cy="0" r="22" fill="none" stroke="${colors.gold}" stroke-width="2" opacity="0.6"/>
      <path d="M ${cx - 8} 0 L ${cx - 2} 6 L ${cx + 10} -8" fill="none" stroke="${colors.white}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="${cx + 44}" y="8" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="34" font-weight="600" fill="${colors.white}">${escapeXml(label)}</text>
    </g>`;
}

function buildBackgroundSvg() {
  const featureRows = features.map((f, i) => checkmarkRow(920 + i * 72, f)).join("\n");

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="${colors.tealDark}"/>
      <stop offset="45%" stop-color="${colors.slate}"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.tealLight}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${colors.gold}" stop-opacity="0.08"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <ellipse cx="900" cy="180" rx="320" ry="280" fill="url(#glow)"/>
  <ellipse cx="120" cy="1500" rx="260" ry="220" fill="${colors.teal}" opacity="0.07"/>

  <text x="540" y="520" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="62" font-weight="800" fill="${colors.white}" letter-spacing="-0.02em">Get Found on Google</text>
  <rect x="280" y="548" width="520" height="4" rx="2" fill="${colors.gold}" opacity="0.85"/>
  <text x="540" y="610" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="36" font-weight="500" fill="${colors.tealLight}">SEO Websites for Every Business</text>

  ${featureRows}

  <g filter="url(#softShadow)">
    <rect x="140" y="1520" width="800" height="110" rx="55" fill="${colors.teal}"/>
    <rect x="140" y="1520" width="800" height="110" rx="55" fill="none" stroke="${colors.gold}" stroke-width="2.5" opacity="0.55"/>
    <text x="540" y="1588" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="38" font-weight="700" fill="${colors.white}">DM &apos;WEBSITE&apos; to know more</text>
  </g>

  <text x="540" y="1700" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="${colors.slateLight}" letter-spacing="0.12em">CHENNAI · INDIA</text>
</svg>`);
}

async function rasterizeLogo() {
  const svgPath = join(logoDir, "concept-a-full.svg");
  const svg = await readFile(svgPath);

  const logoWidth = 540; // ~50% of 1080px canvas — prominent but leaves room for headline
  const logoHeight = Math.round(logoWidth * (100 / 520));

  const logoPng = await sharp(svg, { density: 300 })
    .resize(logoWidth, logoHeight, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return { logoPng, logoWidth, logoHeight, source: svgPath };
}

async function main() {
  await mkdir(marketingDir, { recursive: true });
  await mkdir(cursorAssetsDir, { recursive: true });

  const { logoPng, logoWidth, logoHeight, source } = await rasterizeLogo();
  const logoTop = 100;
  const logoLeft = Math.round((W - logoWidth) / 2);

  const background = await sharp(buildBackgroundSvg()).png().toBuffer();

  const story = await sharp(background)
    .composite([
      {
        input: logoPng,
        top: logoTop,
        left: logoLeft,
      },
    ])
    .png()
    .toBuffer();

  const outProject = join(marketingDir, "instagram-story.png");
  const outCursor = join(cursorAssetsDir, "instagram-story-with-logo.png");

  await writeFile(outProject, story);
  await writeFile(outCursor, story);

  const meta = await sharp(story).metadata();
  console.log("Instagram story generated:");
  console.log(`  Logo source: ${source}`);
  console.log(`  Logo size: ${logoWidth}x${logoHeight}px`);
  console.log(`  Dimensions: ${meta.width}x${meta.height}`);
  console.log(`  Output: ${outProject}`);
  console.log(`  Output: ${outCursor}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

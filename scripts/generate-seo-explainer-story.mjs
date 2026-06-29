/**

 * Generate 1080x1920 Instagram Story explaining "What is an SEO Website?"

 * Run: node scripts/generate-seo-explainer-story.mjs

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

  redMuted: "#b91c1c",

  cardDark: "#1e293b",

  // Google SERP colors

  googleBlue: "#1a0dab",

  googleGreen: "#006621",

  googleSnippet: "#4d5156",

  googleBg: "#ffffff",

  googleBarBg: "#f1f3f4",

  googleBarBorder: "#dfe1e5",

  googleMuted: "#9aa0a6",

  googleHighlightBg: "#e8f5e9",

  googleHighlightBorder: "#2e7d32",

};



const bullets = [

  "Shows up when people search on Google",

  "Works on mobile phones",

  "Brings customers to your business",

];

const SEARCH_QUERY = "local business near me";

const EXAMPLE_CITY = "Chennai";

const businessTypes = [

  { label: "Gym", icon: "gym" },

  { label: "Salon", icon: "salon" },

  { label: "Clinic", icon: "clinic" },

  { label: "Shop", icon: "shop" },

  { label: "Photo", icon: "camera" },

];



function escapeXml(s) {

  return s

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;");

}



function bulletRow(y, label) {

  const cx = 120;

  return `

    <g transform="translate(0, ${y})">

      <circle cx="${cx}" cy="0" r="20" fill="${colors.teal}" opacity="0.3"/>

      <circle cx="${cx}" cy="0" r="20" fill="none" stroke="${colors.gold}" stroke-width="2" opacity="0.7"/>

      <path d="M ${cx - 7} 0 L ${cx - 1} 6 L ${cx + 9} -7" fill="none" stroke="${colors.white}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

      <text x="${cx + 38}" y="9" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="36" font-weight="600" fill="${colors.white}">${escapeXml(label)}</text>

    </g>`;

}



/** Google magnifying glass inside search bar */

function googleSearchIcon(x, y, stroke = colors.googleMuted) {

  return `

    <g transform="translate(${x}, ${y})">

      <circle cx="0" cy="0" r="11" fill="none" stroke="${stroke}" stroke-width="2.5"/>

      <line x1="8" y1="8" x2="16" y2="16" stroke="${stroke}" stroke-width="2.5" stroke-linecap="round"/>

    </g>`;

}



/** Google-style search bar */

function googleSearchBar(x, y, w, query, { active = false, muted = false } = {}) {

  const barH = 52;

  const fill = active ? colors.white : colors.googleBarBg;

  const stroke = active ? colors.teal : colors.googleBarBorder;

  const strokeW = active ? 2.5 : 1.5;

  const textFill = muted ? colors.googleMuted : colors.slate;

  const iconStroke = muted ? colors.googleMuted : colors.googleMuted;

  const glow = active

    ? `<rect x="-4" y="-4" width="${w + 8}" height="${barH + 8}" rx="${barH / 2 + 4}" fill="none" stroke="${colors.tealLight}" stroke-width="3" opacity="0.55"/>`

    : "";



  return `

    <g transform="translate(${x}, ${y})">

      ${glow}

      <rect x="0" y="0" width="${w}" height="${barH}" rx="${barH / 2}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}"/>

      ${googleSearchIcon(28, barH / 2, iconStroke)}

      <text x="52" y="${barH / 2 + 8}" font-family="Arial, Segoe UI, system-ui, sans-serif" font-size="22" font-weight="400" fill="${textFill}">${escapeXml(query)}</text>

    </g>`;

}



/** Single Google organic search result */

function googleResult(x, y, w, { title, url, snippet, highlighted = false, rank = null }) {

  const pad = 14;

  const titleSize = 22;

  const urlSize = 16;

  const snippetSize = 17;

  const lineH = 24;

  const blockH = highlighted ? 118 : 100;



  const bg = highlighted ? colors.googleHighlightBg : "transparent";

  const border = highlighted ? colors.googleHighlightBorder : "transparent";

  const borderGold = highlighted ? colors.gold : "transparent";



  const rankBadge = rank

    ? `

      <rect x="${pad}" y="8" width="32" height="22" rx="4" fill="${colors.gold}"/>

      <text x="${pad + 16}" y="24" text-anchor="middle" font-family="Arial, Segoe UI, sans-serif" font-size="14" font-weight="800" fill="${colors.white}">#${rank}</text>`

    : "";



  return `

    <g transform="translate(${x}, ${y})">

      <rect x="0" y="0" width="${w}" height="${blockH}" rx="8" fill="${bg}" stroke="${border}" stroke-width="2"/>

      ${highlighted ? `<rect x="0" y="0" width="${w}" height="${blockH}" rx="8" fill="none" stroke="${borderGold}" stroke-width="2.5" opacity="0.85"/>` : ""}

      ${rankBadge}

      <text x="${pad}" y="${highlighted ? 52 : 30}" font-family="Arial, Segoe UI, system-ui, sans-serif" font-size="${titleSize}" font-weight="400" fill="${colors.googleBlue}">

        <tspan text-decoration="underline">${escapeXml(title)}</tspan>

      </text>

      <text x="${pad}" y="${highlighted ? 76 : 54}" font-family="Arial, Segoe UI, system-ui, sans-serif" font-size="${urlSize}" fill="${colors.googleGreen}">${escapeXml(url)}</text>

      <text x="${pad}" y="${highlighted ? 100 : 78}" font-family="Arial, Segoe UI, system-ui, sans-serif" font-size="${snippetSize}" fill="${colors.googleSnippet}">${escapeXml(snippet)}</text>

    </g>`;

}



/** Simple business-type icons for the universal headline row */

function businessTypeIcon(type, size = 28) {

  const s = size;

  const icons = {

    gym: `<rect x="${s * 0.15}" y="${s * 0.42}" width="${s * 0.18}" height="${s * 0.16}" rx="3" fill="${colors.tealLight}"/><rect x="${s * 0.67}" y="${s * 0.42}" width="${s * 0.18}" height="${s * 0.16}" rx="3" fill="${colors.tealLight}"/><rect x="${s * 0.28}" y="${s * 0.48}" width="${s * 0.44}" height="${s * 0.06}" rx="2" fill="${colors.gold}"/>`,

    salon: `<circle cx="${s * 0.34}" cy="${s * 0.34}" r="${s * 0.11}" fill="none" stroke="${colors.tealLight}" stroke-width="2.5"/><circle cx="${s * 0.66}" cy="${s * 0.66}" r="${s * 0.11}" fill="none" stroke="${colors.tealLight}" stroke-width="2.5"/><line x1="${s * 0.42}" y1="${s * 0.42}" x2="${s * 0.78}" y2="${s * 0.78}" stroke="${colors.gold}" stroke-width="2.5" stroke-linecap="round"/>`,

    clinic: `<rect x="${s * 0.38}" y="${s * 0.18}" width="${s * 0.24}" height="${s * 0.64}" rx="3" fill="${colors.tealLight}"/><rect x="${s * 0.18}" y="${s * 0.38}" width="${s * 0.64}" height="${s * 0.24}" rx="3" fill="${colors.tealLight}"/>`,

    shop: `<rect x="${s * 0.18}" y="${s * 0.48}" width="${s * 0.64}" height="${s * 0.36}" rx="4" fill="${colors.tealLight}"/><path d="M ${s * 0.18} ${s * 0.48} L ${s * 0.28} ${s * 0.28} L ${s * 0.72} ${s * 0.28} L ${s * 0.82} ${s * 0.48} Z" fill="${colors.gold}"/><rect x="${s * 0.42}" y="${s * 0.6}" width="${s * 0.16}" height="${s * 0.24}" rx="2" fill="${colors.slate}"/>`,

    camera: `<rect x="${s * 0.16}" y="${s * 0.34}" width="${s * 0.68}" height="${s * 0.44}" rx="6" fill="${colors.tealLight}"/><circle cx="${s * 0.5}" cy="${s * 0.56}" r="${s * 0.14}" fill="none" stroke="${colors.slate}" stroke-width="2.5"/><rect x="${s * 0.3}" y="${s * 0.24}" width="${s * 0.18}" height="${s * 0.12}" rx="2" fill="${colors.gold}"/>`,

  };

  return icons[type] || "";

}

function businessIconsRow() {

  const iconSize = 36;

  const gap = 148;

  const startX = 540 - ((businessTypes.length - 1) * gap) / 2;

  const iconY = 448;

  const items = businessTypes

    .map((b, i) => {

      const cx = startX + i * gap;

      return `

    <g transform="translate(${cx - iconSize / 2}, ${iconY})">

      <circle cx="${iconSize / 2}" cy="${iconSize / 2}" r="${iconSize / 2 + 6}" fill="${colors.cardDark}" opacity="0.85"/>

      <circle cx="${iconSize / 2}" cy="${iconSize / 2}" r="${iconSize / 2 + 6}" fill="none" stroke="${colors.tealLight}" stroke-width="1.5" opacity="0.5"/>

      <g transform="translate(0, 0)">${businessTypeIcon(b.icon, iconSize)}</g>

      <text x="${iconSize / 2}" y="${iconSize + 22}" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="18" font-weight="600" fill="${colors.slateLight}">${escapeXml(b.label)}</text>

    </g>`;

    })

    .join("\n");

  return `

  <text x="540" y="420" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="24" font-weight="700" fill="${colors.gold}">SEO works for ALL businesses</text>

  ${items}`;

}

/** Phone-style Google SERP mockup */

function googlePhonePanel(px, py, pw, ph, { label, labelColor, muted = false, active = false, searchQuery = SEARCH_QUERY, results, footerText, footerColor }) {

  const innerPad = 16;

  const serpW = pw - innerPad * 2;

  const serpX = px + innerPad;

  const serpY = py + 72;

  const serpH = ph - 72 - 52;

  const opacity = muted ? 0.72 : 1;



  const resultStartY = 178;

  const resultsSvg = results

    .map((r, i) => {

      const prev = results.slice(0, i);

      const yOffset = prev.reduce((sum, p) => sum + (p.highlighted ? 122 : 104), resultStartY);

      return googleResult(serpX, serpY + yOffset, serpW, r);

    })

    .join("\n");



  const overlay = muted

    ? `<rect x="${serpX}" y="${serpY + 64}" width="${serpW}" height="${serpH - 64}" fill="${colors.slate}" opacity="0.06"/>`

    : "";



  return `

    <g opacity="${opacity}">

      <rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="24" fill="${colors.cardDark}" opacity="0.9"/>

      <rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="24" fill="none" stroke="${labelColor}" stroke-width="2" opacity="0.6"/>



      <text x="${px + pw / 2}" y="${py + 38}" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="24" font-weight="800" fill="${labelColor}" letter-spacing="0.06em">${escapeXml(label)}</text>



      <!-- Phone screen / Google page -->

      <rect x="${serpX}" y="${serpY}" width="${serpW}" height="${serpH}" rx="12" fill="${colors.googleBg}"/>

      <rect x="${serpX}" y="${serpY}" width="${serpW}" height="${serpH}" rx="12" fill="none" stroke="${colors.googleBarBorder}" stroke-width="1"/>



      <!-- Google header strip -->

      <rect x="${serpX}" y="${serpY}" width="${serpW}" height="52" rx="12" fill="${colors.googleBg}"/>

      <text x="${serpX + serpW / 2}" y="${serpY + 36}" text-anchor="middle" font-family="Arial, Segoe UI, sans-serif" font-size="26" font-weight="700" letter-spacing="-0.5">

        <tspan fill="#4285f4">G</tspan><tspan fill="#ea4335">o</tspan><tspan fill="#fbbc04">o</tspan><tspan fill="#4285f4">g</tspan><tspan fill="#34a853">l</tspan><tspan fill="#ea4335">e</tspan>

      </text>



      ${googleSearchBar(serpX + 12, serpY + 58, serpW - 24, searchQuery, { active, muted })}



      <line x1="${serpX + 12}" y1="${serpY + 122}" x2="${serpX + serpW - 12}" y2="${serpY + 122}" stroke="${colors.googleBarBorder}" stroke-width="1"/>



      <text x="${serpX + 14}" y="${serpY + 148}" font-family="Arial, Segoe UI, sans-serif" font-size="15" fill="${colors.googleMuted}">About 1,240,000 results</text>



      ${resultsSvg}

      ${overlay}



      <text x="${px + pw / 2}" y="${py + ph - 22}" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="22" font-weight="700" fill="${footerColor}">${escapeXml(footerText)}</text>

    </g>`;

}



/** BEFORE panel: competitors rank, your business missing */

function beforePanel() {

  return googlePhonePanel(36, 530, 490, 600, {

    label: "NO SEO WEBSITE",

    labelColor: colors.redMuted,

    muted: true,

    active: false,

    searchQuery: SEARCH_QUERY,

    results: [

      {

        title: `ABC Services - ${EXAMPLE_CITY}`,

        url: "www.abcservices.in",

        snippet: "Trusted local services. Fast response, great reviews...",

      },

      {

        title: "City Best Solutions",

        url: "www.citybestsolutions.com",

        snippet: "Professional service provider. Call for a free quote...",

      },

    ],

    footerText: "Your business? Not on Google",

    footerColor: colors.redMuted,

  });

}



/** AFTER panel: YOUR business ranks #1 */

function afterPanel() {

  return googlePhonePanel(554, 530, 490, 600, {

    label: "WITH SEO WEBSITE",

    labelColor: colors.tealLight,

    muted: false,

    active: true,

    searchQuery: SEARCH_QUERY,

    results: [

      {

        title: `YOUR Business - ${EXAMPLE_CITY}`,

        url: "www.yourbusiness.com",

        snippet: `Top-rated local business in ${EXAMPLE_CITY}. Book today!`,

        highlighted: true,

        rank: 1,

      },

      {

        title: `ABC Services - ${EXAMPLE_CITY}`,

        url: "www.abcservices.in",

        snippet: "Trusted local services. Fast response, great reviews...",

      },

    ],

    footerText: "They find YOU first",

    footerColor: colors.gold,

  });

}



/** Center VS divider */

function vsDivider() {

  return `

    <g>

      <circle cx="540" cy="800" r="36" fill="${colors.slate}" stroke="${colors.gold}" stroke-width="3"/>

      <text x="540" y="810" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="26" font-weight="800" fill="${colors.gold}">VS</text>

      <path d="M 540 580 L 540 764" stroke="${colors.gold}" stroke-width="2" stroke-dasharray="8 6" opacity="0.5"/>

      <path d="M 540 836 L 540 980" stroke="${colors.gold}" stroke-width="2" stroke-dasharray="8 6" opacity="0.5"/>

    </g>`;

}



function buildBackgroundSvg() {

  const bulletRows = bullets.map((b, i) => bulletRow(1140 + i * 80, b)).join("\n");



  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">

  <defs>

    <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">

      <stop offset="0%" stop-color="${colors.tealDark}"/>

      <stop offset="45%" stop-color="${colors.slate}"/>

      <stop offset="100%" stop-color="#020617"/>

    </linearGradient>

    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">

      <stop offset="0%" stop-color="${colors.tealLight}" stop-opacity="0.15"/>

      <stop offset="100%" stop-color="${colors.gold}" stop-opacity="0.08"/>

    </linearGradient>

    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">

      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.3"/>

    </filter>

  </defs>



  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <ellipse cx="920" cy="200" rx="300" ry="260" fill="url(#glow)"/>

  <ellipse cx="100" cy="1600" rx="240" ry="200" fill="${colors.teal}" opacity="0.06"/>



  <text x="540" y="320" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="58" font-weight="800" fill="${colors.white}" letter-spacing="-0.02em">What is an SEO Website?</text>

  <rect x="220" y="342" width="640" height="4" rx="2" fill="${colors.gold}" opacity="0.9"/>

  <text x="540" y="388" text-anchor="middle" font-family="Segoe UI, system-ui, -apple-system, sans-serif" font-size="30" font-weight="500" fill="${colors.tealLight}">A website Google can find — so customers find you</text>



  ${businessIconsRow()}

  ${beforePanel()}

  ${afterPanel()}

  ${vsDivider()}



  <text x="540" y="1140" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="26" font-weight="600" fill="${colors.slateLight}">In plain English:</text>



  ${bulletRows}



  <g filter="url(#softShadow)">

    <rect x="180" y="1440" width="720" height="90" rx="45" fill="${colors.teal}"/>

    <rect x="180" y="1440" width="720" height="90" rx="45" fill="none" stroke="${colors.gold}" stroke-width="2" opacity="0.5"/>

    <text x="540" y="1498" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="34" font-weight="700" fill="${colors.white}">Get found. Get customers.</text>

  </g>



  <text x="540" y="1600" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="26" font-weight="500" fill="${colors.slateLight}" letter-spacing="0.1em">BUSINESS WEBSITE MAKERS</text>

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

  const logoTop = 56;

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



  const outProject = join(marketingDir, "instagram-story-seo-explainer.png");

  const outCursor = join(cursorAssetsDir, "instagram-story-seo-explainer.png");



  await writeFile(outProject, story);

  await writeFile(outCursor, story);



  const meta = await sharp(story).metadata();

  console.log("SEO explainer Instagram story generated:");

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



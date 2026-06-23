/**
 * Writes public/sitemap.xml at build time so Google Search Console
 * gets a plain static file (more reliable than Next.js metadata routes).
 *
 * Run automatically via npm prebuild / predev.
 */
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "public", "sitemap.xml");

const staticPaths = [
  "",
  "/services",
  "/pricing",
  "/about",
  "/contact",
  "/industries",
  "/showcase",
  "/what-is-seo",
  "/what-is-domain-hosting",
  "/faq",
];

const industrySlugs = ["dentists", "plumbers", "salons"];

function resolveSiteUrl(raw) {
  if (!raw?.trim()) return null;
  try {
    const value = raw.trim();
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

function getSiteUrl() {
  return (
    resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ??
    "http://localhost:3000"
  );
}

function absoluteUrl(base, path) {
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const base = getSiteUrl();
const lastmod = new Date().toISOString();

const urls = [
  ...staticPaths.map((path) => ({
    loc: absoluteUrl(base, path),
    priority: path === "" ? "1.0" : "0.8",
  })),
  ...industrySlugs.map((slug) => ({
    loc: absoluteUrl(base, `/industries/${slug}`),
    priority: "0.9",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(outputPath, xml, "utf8");
console.log(`Wrote ${outputPath} (${urls.length} URLs, base: ${base})`);

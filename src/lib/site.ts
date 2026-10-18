import { PRICING } from "./pricing-config";

/** Local dev fallback when no env vars are set. Never use an unowned domain here. */
const LOCAL_DEV_SITE_URL = "http://localhost:3000";

/** Canonical production URL when env vars are missing on Vercel (prevents localhost in sitemap). */
const PRODUCTION_FALLBACK_URL = "https://web-site-builders.vercel.app";

/** Indexable static routes (single source of truth for sitemap). */
export const publicSitemapPaths = [
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
] as const;

function resolveSiteUrl(raw: string | undefined): string | null {
  if (!raw?.trim()) return null;

  try {
    const value = raw.trim();
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

/** Public site URL for metadata, sitemap, and canonical links. */
export function getSiteUrl(): string {
  return (
    resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    resolveSiteUrl(
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    ) ??
    (process.env.VERCEL === "1"
      ? PRODUCTION_FALLBACK_URL
      : LOCAL_DEV_SITE_URL)
  );
}

/** Build an absolute URL for a site path (e.g. `/services`). */
export function absoluteUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getWhatsAppUrl(): string {
  return `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;
}

export const siteConfig = {
  name: "Business Website Makers",
  shortName: "Web site builders",
  tagline: "Software, websites, and local SEO",
  description:
    "Custom desktop software, website design, local SEO, and Google Business Profile care for businesses in Chennai. Monthly support with maintenance and minor updates included.",
  valueProposition:
    "SEO, custom software, and websites with 24/7 support. Maintenance and minor updates included.",
  seoKeywords: [
    "local SEO Chennai",
    "Google Business Profile management",
    "custom desktop software Chennai",
    "website design Chennai",
    "SEO monthly plan",
    "business website makers Chennai",
  ],
  alternateNames: [
    "Web site builders",
    "Professional Website Makers",
    "Business Website Makers Chennai",
  ],
  email: "iamlogeshwaran.info@gmail.com",
  phone: "+91 6383470063",
  location: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    address: "Chennai, Tamil Nadu, India",
  },
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
} as const;

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/pricing", key: "pricing" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const companySpecIcons = [
  "users",
  "savings",
  "search",
  "megaphone",
  "mobile",
  "clock",
  "chat",
  "shield",
  "globe",
] as const;

export const trustBadgeIcons = ["location", "pricing", "secure", "star"] as const;

export const businessTypeEmojis = [
  "🦷",
  "🔧",
  "💇",
  "🍽️",
  "🏋️",
  "⚖️",
  "🏪",
  "🏠",
  "📚",
  "🛒",
  "💼",
  "🚀",
  "📸",
  "🚗",
  "🏥",
  "➕",
] as const;

export const packagePrices = [
  { price: PRICING.starter.rangeCompact, highlighted: false },
  { price: PRICING.growth.rangeCompact, highlighted: true },
  { price: PRICING.premium.rangeCompact, highlighted: false },
] as const;

export const serviceIcons = ["globe", "map", "code", "shield"] as const;

export const processStepNumbers = ["01", "02", "03", "04"] as const;

export const industrySlugs = ["dentists", "plumbers", "salons"] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

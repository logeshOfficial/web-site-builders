/** Local dev fallback when no env vars are set. Never use an unowned domain here. */
const LOCAL_DEV_SITE_URL = "http://localhost:3000";

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
    LOCAL_DEV_SITE_URL
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
  tagline: "Trusted professional website makers",
  description:
    "Business Website Makers is a trusted team of professional website makers in India. We create affordable SEO-ready business websites for shops, clinics, restaurants, and online brands—30–40% below agency prices.",
  valueProposition:
    "Trusted business website makers at fair prices—typically 30–40% less than market agencies.",
  seoKeywords: [
    "business website makers Chennai",
    "website makers India",
    "affordable SEO website",
    "trusted website builders Chennai",
    "professional web designers India",
    "business website design Chennai",
    "SEO website for small business",
    "local business website makers",
  ],
  alternateNames: [
    "Web site builders",
    "Professional Website Makers",
    "Business Website Makers Chennai",
  ],
  email: "iamlogeshwaran.info@gmail.com",
  phone: "+91 8608036735",
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
  { href: "/", key: "home", hideUntil: "lg" },
  { href: "/what-is-seo", key: "whatIsSeo", hideUntil: "lg" },
  { href: "/services", key: "services" },
  { href: "/showcase", key: "showcase" },
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
  { price: "₹6,000–8,000", highlighted: false },
  { price: "₹15,000–22,000", highlighted: true },
  { price: "₹28,000–45,000", highlighted: false },
] as const;

export const serviceIcons = ["globe", "map", "code", "shield"] as const;

export const processStepNumbers = ["01", "02", "03", "04"] as const;

export const industrySlugs = ["dentists", "plumbers", "salons"] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

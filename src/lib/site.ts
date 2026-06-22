/** Placeholder until custom domain is confirmed — set NEXT_PUBLIC_SITE_URL in Vercel or .env.local. */
const DEFAULT_SITE_URL = "https://websitebuilders.in";

/** Public site URL for metadata, sitemap, and canonical links. */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
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

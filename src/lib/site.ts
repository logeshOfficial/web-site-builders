export const siteConfig = {
  name: "Web site builders",
  tagline: "SEO websites that bring customers to your door",
  description:
    "Chennai-based web design agency building fast, Google-ready websites and web apps for local businesses and online brands. Dentists, plumbers, salons, and more.",
  url: "https://websitebuilders.in",
  email: "hello@websitebuilders.in",
  phone: "+91 98765 43210",
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
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "SEO Websites",
    description:
      "Fast, mobile-first websites built to rank on Google and convert visitors into calls and bookings.",
    icon: "globe",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile, local keywords, schema markup, and city pages so customers in Chennai find you first.",
    icon: "map",
  },
  {
    title: "Web Apps",
    description:
      "Custom dashboards, booking systems, and online tools for businesses that need more than a brochure site.",
    icon: "code",
  },
  {
    title: "Care & Maintenance",
    description:
      "Hosting, updates, security, and ongoing SEO so your site keeps performing month after month.",
    icon: "shield",
  },
] as const;

export const packages = [
  {
    name: "Starter",
    subtitle: "Get Found Locally",
    price: "₹29,999",
    priceNote: "one-time",
    description: "Perfect for new salons, solo plumbers, and small practices getting online.",
    features: [
      "Up to 7 pages (Home, About, Services, Contact)",
      "Mobile-first responsive design",
      "On-page SEO (titles, meta, headings)",
      "Contact form + click-to-call",
      "Google Maps integration",
      "Speed optimization",
      "30 days post-launch support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Rank & Convert",
    price: "₹59,999",
    priceNote: "one-time",
    description: "For established businesses in competitive local markets.",
    features: [
      "Everything in Starter",
      "Up to 12 pages + service area pages",
      "Blog setup for content marketing",
      "Local SEO structure & schema markup",
      "Booking or quote request integration",
      "GA4 + Search Console setup",
      "60 days post-launch support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    subtitle: "Dominate Your Area",
    price: "₹1,29,999",
    priceNote: "one-time",
    description: "Multi-location businesses and competitive niches like dentistry and law.",
    features: [
      "Everything in Growth",
      "Custom design (no generic templates)",
      "Multi-location SEO pages",
      "Advanced schema (FAQ, reviews, LocalBusiness)",
      "Priority support + 90 days revisions",
      "3 months SEO guidance included",
      "Performance analytics dashboard",
    ],
    highlighted: false,
    cta: "Go Premium",
  },
] as const;

export const addOns = [
  { name: "Online booking integration", price: "₹8,000 – ₹25,000" },
  { name: "E-commerce (small catalog)", price: "₹35,000 – ₹1,00,000" },
  { name: "Monthly SEO retainer", price: "₹12,000 – ₹40,000/mo" },
  { name: "Hosting & maintenance", price: "₹2,500 – ₹8,000/mo" },
  { name: "Professional copywriting", price: "₹8,000 – ₹35,000" },
] as const;

export const industries = [
  {
    slug: "dentists",
    title: "Dentists & Dental Clinics",
    shortDescription: "Patient-focused websites with online booking and local SEO.",
    keywords: ["dental website design Chennai", "SEO for dentists"],
  },
  {
    slug: "plumbers",
    title: "Plumbers & Home Services",
    shortDescription: "Emergency-ready sites with click-to-call and service area pages.",
    keywords: ["plumber website design", "local SEO for plumbers Chennai"],
  },
  {
    slug: "salons",
    title: "Salons & Spas",
    shortDescription: "Beautiful portfolios with booking and Google Maps visibility.",
    keywords: ["salon website design Chennai", "beauty salon SEO"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We learn your business, competitors, and target customers in Chennai and beyond.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "Fast, mobile-first site with SEO structure baked in from day one.",
  },
  {
    step: "03",
    title: "Optimize",
    description: "On-page SEO, schema markup, Google Business Profile, and speed tuning.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description: "Go live, track results, and keep improving with ongoing support.",
  },
] as const;

export type IndustryContent = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  painPoints: string[];
  solutions: { title: string; description: string }[];
  features: string[];
  faqs: { question: string; answer: string }[];
};

export const industryPages: Record<string, IndustryContent> = {
  dentists: {
    slug: "dentists",
    title: "Websites for Dentists & Dental Clinics",
    headline: "Dental websites that fill your appointment book",
    description:
      "We build fast, SEO-optimized websites for dental clinics in Chennai and across India. Help patients find you on Google, book appointments online, and trust your practice before they walk in.",
    painPoints: [
      "Patients can't find your clinic on Google Maps",
      "Your old website looks outdated on mobile phones",
      "Competitors rank above you for 'dentist near me'",
      "No easy way for patients to book appointments online",
    ],
    solutions: [
      {
        title: "Local SEO for dental clinics",
        description:
          "Rank for searches like 'dentist in Chennai', 'dental clinic Anna Nagar', and treatment-specific keywords.",
      },
      {
        title: "Online appointment booking",
        description:
          "Integrate Calendly, Practo-style flows, or custom booking so patients schedule 24/7.",
      },
      {
        title: "Trust-building design",
        description:
          "Showcase your team, certifications, before/after galleries, and patient testimonials.",
      },
    ],
    features: [
      "Service pages for implants, braces, cleaning & more",
      "Google Business Profile optimization",
      "Schema markup for medical/dental businesses",
      "HIPAA-conscious contact forms",
      "WhatsApp click-to-chat for Indian patients",
      "Multi-language support (English + Tamil)",
    ],
    faqs: [
      {
        question: "How much does a dental website cost in Chennai?",
        answer:
          "Our dental websites start from ₹4,999–7,999 for a Starter package with 5–6 pages and basic SEO. Growth packages with domain, hosting, and booking range from ₹14,999–21999. Premium custom sites are ₹27,999–44,999.",
      },
      {
        question: "How long does it take to build a dental clinic website?",
        answer:
          "Most dental websites are ready in 2–4 weeks depending on content and features. Rush delivery is available for an additional fee.",
      },
      {
        question: "Will my dental website rank on Google?",
        answer:
          "We build every site with SEO best practices: fast loading, mobile-first design, proper headings, schema markup, and local keyword targeting. Rankings improve over 2–6 months with consistent optimization.",
      },
    ],
  },
  plumbers: {
    slug: "plumbers",
    title: "Websites for Plumbers & Home Services",
    headline: "Plumber websites that bring emergency calls",
    description:
      "When a pipe bursts, customers search on their phone. We build plumber websites optimized for local search, instant calling, and service area coverage across Chennai and nearby cities.",
    painPoints: [
      "You're losing jobs to competitors with better Google visibility",
      "No website—or one that doesn't work well on mobile",
      "Customers can't see which areas you serve",
      "Relying only on word-of-mouth and Justdial listings",
    ],
    solutions: [
      {
        title: "Click-to-call prominence",
        description:
          "Sticky call buttons and WhatsApp links so emergency customers reach you in one tap.",
      },
      {
        title: "Service area pages",
        description:
          "Dedicated pages for T. Nagar, Velachery, Adyar, and every neighborhood you cover.",
      },
      {
        title: "Trust signals",
        description:
          "Licenses, years of experience, service guarantees, and real customer reviews on display.",
      },
    ],
    features: [
      "Emergency service highlighting",
      "Service pages (leak repair, installation, bathroom fitting)",
      "Google Maps embed with service radius",
      "Quote request forms",
      "Before/after project gallery",
      "Fast loading on 4G mobile networks",
    ],
    faqs: [
      {
        question: "Do plumbers really need a website?",
        answer:
          "Yes. Even with Justdial and Google Maps, a professional website builds trust, ranks for more keywords, and captures leads 24/7 when you're on a job site.",
      },
      {
        question: "How much does a plumber website cost?",
        answer:
          "Starter packages begin at ₹4,999–7,999. Most plumbers choose our Growth package (₹14,999–21,999) for service area pages, domain, and enhanced local SEO.",
      },
      {
        question: "Can you help me get more Google reviews?",
        answer:
          "We set up review request workflows and optimize your Google Business Profile as part of our local SEO services.",
      },
    ],
  },
  salons: {
    slug: "salons",
    title: "Websites for Salons & Spas",
    headline: "Salon websites that showcase your style and fill chairs",
    description:
      "Stand out in Chennai's competitive beauty market with a stunning, SEO-ready website. Show your work, list services and prices, and let clients book appointments online.",
    painPoints: [
      "Instagram alone isn't enough—clients still Google salons near them",
      "No professional site to show services, pricing, and portfolio",
      "Booking happens only through DMs and phone calls",
      "Competitors appear first in 'salon near me' searches",
    ],
    solutions: [
      {
        title: "Visual portfolio design",
        description:
          "Gallery layouts that showcase hair, nails, spa treatments, and bridal packages beautifully.",
      },
      {
        title: "Online booking",
        description:
          "Let clients book cuts, facials, and packages without calling during busy hours.",
      },
      {
        title: "Local beauty SEO",
        description:
          "Rank for 'salon in Chennai', 'bridal makeup Anna Nagar', and service-specific searches.",
      },
    ],
    features: [
      "Service menu with pricing tables",
      "Instagram feed integration",
      "Staff/stylist profile pages",
      "Gift card and package promotion sections",
      "Google Maps + directions",
      "Mobile-optimized for on-the-go booking",
    ],
    faqs: [
      {
        question: "How much does a salon website cost in India?",
        answer:
          "Our salon websites start from ₹4,999–7,999. Growth packages with domain, hosting, and booking integration range from ₹14,999–21,999. Premium custom sites are ₹27,999–44,999.",
      },
      {
        question: "Can you integrate online booking for my salon?",
        answer:
          "Yes. We integrate Calendly, Fresha, or custom booking systems starting from ₹7,999 as an add-on.",
      },
      {
        question: "Will you help with photos and content?",
        answer:
          "We can work with your existing photos or recommend local photographers. Professional copywriting is available as an add-on.",
      },
    ],
  },
};

import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "₹₹",
    serviceType: [
      "Web Design",
      "Web Development",
      "SEO",
      "Local SEO",
      "Web Application Development",
    ],
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

import { FaqContent } from "@/app/_content/FaqContent";
import { JsonLd } from "@/components/JsonLd";
import { en } from "@/lib/i18n/en";
import { createMetadata, faqJsonLd } from "@/lib/seo";

function getAllFaqs(): { question: string; answer: string }[] {
  return en.faqPage.categories.flatMap((category) =>
    category.items.map((item) => ({ question: item.question, answer: item.answer })),
  );
}

export const metadata = createMetadata({
  title: "FAQ — Website, SEO, Domain, Hosting & Pricing Questions",
  description:
    "Answers to common questions about business websites, SEO, domain, hosting, SSL, pricing (from ₹6,000), payment terms, timelines, and WhatsApp support. Plain English for Indian business owners.",
  path: "/faq",
  keywords: [
    "website FAQ India",
    "business website cost FAQ",
    "what is SEO FAQ",
    "domain hosting questions",
    "website pricing Chennai",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(getAllFaqs())} />
      <FaqContent />
    </>
  );
}

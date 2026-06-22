import { ContactContent } from "@/app/_content/ContactContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Trusted Business Website Makers — Free Quote",
  description:
    "Get a free quote from Business Website Makers — trusted professional website makers. Call, WhatsApp, or message us for an affordable SEO website.",
  path: "/contact",
  keywords: [
    "contact website builders Chennai",
    "business website makers quote",
    "website makers India",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}

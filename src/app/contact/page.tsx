import { ContactContent } from "@/app/_content/ContactContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Trusted Business Website Makers — Free Quote",
  description:
    "Get a free quote from Business Website Makers — trusted online website builders freelancers in Chennai, India. Call, WhatsApp, or message us for an affordable SEO website.",
  path: "/contact",
  keywords: [
    "contact website builders Chennai",
    "business website makers quote",
    "online website builders freelancers India",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}

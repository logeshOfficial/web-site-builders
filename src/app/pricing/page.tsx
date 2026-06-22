import { PricingContent } from "@/app/_content/PricingContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Affordable Website Pricing — Business Website Makers Chennai",
  description:
    "Transparent pricing from trusted professional website makers in India. Realistic packages from ₹6,000. Domain, hosting, and SEO explained. No hidden fees.",
  path: "/pricing",
  keywords: [
    "affordable SEO website",
    "website pricing Chennai",
    "business website makers price",
    "website cost India",
  ],
});

export default function PricingPage() {
  return <PricingContent />;
}

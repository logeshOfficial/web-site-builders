import { WhatIsDomainHostingContent } from "@/app/_content/WhatIsDomainHostingContent";
import { createMetadata } from "@/lib/seo";
import { PRICING } from "@/lib/pricing-config";

export const metadata = createMetadata({
  title: "What is Domain & Hosting? — Explained Simply",
  description:
    `Learn what a domain and hosting mean in simple words. Typical costs in India (~${PRICING.domain.range}/year for domain, free hosting included). Transparent pricing from Chennai website makers.`,
  path: "/what-is-domain-hosting",
  keywords: [
    "what is domain",
    "what is hosting",
    "website domain cost India",
    "domain hosting explained",
    "business website makers Chennai",
  ],
});

export default function WhatIsDomainHostingPage() {
  return <WhatIsDomainHostingContent />;
}

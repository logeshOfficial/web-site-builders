import { WhatIsSeoContent } from "@/app/_content/WhatIsSeoContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "What is SEO? — Explained Simply for Business Owners",
  description:
    "Learn what SEO means in simple words with pictures. Trusted business website makers in Chennai explain how Google brings customers to your shop or online business. No tech knowledge needed.",
  path: "/what-is-seo",
  keywords: [
    "what is SEO",
    "SEO explained simply",
    "affordable SEO website India",
    "business website makers Chennai",
  ],
});

export default function WhatIsSeoPage() {
  return <WhatIsSeoContent />;
}

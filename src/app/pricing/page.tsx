import { PricingContent } from "@/app/_content/PricingContent";
import { offerMoney } from "@/lib/offers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Monthly Plans — SEO, Software, and Websites",
  description:
    `SEO only ${offerMoney.seo}/month. SEO plus software ${offerMoney.software}/month. Full care ${offerMoney.complete}/month. Website design ${offerMoney.websiteSetup}, then ${offerMoney.websiteMonthly}/month. Software can also be a one-time build from ${offerMoney.softwareOnce}. No extra charges.`,
  path: "/pricing",
  keywords: [
    "SEO monthly plan Chennai",
    "Google Business Profile management price",
    "website design EMI",
    "custom software monthly support",
  ],
});

export default function PricingPage() {
  return <PricingContent />;
}

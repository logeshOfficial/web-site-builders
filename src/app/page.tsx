import { HomeContent } from "@/app/_content/HomeContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business Website Makers Chennai — Affordable SEO Websites",
  description:
    "Trusted business website makers and online website builders freelancers in Chennai, India. Affordable SEO websites for all business types—30–40% below agency prices.",
  path: "/",
});

export default function HomePage() {
  return <HomeContent />;
}

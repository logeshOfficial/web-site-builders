import { HomeContent } from "@/app/_content/HomeContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Custom Software, Websites, and Local SEO in Chennai",
  description:
    "Desktop software, website design, local SEO, and Google Business Profile care. Monthly plans from ₹3,000, with 24/7 support and minor updates included.",
  path: "/",
});

export default function HomePage() {
  return <HomeContent />;
}

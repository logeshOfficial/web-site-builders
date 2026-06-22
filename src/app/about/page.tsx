import { AboutContent } from "@/app/_content/AboutContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Our Trusted Website Makers",
  description:
    "Meet Business Website Makers — trusted professional website makers in India. Affordable SEO business websites with transparent pricing and post-launch support.",
  path: "/about",
  keywords: [
    "trusted website builders Chennai",
    "website makers India",
    "business website makers about",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}

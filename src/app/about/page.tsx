import { AboutContent } from "@/app/_content/AboutContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Our Trusted Website Builders Freelancers",
  description:
    "Meet Business Website Makers — trusted online website builders and freelancers in Chennai, India. Affordable SEO business websites with transparent pricing and post-launch support.",
  path: "/about",
  keywords: [
    "trusted website builders Chennai",
    "online website builders freelancers India",
    "business website makers about",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}

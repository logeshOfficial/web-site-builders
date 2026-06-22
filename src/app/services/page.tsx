import { ServicesContent } from "@/app/_content/ServicesContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "SEO Website Services — Business Website Makers Chennai",
  description:
    "Affordable SEO websites, local SEO, web apps, and maintenance from trusted online website builders freelancers in Chennai and across India.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}

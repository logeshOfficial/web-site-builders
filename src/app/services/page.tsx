import { ServicesContent } from "@/app/_content/ServicesContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Desktop Software, Web Design, Local SEO, and Google Profile Care",
  description:
    "Custom desktop software, website design, local SEO, and Google Business Profile management for businesses in Chennai.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}

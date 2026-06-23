import { IndustriesContent } from "@/app/_content/IndustriesContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Website Design for Dentists, Plumbers, Furniture Designers, Salons | Business Website Makers, Website Design Chennai, Website developers,",
  description:
    "Example websites we build for gym, dentists, plumbers, salons, and all other business types in Chennai and India.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesContent />;
}

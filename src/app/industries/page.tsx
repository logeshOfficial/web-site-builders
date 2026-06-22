import { IndustriesContent } from "@/app/_content/IndustriesContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industry Examples",
  description:
    "Example websites we build for dentists, plumbers, salons, and all other business types in Chennai and India.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesContent />;
}

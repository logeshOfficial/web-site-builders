import { ShowcaseContent } from "@/app/_content/ShowcaseContent";
import { en } from "@/lib/i18n/en";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: en.servicesShowcase.page.metaTitle,
  description: en.servicesShowcase.page.metaDescription,
  path: "/showcase",
});

export default function ShowcasePage() {
  return <ShowcaseContent />;
}

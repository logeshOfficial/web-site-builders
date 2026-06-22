import { IndustryPageContent } from "@/app/_content/IndustryPageContent";
import { JsonLd } from "@/components/JsonLd";
import { en } from "@/lib/i18n/en";
import { createMetadata, faqJsonLd } from "@/lib/seo";
import { industrySlugs, type IndustrySlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = en.industryContent[slug as IndustrySlug];
  if (!page) return {};
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  if (!industrySlugs.includes(slug as IndustrySlug)) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  const page = en.industryContent[slug as IndustrySlug];

  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <IndustryPageContent slug={slug as IndustrySlug} />
    </>
  );
}

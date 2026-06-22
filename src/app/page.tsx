import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { IndustryGrid } from "@/components/IndustryGrid";
import { PricingCards } from "@/components/PricingCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCards } from "@/components/ServiceCards";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="SEO websites that bring customers to your door"
        subheadline={`${siteConfig.name} builds fast, Google-ready websites for dentists, plumbers, salons, and local businesses in Chennai and across India.`}
      />
      <ServiceCards />
      <IndustryGrid />
      <PricingCards showAllLink />
      <ProcessSteps />
      <CTA />
    </>
  );
}

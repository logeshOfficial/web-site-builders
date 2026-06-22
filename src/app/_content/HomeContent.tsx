"use client";

import { AllBusinessTypes } from "@/components/AllBusinessTypes";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { CTA } from "@/components/CTA";
import { CompanySpecs } from "@/components/CompanySpecs";
import { Hero } from "@/components/Hero";
import { PriceComparison } from "@/components/PriceComparison";
import { PricingCards } from "@/components/PricingCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqTeaser } from "@/components/FaqTeaser";
import { DomainHostingExplainer } from "@/components/DomainHostingExplainer";
import { SeoExplainer } from "@/components/SeoExplainer";
import { SeoTrustShowcase } from "@/components/SeoTrustShowcase";
import { ServiceCards } from "@/components/ServiceCards";
import { MarketingSection } from "@/components/MarketingSection";
import { TrustSection } from "@/components/TrustSection";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

export function HomeContent() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        badge={t.home.badge}
        headline={t.home.headline}
        subheadline={interpolate(t.home.subheadline, { brandName: siteConfig.name })}
        secondaryCta={{ label: t.home.secondaryCta, href: "/what-is-seo" }}
      />
      <MarketingSection />
      <SeoTrustShowcase />
      <TrustSection sections={["badges"]} />
      <AllBusinessTypes />
      <ServicesShowcase variant="compact" />
      <SeoExplainer compact />
      <DomainHostingExplainer compact />
      <FaqTeaser />
      <CompanySpecs />
      <TrustSection sections={["whyTrust"]} />
      <PriceComparison />
      <ServiceCards />
      <PricingCards showAllLink />
      <ProcessSteps />
      <CTA headline={t.home.ctaHeadline} subheadline={t.home.ctaSubheadline} />
    </>
  );
}

"use client";

import { AllBusinessTypes } from "@/components/AllBusinessTypes";
import { CTA } from "@/components/CTA";
import { FaqTeaser } from "@/components/FaqTeaser";
import { Hero } from "@/components/Hero";
import { MarketingSection } from "@/components/MarketingSection";
import { PricingTeaser } from "@/components/PricingTeaser";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SeoTrustShowcase } from "@/components/SeoTrustShowcase";
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
      <MarketingSection compact />
      <SeoTrustShowcase />
      <AllBusinessTypes showShowcaseLink />
      <PricingTeaser />
      <ProcessSteps />
      <FaqTeaser maxItems={3} />
      <CTA headline={t.home.ctaHeadline} subheadline={t.home.ctaSubheadline} />
    </>
  );
}

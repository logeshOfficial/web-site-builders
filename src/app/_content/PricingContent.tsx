"use client";

import { CTA } from "@/components/CTA";
import { PlanBoard, SeoWorkboard } from "@/components/studio/OfferSections";
import { useTranslation } from "@/contexts/LanguageContext";
import { getOfferCopy } from "@/lib/offers";

export function PricingContent() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <>
      <PlanBoard />
      <SeoWorkboard />
      <CTA headline={copy.plansTitle} subheadline={copy.plansText} />
    </>
  );
}

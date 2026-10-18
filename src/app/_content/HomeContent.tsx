"use client";

import { CTA } from "@/components/CTA";
import { ClientMarquee } from "@/components/studio/ClientMarquee";
import { PlanBoard, SeoWorkboard, SkillGallery, StudioHero } from "@/components/studio/OfferSections";
import { useTranslation } from "@/contexts/LanguageContext";
import { getOfferCopy } from "@/lib/offers";

export function HomeContent() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <>
      <StudioHero />
      <ClientMarquee />
      <SkillGallery />
      <PlanBoard />
      <SeoWorkboard />
      <CTA headline={copy.heroTitle} subheadline={copy.plansText} />
    </>
  );
}

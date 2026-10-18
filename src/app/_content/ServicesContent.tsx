"use client";

import { CTA } from "@/components/CTA";
import { SeoWorkboard, SkillGallery } from "@/components/studio/OfferSections";
import { useTranslation } from "@/contexts/LanguageContext";
import { getOfferCopy } from "@/lib/offers";

export function ServicesContent() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <>
      <SkillGallery />
      <SeoWorkboard />
      <CTA headline={copy.skillsTitle} subheadline={copy.seoText} />
    </>
  );
}

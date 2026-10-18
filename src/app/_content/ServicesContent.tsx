"use client";

import { CTA } from "@/components/CTA";
import { MySlotHub } from "@/components/MySlotHub";
import { SeoWorkboard, SkillGallery } from "@/components/studio/OfferSections";
import { useTranslation } from "@/contexts/LanguageContext";
import { getOfferCopy } from "@/lib/offers";

export function ServicesContent() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <>
      <SkillGallery />
      <MySlotHub />
      <SeoWorkboard />
      <CTA headline={copy.skillsTitle} subheadline={copy.seoText} />
    </>
  );
}

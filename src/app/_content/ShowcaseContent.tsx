"use client";

import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ShowcasePageVisual } from "@/components/page-visuals";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { useTranslation } from "@/contexts/LanguageContext";

export function ShowcaseContent() {
  const { t } = useTranslation();
  const p = t.servicesShowcase.page;

  return (
    <>
      <PageHero
        eyebrow={
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            {t.servicesShowcase.eyebrow}
          </p>
        }
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        visual={<ShowcasePageVisual />}
      />

      <ServicesShowcase variant="full" showSampleProjects />

      <CTA headline={p.bottomCtaTitle} subheadline={p.bottomCtaSubtitle} />
    </>
  );
}

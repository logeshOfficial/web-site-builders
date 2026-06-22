"use client";

import { CTA } from "@/components/CTA";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { useTranslation } from "@/contexts/LanguageContext";

export function ShowcaseContent() {
  const { t } = useTranslation();
  const p = t.servicesShowcase.page;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            {t.servicesShowcase.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{p.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{p.heroSubtitle}</p>
        </div>
      </section>

      <ServicesShowcase variant="full" showSampleProjects />

      <CTA headline={p.bottomCtaTitle} subheadline={p.bottomCtaSubtitle} />
    </>
  );
}

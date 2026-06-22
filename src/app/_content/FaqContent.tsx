"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { FaqPageVisual } from "@/components/page-visuals";
import { useTranslation } from "@/contexts/LanguageContext";
import { getWhatsAppUrl } from "@/lib/site";

export function FaqContent() {
  const { t } = useTranslation();
  const p = t.faqPage;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        subtitle={p.intro}
        visual={<FaqPageVisual />}
        maxWidth="4xl"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-12">
            {p.categories.map((category) => (
              <div key={category.id}>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{category.title}</h2>
                <div className="mt-4">
                  <FaqAccordion items={category.items} idPrefix={category.id} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900">{p.stillHaveQuestions}</h2>
            <p className="mt-2 text-slate-600">{p.stillHaveQuestionsText}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
              >
                {t.common.bookFreeConsultation}
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-100"
              >
                {t.common.chatOnWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA headline={p.ctaHeadline} subheadline={p.ctaSubheadline} />
    </>
  );
}

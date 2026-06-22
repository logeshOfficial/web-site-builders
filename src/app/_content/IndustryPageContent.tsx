"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import { useTranslation } from "@/contexts/LanguageContext";
import type { IndustrySlug } from "@/lib/site";

export function IndustryPageContent({ slug }: { slug: IndustrySlug }) {
  const { t } = useTranslation();
  const page = t.industryContent[slug];
  const labels = t.industryPage;

  if (!page) return null;

  const ctaHeadline =
    slug === "dentists"
      ? labels.ctaHeadlines.dentists
      : slug === "plumbers"
        ? labels.ctaHeadlines.plumbers
        : labels.ctaHeadlines.salons;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link href="/" className="text-sm text-teal-400 hover:text-teal-300">
            {t.common.backToHome}
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{page.headline}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{page.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{labels.soundFamiliar}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.painPoints.map((point) => (
              <li key={point} className="flex gap-3 rounded-xl border border-red-100 bg-red-50 p-5 text-slate-700">
                <span className="text-red-500">✕</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{labels.howWeHelp}</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {page.solutions.map((solution) => (
              <div key={solution.title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-teal-700">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{labels.whatsIncluded}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-slate-700">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{labels.faqTitle}</h2>
          <dl className="mt-8 space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6">
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTA headline={ctaHeadline} subheadline={labels.ctaSubheadline} />
    </>
  );
}

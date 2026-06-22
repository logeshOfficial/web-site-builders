"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import { AllBusinessTypes } from "@/components/AllBusinessTypes";
import { PageHero } from "@/components/PageHero";
import { IndustriesPageVisual } from "@/components/page-visuals";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { useTranslation } from "@/contexts/LanguageContext";

export function IndustriesContent() {
  const { t } = useTranslation();
  const p = t.industriesPage;

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} visual={<IndustriesPageVisual />}>
        <Link
          href="/showcase"
          className="mt-6 inline-flex text-sm font-semibold text-teal-400 hover:text-teal-300"
        >
          {p.showcaseLink}
        </Link>
      </PageHero>

      <ServicesShowcase variant="full" showSampleProjects />

      <AllBusinessTypes />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.detailedTitle}</h2>
          <p className="mt-2 text-slate-600">{p.detailedSubtitle}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.industries.list.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-teal-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-teal-700">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{industry.shortDescription}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-teal-600">
                  {t.common.viewDetails}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

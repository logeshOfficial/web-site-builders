"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  CustomerJourneyAnimation,
  GoogleSearchAnimation,
  SeoSimpleDiagram,
  WithoutVsWithSeo,
} from "@/components/seo-visuals/SeoAnimations";

export function SeoExplainer({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation();
  const s = t.seoExplainer;

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20" id="what-is-seo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">{s.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {s.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{s.intro}</p>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-slate-800">{s.shopAssistantTitle}</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">{s.shopAssistantText}</p>
          <div className="mt-8">
            <SeoSimpleDiagram />
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{s.phoneTitle}</h3>
            <p className="mt-3 text-slate-600">{s.phoneText}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {s.phoneBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <GoogleSearchAnimation />
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-slate-900">{s.journeyTitle}</h3>
          <p className="mt-2 text-center text-sm text-slate-600">{s.journeySubtitle}</p>
          <div className="mt-8">
            <CustomerJourneyAnimation />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-slate-900">{s.differenceTitle}</h3>
          <div className="mt-8">
            <WithoutVsWithSeo />
          </div>
        </div>

        {!compact && (
          <div className="mt-12 text-center">
            <Link
              href="/what-is-seo"
              className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal-700"
            >
              {t.common.readFullSeoGuide}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { CTA } from "@/components/CTA";
import { CompanySpecs } from "@/components/CompanySpecs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustSection } from "@/components/TrustSection";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

export function AboutContent() {
  const { t } = useTranslation();
  const p = t.aboutPage;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {interpolate(p.title, { brandName: siteConfig.name })}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{p.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.whoWeAre}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {interpolate(p.p1, { brandName: siteConfig.name, shortName: siteConfig.shortName })}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{p.p2}</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{p.p3}</p>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">{p.marketingTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{p.marketingP}</p>
        </div>
      </section>

      <TrustSection sections={["badges", "whyTrust"]} />
      <CompanySpecs />
      <ProcessSteps />
      <CTA headline={p.ctaHeadline} subheadline={p.ctaSubheadline} />
    </>
  );
}

"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import {
  DomainBrowserAnimation,
  DomainHostingDiagram,
  HostingServerAnimation,
  WithoutVsWithDomainHosting,
} from "@/components/domain-hosting-visuals/DomainHostingAnimations";

export function DomainHostingExplainer({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation();
  const s = t.domainHostingExplainer;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20" id="domain-hosting">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">{s.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{s.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{s.intro}</p>
        </div>

        <div className="mt-12">
          <DomainHostingDiagram />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{s.domainTitle}</h3>
            <p className="mt-3 text-slate-600">{s.domainText}</p>
            <p className="mt-4 rounded-xl bg-teal-50 p-4 text-sm text-teal-800">{s.domainAnalogy}</p>
          </div>
          <DomainBrowserAnimation />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <HostingServerAnimation />
          <div>
            <h3 className="text-xl font-bold text-slate-900">{s.hostingTitle}</h3>
            <p className="mt-3 text-slate-600">{s.hostingText}</p>
            <p className="mt-4 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">{s.hostingAnalogy}</p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
          <h3 className="text-lg font-bold text-slate-900">{s.togetherTitle}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{s.togetherText}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {s.costSummaryItems.map((item) => (
              <div key={item.label} className="rounded-xl bg-white px-5 py-3 shadow-sm">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="font-bold text-teal-700">{item.cost}</p>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
          <div className="mt-16">
            <h3 className="text-center text-xl font-bold text-slate-900">{s.comparisonTitle}</h3>
            <div className="mt-8">
              <WithoutVsWithDomainHosting />
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/what-is-domain-hosting"
            className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal-700"
          >
            {t.common.readDomainHostingGuide}
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export function MarketingSection() {
  const { t } = useTranslation();
  const m = t.home.marketingSection;

  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">{m.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{m.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{m.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {m.points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

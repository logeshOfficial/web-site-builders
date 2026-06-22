"use client";

import { useTranslation } from "@/contexts/LanguageContext";

type MarketingSectionProps = {
  compact?: boolean;
};

export function MarketingSection({ compact = false }: MarketingSectionProps) {
  const { t } = useTranslation();
  const m = t.home.marketingSection;

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">{m.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 break-words sm:text-3xl md:text-4xl">{m.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 break-words sm:text-lg">{m.description}</p>
        </div>

        {!compact && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {m.points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <h3 className="font-semibold text-slate-900 break-words">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 break-words">{point.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

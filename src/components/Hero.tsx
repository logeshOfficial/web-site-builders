"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export function Hero({
  headline,
  subheadline,
  badge,
  primaryCta,
  secondaryCta,
}: {
  headline: string;
  subheadline: string;
  badge?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const { t } = useTranslation();
  const resolvedBadge = badge ?? t.hero.defaultBadge;
  const resolvedPrimary = primaryCta ?? { label: t.common.getFreeQuote, href: "/contact" };
  const resolvedSecondary = secondaryCta ?? { label: t.common.viewPricing, href: "/pricing" };

  const stats = [
    { value: t.hero.stats.all, label: t.hero.stats.businessTypes },
    { value: "30–40%", label: t.hero.stats.belowMarket },
    { value: "2–4 wk", label: t.hero.stats.fastDelivery },
    { value: "100%", label: t.hero.stats.mobileFirst },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-200">
            {resolvedBadge}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">{subheadline}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={resolvedPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-teal-400"
            >
              {resolvedPrimary.label}
            </Link>
            <Link
              href={resolvedSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-8 py-3.5 text-base font-semibold text-white transition hover:border-teal-400 hover:text-teal-200"
            >
              {resolvedSecondary.label}
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
              <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { HeroScopeVisual } from "@/components/HeroScopeVisual";
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
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-3xl lg:max-w-none">
            <p className="mb-4 inline-flex max-w-full items-center rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-200 break-words sm:text-sm">
              {resolvedBadge}
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight break-words sm:text-4xl md:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 break-words sm:text-lg md:text-xl">{subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href={resolvedPrimary.href}
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-teal-500 px-8 py-3 text-base font-semibold whitespace-nowrap text-white transition hover:bg-teal-400 sm:w-auto sm:py-3.5"
              >
                {resolvedPrimary.label}
              </Link>
              <Link
                href={resolvedSecondary.href}
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-slate-500 px-8 py-3 text-base font-semibold whitespace-nowrap text-white transition hover:border-teal-400 hover:text-teal-200 sm:w-auto sm:py-3.5"
              >
                {resolvedSecondary.label}
              </Link>
            </div>
          </div>

          <div className="mt-12 hidden sm:block lg:mt-0">
            <HeroScopeVisual />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-3 sm:p-4">
              <p className="text-xl font-bold text-teal-400 sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400 break-words sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

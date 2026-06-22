"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { packagePrices } from "@/lib/site";

type PricingCardsProps = {
  showAllLink?: boolean;
  compact?: boolean;
};

export function PricingCards({ showAllLink = false, compact = false }: PricingCardsProps) {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 break-words sm:text-3xl md:text-4xl">{t.packages.title}</h2>
          <p className="mt-4 text-base text-slate-600 break-words sm:text-lg">{t.packages.description}</p>
          {!compact && (
            <p className="mt-3 rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium text-teal-800 break-words">
              {t.packages.gymNote}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-3">
          {t.packages.items.map((pkg, i) => {
            const meta = packagePrices[i];
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  meta.highlighted
                    ? "border-teal-500 bg-teal-50 shadow-xl shadow-teal-500/10 ring-2 ring-teal-500"
                    : "border-slate-200 bg-white"
                }`}
              >
                {meta.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                    {t.common.mostPopular}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{pkg.name}</p>
                  <p className="mt-1 text-lg font-medium text-slate-900">{pkg.subtitle}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">{meta.price}</span>
                    <span className="text-sm text-slate-500">{t.common.oneTime}</span>
                  </div>
                  {"priceNote" in pkg && pkg.priceNote && (
                    <p className="mt-2 text-xs font-medium text-teal-700">{pkg.priceNote}</p>
                  )}
                  {!compact && (
                    <p className="mt-3 text-sm text-slate-600 break-words">{pkg.description}</p>
                  )}
                </div>

                {!compact && (
                  <ul className="mt-6 flex-1 space-y-3 sm:mt-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/contact"
                  className={`mt-6 flex min-h-[44px] items-center justify-center rounded-full py-3 text-center text-sm font-semibold whitespace-nowrap transition sm:mt-8 ${
                    meta.highlighted
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-700"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {showAllLink && (
          <p className="mt-8 text-center">
            <Link href="/pricing" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              {t.packages.seeAddons}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

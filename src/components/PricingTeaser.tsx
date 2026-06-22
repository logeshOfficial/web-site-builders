"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { packagePrices } from "@/lib/site";

export function PricingTeaser() {
  const { t } = useTranslation();
  const p = t.home.pricingTeaser;

  return (
    <section className="bg-teal-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{p.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{p.title}</h2>
          <p className="mt-3 text-slate-600">{p.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.packages.items.map((pkg, i) => {
            const meta = packagePrices[i];
            return (
              <div
                key={pkg.name}
                className={`rounded-xl border bg-white p-5 text-center ${
                  meta.highlighted ? "border-teal-500 ring-2 ring-teal-500/20" : "border-slate-200"
                }`}
              >
                {meta.highlighted && (
                  <span className="mb-2 inline-block rounded-full bg-teal-600 px-3 py-0.5 text-xs font-semibold text-white">
                    {t.common.mostPopular}
                  </span>
                )}
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{pkg.name}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{meta.price}</p>
                <p className="mt-1 text-xs text-slate-500">{t.common.oneTime}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <Link
            href="/pricing"
            className="inline-flex rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold text-white hover:bg-teal-700"
          >
            {p.ctaLink}
          </Link>
          <Link
            href="/what-is-domain-hosting"
            className="text-sm text-slate-500 hover:text-teal-700"
          >
            {p.domainNote}
          </Link>
        </div>
      </div>
    </section>
  );
}

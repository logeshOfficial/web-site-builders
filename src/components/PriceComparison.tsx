"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

export function PriceComparison() {
  const { t } = useTranslation();

  return (
    <section className="bg-teal-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{t.priceComparison.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.priceComparison.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.priceComparison.valueProposition}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-4 font-semibold text-slate-900 sm:px-6">{t.priceComparison.service}</th>
                <th className="hidden px-4 py-4 font-semibold text-slate-500 sm:table-cell sm:px-6">
                  {t.priceComparison.typicalAgency}
                </th>
                <th className="px-4 py-4 font-semibold text-teal-700 sm:px-6">{siteConfig.name}</th>
              </tr>
            </thead>
            <tbody>
              {t.marketComparison.map((row) => (
                <tr key={row.item} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-slate-800 sm:px-6">{row.item}</td>
                  <td className="hidden px-4 py-4 text-slate-400 line-through sm:table-cell sm:px-6">
                    {row.agency}
                  </td>
                  <td className="px-4 py-4 font-bold text-teal-700 sm:px-6">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">{t.priceComparison.howWeKeepLow}</p>

        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal-700"
          >
            {t.common.seeOurPackages}
          </Link>
        </div>
      </div>
    </section>
  );
}

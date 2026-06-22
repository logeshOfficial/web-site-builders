"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export function PricingTransparencyTable() {
  const { t } = useTranslation();
  const p = t.pricingTransparency;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{p.title}</h2>
          <p className="mt-3 text-slate-600">{p.subtitle}</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-4 font-semibold text-slate-900 sm:px-6">{p.columns.item}</th>
                <th className="px-4 py-4 font-semibold text-slate-900 sm:px-6">{p.columns.typicalCost}</th>
                <th className="px-4 py-4 font-semibold text-slate-900 sm:px-6">{p.columns.whoPays}</th>
                <th className="px-4 py-4 font-semibold text-teal-700 sm:px-6">{p.columns.included}</th>
              </tr>
            </thead>
            <tbody>
              {p.rows.map((row) => (
                <tr key={row.item} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-slate-800 sm:px-6">{row.item}</td>
                  <td className="px-4 py-4 text-slate-600 sm:px-6">{row.typicalCost}</td>
                  <td className="px-4 py-4 text-slate-600 sm:px-6">{row.whoPays}</td>
                  <td className="px-4 py-4 font-medium text-teal-700 sm:px-6">{row.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">{p.footnote}</p>
      </div>
    </section>
  );
}

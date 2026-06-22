"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import { ServiceCards } from "@/components/ServiceCards";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

export function ServicesContent() {
  const { t } = useTranslation();
  const p = t.servicesPage;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {interpolate(p.subtitle, { brandName: siteConfig.name })}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg leading-relaxed text-slate-600">{p.marketingNote}</p>
        </div>
      </section>

      <ServiceCards />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {t.services.items.map((service, i) => (
              <div key={service.title} className="flex gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-lg font-bold text-teal-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900">{p.addOnsTitle}</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900">{p.addOnColumn}</th>
                  <th className="px-6 py-4 font-semibold text-slate-900">{p.priceColumn}</th>
                </tr>
              </thead>
              <tbody>
                {t.addOns.map((addon) => (
                  <tr key={addon.name} className="border-b border-slate-100 last:border-0">
                    <td className="px-6 py-4 text-slate-700">{addon.name}</td>
                    <td className="px-6 py-4 font-medium text-teal-700">{addon.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-slate-600">
            {interpolate(p.localConsultation, { city: siteConfig.location.city })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Link
            href="/pricing"
            className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-700"
          >
            {t.common.viewFullPricing}
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}

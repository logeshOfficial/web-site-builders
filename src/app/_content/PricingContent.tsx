"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import { DomainHostingExplainer } from "@/components/DomainHostingExplainer";
import { PricingCards } from "@/components/PricingCards";
import { PricingTransparencyTable } from "@/components/PricingTransparencyTable";
import { useTranslation } from "@/contexts/LanguageContext";

export function PricingContent() {
  const { t } = useTranslation();
  const p = t.pricingPage;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{p.subtitle}</p>
          <p className="mt-6">
            <Link
              href="/what-is-domain-hosting"
              className="text-sm font-semibold text-teal-400 hover:text-teal-300"
            >
              {p.domainHostingLink} →
            </Link>
          </p>
        </div>
      </section>

      <PricingCards />

      <PricingTransparencyTable />

      <DomainHostingExplainer compact />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.addOnsTitle}</h2>
          <p className="mt-2 text-slate-600">{p.addOnsSubtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.addOns.map((addon) => (
              <div key={addon.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{addon.name}</h3>
                <p className="mt-2 font-medium text-teal-700">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.paymentTitle}</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            {p.paymentItems.map((item) => (
              <li key={item.text} className="flex gap-3">
                <span className="font-bold text-teal-600">{item.label}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl bg-teal-50 p-6 text-sm text-slate-700">{p.webAppNote}</p>
        </div>
      </section>

      <CTA headline={p.ctaHeadline} subheadline={p.ctaSubheadline} />
    </>
  );
}

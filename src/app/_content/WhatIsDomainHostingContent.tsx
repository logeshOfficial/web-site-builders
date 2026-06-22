"use client";

import Link from "next/link";
import { CTA } from "@/components/CTA";
import {
  DomainBrowserAnimation,
  DomainHostingDiagram,
  HostingServerAnimation,
  WithoutVsWithDomainHosting,
} from "@/components/domain-hosting-visuals/DomainHostingAnimations";
import { PricingTransparencyTable } from "@/components/PricingTransparencyTable";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

export function WhatIsDomainHostingContent() {
  const { t } = useTranslation();
  const p = t.domainHostingPage;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-medium text-teal-400">{p.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{p.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">{p.oneSentenceTitle}</h2>
            <p className="mt-4 text-xl leading-relaxed text-slate-700">{p.oneSentence}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">{p.visualDomainTitle}</h2>
          <div className="mt-10">
            <DomainHostingDiagram />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{t.domainHostingExplainer.domainTitle}</h2>
              <p className="mt-4 text-slate-600">{t.domainHostingExplainer.domainText}</p>
            </div>
            <DomainBrowserAnimation />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">{p.visualHostingTitle}</h2>
          <div className="mt-10 flex justify-center">
            <HostingServerAnimation />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            {t.domainHostingExplainer.comparisonTitle}
          </h2>
          <div className="mt-10">
            <WithoutVsWithDomainHosting />
          </div>
        </div>
      </section>

      <PricingTransparencyTable />

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold">{p.packageNoteTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {p.packageNoteItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                <h3 className="text-lg font-semibold text-teal-400">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.mythsTitle}</h2>
          <div className="mt-8 space-y-6">
            {p.myths.map((item) => (
              <div key={item.myth} className="rounded-xl border border-slate-200 p-6">
                <p className="font-semibold text-red-600">
                  ✕ {t.common.myth} {item.myth}
                </p>
                <p className="mt-2 text-slate-700">
                  <span className="font-semibold text-teal-700">✓ {t.common.truth}</span> {item.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">{p.readyTitle}</h2>
          <p className="mt-4 text-lg text-slate-600">
            {interpolate(p.readyText, { brandName: siteConfig.name })}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-teal-600 px-8 py-3.5 font-semibold text-white hover:bg-teal-700"
            >
              {t.common.getFreeQuoteShort}
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-teal-600 px-8 py-3.5 font-semibold text-teal-700 hover:bg-teal-100"
            >
              {t.common.seePricing}
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

type ServicesShowcaseProps = {
  variant?: "compact" | "full";
  showSampleProjects?: boolean;
};

function VerticalCard({
  emoji,
  title,
  valueProp,
  features,
  getQuoteLabel,
}: {
  emoji: string;
  title: string;
  valueProp: string;
  features: readonly string[];
  getQuoteLabel: string;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5">
      <div className="flex items-start gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl transition group-hover:bg-teal-100"
          aria-hidden="true"
        >
          {emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-teal-800">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{valueProp}</p>
        </div>
      </div>

      <ul className="mt-4 flex-1 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
      >
        {getQuoteLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

function SampleProjectsSection() {
  const { t } = useTranslation();
  const s = t.servicesShowcase.sampleProjects;

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{s.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{s.title}</h2>
          <p className="mt-3 text-slate-600">{s.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {s.items.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
                {s.sampleBadge}
              </span>
              <span className="text-3xl" aria-hidden="true">
                {project.emoji}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                {project.includes.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    · {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">{s.disclaimer}</p>
      </div>
    </section>
  );
}

export function ServicesShowcase({ variant = "full", showSampleProjects = false }: ServicesShowcaseProps) {
  const { t } = useTranslation();
  const sc = t.servicesShowcase;
  const isCompact = variant === "compact";

  return (
    <>
      <section className={isCompact ? "bg-slate-50 py-20" : "py-16"}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{sc.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{sc.title}</h2>
            <p className="mt-4 text-lg text-slate-600">{sc.subtitle}</p>
            <p className="mt-3 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-teal-50 px-4 py-2 text-xs font-medium text-teal-800">
              {sc.trustLine}
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {sc.categories.map((category) => (
              <div key={category.id}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <h3 className="shrink-0 text-sm font-bold uppercase tracking-wider text-slate-500">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.verticals.map((vertical) => (
                    <VerticalCard
                      key={vertical.title}
                      emoji={vertical.emoji}
                      title={vertical.title}
                      valueProp={vertical.valueProp}
                      features={vertical.features}
                      getQuoteLabel={sc.getQuote}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {isCompact && (
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500">{sc.compact.footerText}</p>
              <Link
                href="/showcase"
                className="mt-3 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                {sc.compact.ctaLink}
              </Link>
            </div>
          )}
        </div>
      </section>

      {showSampleProjects && <SampleProjectsSection />}
    </>
  );
}

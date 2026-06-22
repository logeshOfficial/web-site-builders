"use client";

import Link from "next/link";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig, trustBadgeIcons } from "@/lib/site";

const badgeIcons: Record<string, React.ReactNode> = {
  location: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  pricing: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 4h4m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  secure: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

function Stars({ count }: { count: number }) {
  const { t } = useTranslation();
  return (
    <span
      className="flex gap-0.5 text-amber-400"
      aria-label={interpolate(t.trustSection.starsLabel, { count })}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

type TrustPart = "badges" | "whyTrust" | "testimonials" | "cta";

export function TrustSection({
  sections = ["badges", "whyTrust", "cta"],
}: {
  sections?: TrustPart[];
}) {
  const { t } = useTranslation();
  const show = (part: TrustPart) => sections.includes(part);

  return (
    <>
      {show("badges") && (
        <section className="border-y border-slate-200 bg-white py-5 sm:py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:grid-cols-4">
              {t.trustBadges.map((badge, i) => (
                <div key={badge.label} className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    {badgeIcons[trustBadgeIcons[i]]}
                  </span>
                  <span className="min-w-0 text-sm font-medium text-slate-700 break-words">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {show("whyTrust") && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                {t.whyTrustUs.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 break-words sm:text-3xl md:text-4xl">
                {t.whyTrustUs.title}
              </h2>
              <p className="mt-4 text-base text-slate-600 break-words sm:text-lg">
                {interpolate(t.whyTrustUs.description, {
                  brandName: siteConfig.name,
                  shortName: siteConfig.shortName,
                })}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {t.whyTrustUs.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <h3 className="font-semibold text-slate-900 break-words">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 break-words">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {show("testimonials") && (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {t.testimonials.title}
              </h2>
              <p className="mt-4 text-slate-600">{t.testimonials.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {t.testimonials.items.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <Stars count={5} />
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-4 border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-teal-700">{item.business}</p>
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-slate-500">{t.testimonials.disclaimer}</p>
          </div>
        </section>
      )}

      {show("cta") && (
        <section className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-lg font-medium text-slate-800 break-words">{t.trustSection.ctaText}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold whitespace-nowrap text-white hover:bg-teal-700 sm:w-auto"
            >
              {t.trustSection.ctaButton}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

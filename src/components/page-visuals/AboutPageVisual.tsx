"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { ICON_GOLD_CLASS, ICON_RING_CLASS, VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

export function AboutPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.about;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="relative w-full px-2">
        <VisualCard className="mx-auto max-w-[240px]">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-14 items-center justify-center rounded-md border border-brand-gold/30 bg-teal-500/10"
                  style={{ marginLeft: i * 6 }}
                >
                  <div className="h-2 w-6 rounded-sm bg-brand-gold/50" />
                </div>
              ))}
            </div>
            <svg className={`h-10 w-10 shrink-0 ${ICON_GOLD_CLASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
          </div>
          <p className="mt-3 text-center text-xs font-medium text-slate-300">{v.trustLabel}</p>
        </VisualCard>

        <div className="hero-float-badge absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand-gold/35 bg-slate-800/95 px-3 py-1.5 shadow-lg">
          <span className={`h-6 w-6 ${ICON_RING_CLASS}`}>
            <svg className="h-3.5 w-3.5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <span className="text-xs font-medium text-white">{v.chennaiLabel}</span>
        </div>
      </div>
    </PageHeroVisual>
  );
}

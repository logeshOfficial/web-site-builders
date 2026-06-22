"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

export function WhatIsDomainHostingPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.whatIsDomainHosting;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="w-full max-w-[280px] space-y-3">
        <VisualCard className="p-3">
          <div className="flex items-center gap-1.5 rounded-md bg-slate-900/70 px-2 py-1.5">
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
            </div>
            <span className="truncate text-[10px] text-teal-300">{v.domainLabel}</span>
          </div>
          <p className="mt-2 text-[10px] text-slate-400">{v.domainHint}</p>
        </VisualCard>

        <div className="flex items-center justify-center gap-3">
          <VisualCard className="flex flex-1 flex-col items-center p-3">
            <div className="space-y-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex h-3 w-12 items-center gap-1 rounded bg-slate-700/80 px-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-400/70" />
                  <div className="h-1 flex-1 rounded bg-slate-600" />
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] font-medium text-slate-300">{v.hostingLabel}</p>
          </VisualCard>

          <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>

          <VisualCard className="flex flex-col items-center p-3">
            <svg className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <p className="mt-1 text-[10px] font-medium text-slate-300">{v.cloudLabel}</p>
          </VisualCard>
        </div>
      </div>
    </PageHeroVisual>
  );
}

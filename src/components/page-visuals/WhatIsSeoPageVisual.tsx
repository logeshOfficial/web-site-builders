"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { ICON_GOLD_CLASS, VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

export function WhatIsSeoPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.whatIsSeo;

  return (
    <PageHeroVisual caption={v.caption}>
      <VisualCard className="w-full max-w-[280px]">
        <div className="flex items-center gap-2 rounded-lg border border-slate-600/60 bg-slate-900/60 px-3 py-2">
          <svg className={`h-4 w-4 shrink-0 ${ICON_GOLD_CLASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="truncate text-xs text-slate-300">{v.searchQuery}</span>
        </div>

        <div className="mt-3 space-y-2">
          {[2, 1, 0].map((rank) => (
            <div
              key={rank}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${rank === 0 ? "border border-brand-scarlet/40 bg-brand-scarlet/10 ring-1 ring-brand-gold/25" : "bg-slate-900/40"}`}
            >
              <span className={`text-xs font-bold ${rank === 0 ? "text-brand-scarlet" : "text-slate-500"}`}>
                {rank + 1}
              </span>
              <div className="flex-1 space-y-1">
                <div className={`h-1.5 rounded ${rank === 0 ? "w-full bg-brand-gold/60" : "w-4/5 bg-slate-600"}`} />
                <div className="h-1 w-3/5 rounded bg-slate-700" />
              </div>
              {rank === 0 ? (
                <svg className="h-4 w-4 shrink-0 text-brand-scarlet" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-[10px] font-medium text-brand-gold">{v.rankLabel}</p>
      </VisualCard>
    </PageHeroVisual>
  );
}

"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { ICON_GOLD_CLASS, ICON_RING_CLASS, VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

export function FaqPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.faq;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="relative w-full max-w-[260px]">
        <VisualCard className="hero-float-device">
          <div className="flex items-start gap-2">
            <span className={`h-8 w-8 shrink-0 text-sm font-bold text-brand-gold ${ICON_RING_CLASS}`}>
              ?
            </span>
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-full rounded bg-slate-600" />
              <div className="h-2 w-4/5 rounded bg-slate-700" />
            </div>
          </div>
          <p className="mt-2 text-[10px] text-slate-400">{v.questionsLabel}</p>
        </VisualCard>

        <VisualCard className="absolute -right-1 top-[38%] w-[130px] border-brand-gold/30 hero-float-badge hero-float-badge-2 p-3">
          <div className="flex items-center gap-2">
            <svg className={`h-5 w-5 shrink-0 ${ICON_GOLD_CLASS}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="text-[10px] font-medium text-slate-200">{v.answersLabel}</span>
          </div>
        </VisualCard>

        <div className="absolute -left-2 bottom-[10%] flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/35 bg-slate-800/90 text-lg font-bold text-brand-gold hero-float-badge hero-float-badge-4">
          ?
        </div>
      </div>
    </PageHeroVisual>
  );
}

"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

const TIER_KEYS = ["starter", "growth", "premium"] as const;
const TIER_HIGHLIGHT: Record<(typeof TIER_KEYS)[number], string> = {
  starter: "border-slate-600/60",
  growth: "border-teal-400/50 ring-1 ring-teal-400/30",
  premium: "border-slate-600/60",
};

export function PricingPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.pricing;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="w-full max-w-[280px] space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-teal-400">₹</span>
          <div className="space-y-1.5">
            {v.checklist.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                <svg className="h-3.5 w-3.5 shrink-0 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {TIER_KEYS.map((key) => (
            <VisualCard key={key} className={`p-2.5 text-center ${TIER_HIGHLIGHT[key]}`}>
              <svg className="mx-auto h-4 w-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <p className="mt-1.5 text-[9px] font-semibold text-white sm:text-[10px]">{v[key]}</p>
              <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-slate-600" />
            </VisualCard>
          ))}
        </div>
      </div>
    </PageHeroVisual>
  );
}

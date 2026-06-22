"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { IndustryIcon, type IndustryKey, VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

const INDUSTRY_KEYS: IndustryKey[] = ["gym", "salon", "clinic", "ecommerce", "restaurant", "shop"];

export function ShowcasePageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.showcase;
  const industries = t.hero.scopeVisual.industries;

  return (
    <PageHeroVisual caption={v.caption}>
      <VisualCard className="w-full max-w-[280px]">
        <div className="grid grid-cols-3 gap-2">
          {INDUSTRY_KEYS.map((key) => (
            <div
              key={key}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-600/40 bg-slate-900/50 p-2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded bg-gradient-to-br from-teal-500/20 to-slate-700/50">
                <div className="flex h-full items-center justify-center">
                  <IndustryIcon type={key} className="h-4 w-4 text-teal-400" />
                </div>
              </div>
              <span className="truncate text-[8px] font-medium text-slate-300 sm:text-[9px]">
                {industries[key]}
              </span>
            </div>
          ))}
        </div>
      </VisualCard>
    </PageHeroVisual>
  );
}

export function IndustriesPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.industries;
  const industries = t.hero.scopeVisual.industries;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="grid w-full max-w-[240px] grid-cols-3 gap-2">
        {INDUSTRY_KEYS.map((key) => (
          <div
            key={key}
            className="flex flex-col items-center gap-1 rounded-xl border border-slate-600/50 bg-slate-800/80 px-2 py-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15">
              <IndustryIcon type={key} className="h-4 w-4 text-teal-400" />
            </span>
            <span className="truncate text-[9px] font-medium text-slate-200">{industries[key]}</span>
          </div>
        ))}
      </div>
    </PageHeroVisual>
  );
}

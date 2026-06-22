"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { ICON_GOLD_CLASS, ICON_RING_CLASS, VisualCard } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

const SERVICE_KEYS = ["seo", "local", "webApp", "maintenance"] as const;

function ServiceIcon({ type }: { type: (typeof SERVICE_KEYS)[number] }) {
  const cls = ICON_GOLD_CLASS;
  switch (type) {
    case "seo":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case "local":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "webApp":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "maintenance":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
  }
}

export function ServicesPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.services;

  return (
    <PageHeroVisual caption={v.caption}>
      <VisualCard className="w-full max-w-[260px]">
        <div className="grid grid-cols-2 gap-3">
          {SERVICE_KEYS.map((key) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-600/50 bg-slate-900/50 p-3 text-center"
            >
              <span className={`h-10 w-10 ${ICON_RING_CLASS}`}>
                <ServiceIcon type={key} />
              </span>
              <span className="text-[10px] font-medium leading-tight text-slate-200 sm:text-xs">{v[key]}</span>
            </div>
          ))}
        </div>
      </VisualCard>
    </PageHeroVisual>
  );
}

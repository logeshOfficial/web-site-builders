"use client";

import { PageHeroVisual } from "@/components/page-visuals/PageHeroVisual";
import { ICON_RING_CLASS } from "@/components/page-visuals/shared";
import { useTranslation } from "@/contexts/LanguageContext";

const CHANNELS = [
  {
    key: "phone" as const,
    position: "left-[8%] top-[12%] hero-float-badge hero-float-badge-1",
    icon: (
      <span className={`h-8 w-8 ${ICON_RING_CLASS}`}>
        <svg className="h-4 w-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
        </svg>
      </span>
    ),
  },
  {
    key: "whatsapp" as const,
    position: "right-[6%] top-[28%] hero-float-badge hero-float-badge-3",
    icon: (
      <span className={`h-8 w-8 ${ICON_RING_CLASS}`}>
        <svg className="h-4 w-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
        </svg>
      </span>
    ),
  },
  {
    key: "email" as const,
    position: "left-1/2 bottom-[8%] -translate-x-1/2 hero-float-badge hero-float-badge-5",
    icon: (
      <span className={`h-8 w-8 ${ICON_RING_CLASS}`}>
        <svg className="h-4 w-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        </svg>
      </span>
    ),
  },
];

export function ContactPageVisual() {
  const { t } = useTranslation();
  const v = t.pageVisuals.contact;

  return (
    <PageHeroVisual caption={v.caption}>
      <div className="relative h-[220px] w-full sm:h-[240px]">
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-gold/25 bg-teal-500/10 ring-2 ring-brand-gold/20">
          <div className="h-10 w-10 rounded-full bg-teal-500/20" />
        </div>

        {CHANNELS.map(({ key, position, icon }) => (
          <div
            key={key}
            className={`absolute z-10 flex flex-col items-center gap-1 rounded-xl border border-brand-gold/30 bg-slate-800/90 px-3 py-2.5 shadow-lg ${position}`}
          >
            {icon}
            <span className="text-[10px] font-medium text-slate-200 sm:text-xs">{v[key]}</span>
          </div>
        ))}
      </div>
    </PageHeroVisual>
  );
}

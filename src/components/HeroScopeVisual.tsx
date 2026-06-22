"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { IndustryIcon, type IndustryKey } from "@/components/page-visuals/shared";

const INDUSTRY_KEYS: IndustryKey[] = ["gym", "salon", "clinic", "ecommerce", "restaurant", "shop"];

function MiniWebsitePreview({ title, tagline }: { title: string; tagline: string }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-2 py-2 sm:px-3 sm:py-2.5">
        <div className="flex items-center justify-between">
          <div className="h-1 w-8 rounded-full bg-white/40" />
          <div className="flex gap-1">
            <div className="h-1 w-3 rounded-full bg-white/30" />
            <div className="h-1 w-3 rounded-full bg-white/30" />
            <div className="h-1 w-3 rounded-full bg-white/30" />
          </div>
        </div>
        <p className="mt-1.5 truncate text-[8px] font-bold text-white sm:text-[9px]">{title}</p>
        <p className="truncate text-[6px] text-teal-100 sm:text-[7px]">{tagline}</p>
      </div>
      <div className="flex-1 space-y-1.5 p-2">
        <div className="grid grid-cols-3 gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded bg-slate-100">
              <div className={`h-full w-full rounded ${i === 0 ? "bg-teal-100" : "bg-slate-200/80"}`} />
            </div>
          ))}
        </div>
        <div className="space-y-0.5">
          <div className="h-1 w-full rounded bg-slate-200" />
          <div className="h-1 w-4/5 rounded bg-slate-100" />
        </div>
        <div className="mt-1 inline-block rounded-full bg-teal-500 px-2 py-0.5 text-[6px] font-semibold text-white sm:text-[7px]">
          Book Now
        </div>
      </div>
    </div>
  );
}

function LaptopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 w-full max-w-[220px] sm:max-w-[260px]">
      <div className="overflow-hidden rounded-lg border-2 border-slate-600/80 bg-slate-800 shadow-2xl shadow-teal-900/30">
        <div className="flex items-center gap-1.5 border-b border-slate-600/80 px-2 py-1.5">
          <div className="flex shrink-0 gap-1" aria-hidden="true">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400/90" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400/90" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1 rounded bg-slate-900/60 px-1.5 py-0.5">
            <svg className="h-2 w-2 shrink-0 text-teal-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate text-[7px] text-slate-400 sm:text-[8px]">yourbusiness.in</span>
          </div>
        </div>
        <div className="aspect-[16/10]">{children}</div>
      </div>
      <div className="mx-auto mt-0.5 h-1 w-[95%] rounded-b-sm bg-gradient-to-b from-slate-500 to-slate-600" aria-hidden="true" />
      <div className="mx-auto h-0.5 w-[110%] rounded-full bg-slate-500/80" aria-hidden="true" />
    </div>
  );
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-20 flex aspect-[9/19] w-[88px] flex-col overflow-hidden rounded-[1.25rem] border-[2.5px] border-slate-600/80 bg-slate-900 shadow-xl shadow-teal-900/40 sm:w-[100px]">
      <div className="relative shrink-0 px-2 pb-0.5 pt-1.5">
        <div className="absolute left-1/2 top-0 h-3.5 w-10 -translate-x-1/2 rounded-b-xl bg-slate-900" aria-hidden="true" />
        <div className="relative z-10 flex items-center justify-between text-[6px] font-medium text-slate-500">
          <span>9:41</span>
          <div className="flex items-center gap-0.5">
            <div className="h-1.5 w-2 rounded-sm bg-slate-500" />
            <div className="h-1.5 w-3 rounded-sm border border-slate-500" />
          </div>
        </div>
      </div>
      <div className="mx-1 mb-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[0.85rem]">{children}</div>
      <div className="flex shrink-0 justify-center pb-1.5" aria-hidden="true">
        <div className="h-0.5 w-6 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}

const BADGE_POSITIONS: Record<IndustryKey, string> = {
  gym: "left-0 top-[8%] hero-float-badge hero-float-badge-1",
  salon: "right-0 top-[4%] hero-float-badge hero-float-badge-2",
  clinic: "left-[-4%] top-[42%] hero-float-badge hero-float-badge-3",
  ecommerce: "right-[-2%] top-[38%] hero-float-badge hero-float-badge-4",
  restaurant: "left-[8%] bottom-[6%] hero-float-badge hero-float-badge-5",
  shop: "right-[6%] bottom-[2%] hero-float-badge hero-float-badge-6",
};

export function HeroScopeVisual() {
  const { t } = useTranslation();
  const s = t.hero.scopeVisual;

  const preview = <MiniWebsitePreview title={s.mockSiteTitle} tagline={s.mockSiteTagline} />;

  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl bg-teal-500/5 blur-2xl" />

      <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[320px]">
        {INDUSTRY_KEYS.map((key) => (
          <div
            key={key}
            className={`absolute z-30 flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-slate-800/90 px-2.5 py-1.5 shadow-lg backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-2 ${BADGE_POSITIONS[key]}`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/15 sm:h-7 sm:w-7">
              <IndustryIcon type={key} className="h-4 w-4 text-teal-400" />
            </span>
            <span className="text-[10px] font-medium text-white sm:text-xs">{s.industries[key]}</span>
          </div>
        ))}

        <div className="relative flex items-end justify-center gap-3 sm:gap-4">
          <div className="hero-float-device mb-2 sm:mb-4">
            <PhoneMockup>{preview}</PhoneMockup>
          </div>
          <div className="hero-float-device hero-float-device-delay mb-0">
            <LaptopMockup>{preview}</LaptopMockup>
          </div>
        </div>
      </div>

      <p className="mt-2 text-center text-xs text-slate-400 sm:text-sm">{s.caption}</p>
    </div>
  );
}

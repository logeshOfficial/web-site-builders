"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { DesktopBrowserMockup } from "@/components/seo-visuals/DesktopBrowserMockup";
import { DualDeviceLayout } from "@/components/seo-visuals/DualDeviceLayout";

export function GoogleLogo({ className = "mx-auto h-4 w-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 20" aria-hidden="true">
      <text x="0" y="16" className="fill-[#4285F4] text-[14px] font-bold">
        G
      </text>
      <text x="14" y="16" className="fill-[#EA4335] text-[14px] font-bold">
        o
      </text>
      <text x="26" y="16" className="fill-[#FBBC05] text-[14px] font-bold">
        o
      </text>
      <text x="38" y="16" className="fill-[#4285F4] text-[14px] font-bold">
        g
      </text>
      <text x="50" y="16" className="fill-[#34A853] text-[14px] font-bold">
        l
      </text>
      <text x="58" y="16" className="fill-[#EA4335] text-[14px] font-bold">
        e
      </text>
    </svg>
  );
}

export function SearchIcon({ className = "h-3.5 w-3.5 shrink-0 text-slate-400" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export function PhoneMockup({
  children,
  ring = false,
  className = "",
}: {
  children: React.ReactNode;
  ring?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto flex aspect-[9/19] w-36 flex-col overflow-hidden rounded-[2rem] border-[3px] border-slate-700 bg-slate-900 shadow-2xl sm:w-40 ${
        ring ? "ring-4 ring-teal-300 ring-offset-2 ring-offset-white" : ""
      } ${className}`}
    >
      <div className="relative shrink-0 px-4 pb-1 pt-2">
        <div className="absolute left-1/2 top-0 h-5 w-[4.25rem] -translate-x-1/2 rounded-b-2xl bg-slate-900" aria-hidden="true" />
        <div className="relative z-10 flex items-center justify-between text-[8px] font-medium text-slate-400 sm:text-[9px]">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="h-2.5 w-2.5" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
              <rect x="0" y="8" width="2" height="4" rx="0.5" />
              <rect x="3.5" y="5" width="2" height="7" rx="0.5" />
              <rect x="7" y="2" width="2" height="10" rx="0.5" />
              <rect x="10.5" y="0" width="2" height="12" rx="0.5" />
            </svg>
            <svg className="h-2.5 w-4" viewBox="0 0 18 10" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="14" height="9" rx="1.5" stroke="currentColor" />
              <rect x="2" y="2" width="10" height="6" rx="0.5" fill="currentColor" />
              <rect x="15" y="3" width="2.5" height="4" rx="0.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-1.5 mb-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.25rem] bg-white">
        {children}
      </div>

      <div className="flex shrink-0 justify-center pb-2 pt-0.5" aria-hidden="true">
        <div className="h-1 w-8 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}

function GoogleSearchResults({
  yourBusiness,
  snippet,
  competitor,
  compact = false,
}: {
  yourBusiness: string;
  snippet: string;
  competitor: string;
  compact?: boolean;
}) {
  const pad = compact ? "p-2" : "p-2.5";
  const titleSize = compact ? "text-[10px] sm:text-xs" : "text-[11px] sm:text-sm";
  const metaSize = compact ? "text-[8px] sm:text-[10px]" : "text-[9px] sm:text-[11px]";

  return (
    <div className={`seo-results mt-3 flex-1 space-y-2 opacity-0 sm:mt-4 ${compact ? "" : "md:mt-5"}`}>
      <div className={`seo-result-highlight rounded-lg border-2 border-teal-400 bg-teal-50 ${pad}`}>
        <p className={`font-semibold text-teal-700 ${titleSize}`}>{yourBusiness}</p>
        <p className={`text-slate-500 ${metaSize}`}>websitebuilders.in · Chennai</p>
        <p className={`mt-1 leading-snug text-slate-600 ${metaSize}`}>{snippet}</p>
      </div>
      <div className={`rounded-lg bg-slate-50 ${pad} opacity-50`}>
        <p className={`text-slate-400 ${metaSize}`}>{competitor} 1</p>
        <div className="mt-1 h-1.5 w-3/4 rounded bg-slate-200" />
      </div>
      <div className={`rounded-lg bg-slate-50 ${pad} opacity-30`}>
        <p className={`text-slate-400 ${metaSize}`}>{competitor} 2</p>
        <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-200" />
      </div>
    </div>
  );
}

export function GoogleSearchAnimation() {
  const { t } = useTranslation();
  const s = t.seoAnimations.googleSearch;
  const labels = t.seoShowcase.phoneSearch;

  const mobileContent = (
    <div className="flex h-full flex-col px-3 py-3">
      <GoogleLogo className="mx-auto mb-4 h-4 w-14" />
      <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5">
        <SearchIcon />
        <span className="truncate text-[10px] text-slate-700 sm:text-xs">{s.query}</span>
      </div>
      <GoogleSearchResults
        yourBusiness={s.yourBusiness}
        snippet={s.snippet}
        competitor={s.competitor}
        compact
      />
    </div>
  );

  const desktopContent = (
    <div className="flex flex-col px-4 py-4 sm:px-5 sm:py-5">
      <GoogleLogo className="mx-auto mb-4 h-5 w-16 sm:mb-5" />
      <div className="mx-auto flex w-full max-w-[90%] items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
        <SearchIcon className="h-4 w-4" />
        <span className="truncate text-[11px] text-slate-700 sm:text-xs">{s.query}</span>
      </div>
      <GoogleSearchResults yourBusiness={s.yourBusiness} snippet={s.snippet} competitor={s.competitor} />
    </div>
  );

  return (
    <DualDeviceLayout
      mobileLabel={labels.mobile}
      desktopLabel={labels.desktop}
      mobile={<PhoneMockup>{mobileContent}</PhoneMockup>}
      desktop={<DesktopBrowserMockup>{desktopContent}</DesktopBrowserMockup>}
      footer={<p className="text-center text-xs text-slate-500">{s.caption}</p>}
    />
  );
}

export function CustomerJourneyAnimation() {
  const { t } = useTranslation();
  const steps = t.seoAnimations.journey.steps;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2 sm:gap-4">
          <div
            className="seo-journey-step flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4"
            style={{ animationDelay: `${0.2 + i * 0.8}s` }}
          >
            <span className="text-2xl sm:text-3xl">{["🔍", "👀", "📱", "📞"][i]}</span>
            <p className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{step.label}</p>
            <p className="text-[10px] text-slate-500 sm:text-xs">{step.sub}</p>
          </div>
          {i < steps.length - 1 && (
            <svg className="seo-journey-arrow hidden h-5 w-5 text-teal-500 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export function WithoutVsWithSeo() {
  const { t } = useTranslation();
  const s = t.seoAnimations.withoutVsWith;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-200 text-red-700">✕</span>
          <h3 className="font-bold text-red-900">{s.withoutTitle}</h3>
        </div>
        <ul className="mt-4 space-y-3 text-sm text-red-800">
          {s.withoutItems.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span>{["😔", "🐢", "📉", "💸"][i]}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg bg-red-100 p-3 text-center text-xs font-medium text-red-700">
          {s.withoutResult}
        </div>
      </div>

      <div className="rounded-2xl border-2 border-teal-300 bg-teal-50 p-6 ring-2 ring-teal-200">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-200 text-teal-800">✓</span>
          <h3 className="font-bold text-teal-900">{s.withTitle}</h3>
        </div>
        <ul className="mt-4 space-y-3 text-sm text-teal-900">
          {s.withItems.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span>{["🔝", "⚡", "📍", "📞"][i]}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg bg-teal-200 p-3 text-center text-xs font-medium text-teal-900">
          {s.withResult}
        </div>
      </div>
    </div>
  );
}

export function SeoSimpleDiagram() {
  const { t } = useTranslation();
  const d = t.seoAnimations.diagram;

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <div className="seo-pulse-box flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
          <span className="text-4xl">👤</span>
          <p className="mt-2 text-sm font-semibold">{d.customer}</p>
          <p className="text-xs text-slate-500">{d.customerQuery}</p>
        </div>

        <div className="flex flex-col items-center">
          <svg className="seo-flow-arrow h-8 w-8 rotate-90 text-teal-500 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <p className="mt-1 text-xs text-slate-500">{d.searches}</p>
        </div>

        <div className="seo-pulse-box flex flex-col items-center rounded-xl bg-white p-4 shadow-md" style={{ animationDelay: "0.5s" }}>
          <span className="text-4xl">🔍</span>
          <p className="mt-2 text-sm font-semibold">{d.google}</p>
          <p className="text-xs text-slate-500">{d.findsBest}</p>
        </div>

        <div className="flex flex-col items-center">
          <svg className="seo-flow-arrow h-8 w-8 rotate-90 text-teal-500 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <p className="mt-1 text-xs text-slate-500">{d.shows}</p>
        </div>

        <div className="seo-pulse-box flex flex-col items-center rounded-xl border-2 border-teal-400 bg-teal-50 p-4 shadow-md" style={{ animationDelay: "1s" }}>
          <span className="text-4xl">🌐</span>
          <p className="mt-2 text-sm font-semibold text-teal-800">{d.yourWebsite}</p>
          <p className="text-xs text-teal-600">{d.seoOptimized}</p>
        </div>

        <div className="flex flex-col items-center">
          <svg className="seo-flow-arrow h-8 w-8 rotate-90 text-teal-500 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <p className="mt-1 text-xs text-slate-500">{d.leadsTo}</p>
        </div>

        <div className="seo-pulse-box flex flex-col items-center rounded-xl bg-green-50 p-4 shadow-md ring-2 ring-green-300" style={{ animationDelay: "1.5s" }}>
          <span className="text-4xl">💰</span>
          <p className="mt-2 text-sm font-semibold text-green-800">{d.newCustomer}</p>
          <p className="text-xs text-green-600">{d.contact}</p>
        </div>
      </div>
    </div>
  );
}

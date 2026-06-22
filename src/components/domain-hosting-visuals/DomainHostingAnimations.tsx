"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export function DomainBrowserAnimation() {
  const { t } = useTranslation();
  const s = t.domainHostingAnimations.domainBrowser;

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5">
            <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-semibold text-slate-800">{s.addressBar}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-2xl">🏋️</div>
            <div>
              <p className="font-bold text-slate-900">FitZone Gym</p>
              <p className="text-xs text-slate-500">Chennai · Open 6am–10pm</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-4/5 rounded bg-slate-100" />
            <div className="h-2 w-3/5 rounded bg-slate-100" />
          </div>
          <div className="mt-4 inline-flex rounded-full bg-teal-600 px-4 py-2 text-xs font-semibold text-white">
            WhatsApp · Book trial
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">{s.caption}</p>
    </div>
  );
}

export function HostingServerAnimation() {
  const { t } = useTranslation();
  const s = t.domainHostingAnimations.hosting;

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-2xl border-2 border-teal-200 bg-gradient-to-b from-slate-800 to-slate-900 p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-teal-300">{s.serverLabel}</p>
          <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300">
            ● {s.alwaysOpen}
          </span>
        </div>
        <div className="mt-4 space-y-2">
          {s.files.map((file, i) => (
            <div
              key={file}
              className="flex items-center gap-3 rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="text-lg">{["📄", "🖼️", "📋"][i]}</span>
              <span className="text-sm text-slate-200">{file}</span>
              <span className="ml-auto text-xs text-green-400">Live</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <svg className="h-4 w-4 animate-pulse text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
          </svg>
          Vercel · Free tier
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">{s.caption}</p>
    </div>
  );
}

export function WithoutVsWithDomainHosting() {
  const { t } = useTranslation();
  const s = t.domainHostingAnimations.withoutVsWith;

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
              <span>{["📱", "🔍", "😕", "❓"][i]}</span>
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
              <span>{["🌐", "⏰", "📈", "🏆"][i]}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg bg-teal-100 p-3 text-center text-xs font-medium text-teal-800">
          {s.withResult}
        </div>
      </div>
    </div>
  );
}

export function DomainHostingDiagram() {
  const { t } = useTranslation();
  const d = t.domainHostingExplainer;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      <div className="flex flex-col items-center rounded-2xl border-2 border-teal-200 bg-white p-5 shadow-sm">
        <span className="text-3xl">🏪</span>
        <p className="mt-2 text-sm font-bold text-slate-900">{d.domainTitle.replace("?", "")}</p>
        <p className="mt-1 rounded-lg bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
          {d.domainExample}
        </p>
        <p className="mt-2 max-w-[140px] text-center text-[10px] text-slate-500">{d.domainAnalogy}</p>
      </div>

      <svg className="hidden h-6 w-6 text-teal-500 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>

      <div className="flex flex-col items-center rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 shadow-sm">
        <span className="text-3xl">🖥️</span>
        <p className="mt-2 text-sm font-bold text-slate-900">{d.hostingTitle.replace("?", "")}</p>
        <p className="mt-1 text-xs font-medium text-slate-600">24/7 online</p>
        <p className="mt-2 max-w-[140px] text-center text-[10px] text-slate-500">{d.hostingAnalogy}</p>
      </div>

      <svg className="hidden h-6 w-6 text-teal-500 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>

      <div className="flex flex-col items-center rounded-2xl border-2 border-teal-400 bg-teal-50 p-5 shadow-md ring-2 ring-teal-200">
        <span className="text-3xl">✅</span>
        <p className="mt-2 text-sm font-bold text-teal-900">Live website</p>
        <p className="mt-1 text-xs text-teal-700">Customers can visit anytime</p>
      </div>
    </div>
  );
}

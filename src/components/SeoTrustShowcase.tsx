"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site";

const SCENE_DURATION_MS = 3500;

const SCENE_IDS = ["search", "without", "with", "wedo", "trust", "cta"] as const;

const SCENE_ACCENTS: Record<(typeof SCENE_IDS)[number], string> = {
  search: "bg-slate-800",
  without: "bg-red-600",
  with: "bg-teal-600",
  wedo: "bg-teal-700",
  trust: "bg-slate-700",
  cta: "bg-teal-600",
};

function PhoneSearchScene() {
  const { t } = useTranslation();
  const query = t.seoAnimations.googleSearch.query;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-44 rounded-[1.5rem] border-4 border-slate-700 bg-slate-900 p-3 shadow-xl sm:w-52">
        <div className="rounded-xl bg-white p-3">
          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
            <span className="text-slate-400">🔍</span>
            <span className="text-xs text-slate-700">{query}</span>
          </div>
          <div className="mt-3 space-y-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-2 rounded bg-slate-100" style={{ width: `${90 - n * 15}%` }} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-slate-500">📱 {t.seoShowcase.phoneSearch.customerOnPhone}</p>
    </div>
  );
}

function WithoutSeoScene() {
  const { t } = useTranslation();
  const s = t.seoShowcase.withoutSeo;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="relative w-full max-w-xs rounded-2xl border-2 border-red-200 bg-red-50 p-6">
        <p className="text-center text-4xl">😔</p>
        <p className="mt-2 text-center text-sm font-semibold text-red-800">{s.yourShop}</p>
        <p className="text-center text-xs text-red-600">{s.notOnPage1}</p>
        <div className="mt-4 space-y-2">
          {s.competitorLines.map((line) => (
            <div key={line} className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-green-700 shadow-sm">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WithSeoScene() {
  const { t } = useTranslation();
  const s = t.seoShowcase.withSeo;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-44 rounded-[1.5rem] border-4 border-teal-600 bg-slate-900 p-3 shadow-xl ring-4 ring-teal-200 sm:w-52">
        <div className="rounded-xl bg-white p-3">
          <div className="showcase-glow rounded-lg border-2 border-teal-400 bg-teal-50 p-2">
            <p className="text-[10px] font-bold text-teal-800">★★★★★ {s.yourBusiness}</p>
            <p className="text-[9px] text-teal-600">{s.topOnGoogle}</p>
          </div>
          <div className="mt-2 space-y-1 opacity-40">
            <div className="h-2 rounded bg-slate-100" />
            <div className="h-2 w-3/4 rounded bg-slate-100" />
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-teal-700">📞 {s.customerCalls}</p>
    </div>
  );
}

function WeDoScene() {
  const { t } = useTranslation();
  const w = t.seoShowcase.weDo;
  const items = [
    { icon: "📱", text: w.mobileWebsite },
    { icon: "⚡", text: w.fastLoading },
    { icon: "🔍", text: w.googleSeo },
    { icon: "📍", text: w.mapsSetup },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">
        {siteConfig.name}
      </p>
      <div className="grid w-full max-w-xs grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div
            key={item.text}
            className="showcase-pop rounded-xl border border-teal-200 bg-white p-3 text-center shadow-sm"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="mt-1 text-[10px] font-medium text-slate-700 break-words sm:text-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustScene() {
  const { t } = useTranslation();
  const tr = t.seoShowcase.trust;
  const badges = [
    { icon: "💰", text: tr.belowAgencies },
    { icon: "📍", text: tr.chennaiTeam },
    { icon: "💬", text: tr.whatsappSupport },
    { icon: "✅", text: tr.noHiddenCharges },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm">
            <span className="text-xl">{b.icon}</span>
            <p className="text-[10px] font-medium text-slate-700 break-words sm:text-xs">{b.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2">
        <span className="text-yellow-500">★★★★★</span>
        <span className="text-xs font-semibold text-teal-800">{tr.businessesTrust}</span>
      </div>
    </div>
  );
}

function CtaScene() {
  const { t } = useTranslation();
  const c = t.seoShowcase.cta;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="showcase-bounce text-6xl">🎉</div>
      <div className="rounded-2xl bg-teal-600 px-6 py-4 text-white shadow-lg">
        <p className="text-2xl font-bold">+{c.moreCustomers}</p>
        <p className="mt-1 text-sm text-teal-100">{c.everyMonth}</p>
      </div>
      <Link
        href="/contact"
        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold whitespace-nowrap text-teal-700 shadow-md ring-2 ring-teal-300 hover:bg-teal-50"
      >
        {c.getFreeQuote}
      </Link>
    </div>
  );
}

const sceneVisuals: Record<(typeof SCENE_IDS)[number], () => React.ReactNode> = {
  search: PhoneSearchScene,
  without: WithoutSeoScene,
  with: WithSeoScene,
  wedo: WeDoScene,
  trust: TrustScene,
  cta: CtaScene,
};

export function SeoTrustShowcase() {
  const { t } = useTranslation();
  const scenes = t.seoShowcase.scenes;
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => {
      setActive(index);
      setFade(true);
    }, 200);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % scenes.length);
    }, SCENE_DURATION_MS);
    return () => clearInterval(timer);
  }, [active, goTo, scenes.length]);

  const scene = scenes[active];
  const sceneId = SCENE_IDS[active];
  const Visual = sceneVisuals[sceneId];

  return (
    <section
      className="border-y border-slate-200 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 py-12 sm:py-16"
      aria-label={t.seoShowcase.ariaLabel}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            {t.seoShowcase.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 break-words sm:text-3xl">{t.seoShowcase.title}</h2>
          <p className="mt-3 text-slate-600 break-words">{t.seoShowcase.description}</p>
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:items-stretch">
          <div className="flex flex-row flex-wrap justify-center gap-2 lg:col-span-1 lg:flex-col lg:justify-start">
            {scenes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => goTo(i)}
                aria-label={interpolate(t.seoShowcase.ariaShowScene, { title: s.title })}
                aria-current={i === active ? "step" : undefined}
                className={`min-h-[44px] rounded-lg px-3 py-2.5 text-left text-xs transition sm:text-sm ${
                  i === active
                    ? "bg-teal-600 font-semibold text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-teal-50"
                }`}
              >
                <span className="block font-medium break-words">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:col-span-3">
            <div
              className={`${SCENE_ACCENTS[sceneId]} px-4 py-3 text-white transition-colors duration-500`}
            >
              <p className="text-xs font-medium uppercase tracking-wider opacity-80">{scene.label}</p>
              <h3 className="text-base font-bold break-words sm:text-lg md:text-xl">{scene.title}</h3>
              <p className="text-sm opacity-90 break-words">{scene.subtitle}</p>
            </div>

            <div
              className={`min-h-[220px] transition-opacity duration-300 sm:min-h-[260px] ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              <Visual />
            </div>

            <div className="h-1 bg-slate-100">
              <div
                key={active}
                className="showcase-progress h-full bg-teal-500"
                style={{ animationDuration: `${SCENE_DURATION_MS}ms` }}
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-teal-100 bg-teal-50/50 p-5 lg:col-span-1">
            <p className="text-xs font-semibold uppercase text-teal-700">{t.seoShowcase.forOwners}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 break-words">{t.seoShowcase.sidePanelExtra}</p>
            <p className="mt-4 text-xs text-slate-500 break-words">
              {interpolate(t.common.sceneOf, { current: active + 1, total: scenes.length })}
              {t.common.loopsLikeGif}
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-teal-600 px-4 py-3 text-xs font-semibold whitespace-nowrap text-white hover:bg-teal-700 sm:w-auto sm:py-2"
            >
              {t.seoShowcase.talkToUs}
            </Link>
            <Link
              href="/what-is-seo"
              className="mt-3 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
            >
              {t.common.readFullSeoGuide}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

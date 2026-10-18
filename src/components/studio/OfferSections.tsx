"use client";

import Link from "next/link";
import { SkillScene } from "@/components/studio/Scenes";
import { useTranslation } from "@/contexts/LanguageContext";
import { getOfferCopy, type PlanId } from "@/lib/offers";

const planParts: Record<PlanId, string[]> = {
  complete: ["SEO", "Software", "Website"],
  software: ["SEO", "Software"],
  website: ["SEO", "Website"],
  seo: ["SEO"],
};

const tamilPlanParts: Record<PlanId, string[]> = {
  complete: ["தேடல் மேம்பாடு", "மென்பொருள்", "இணையதளம்"],
  software: ["தேடல் மேம்பாடு", "மென்பொருள்"],
  website: ["தேடல் மேம்பாடு", "இணையதளம்"],
  seo: ["தேடல் மேம்பாடு"],
};

export function SkillGallery() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <section className="bg-[#f6f3ec] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-[2rem] leading-tight text-[#142033] sm:text-4xl">{copy.skillsTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {copy.skills.map((skill) => (
            <article key={skill.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#142033]/10">
              <SkillScene id={skill.id} label={skill.title} />
              <div className="px-6 pb-7 pt-2">
                <h3 className="text-2xl text-[#142033]">{skill.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3d4a5c]">{skill.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanBoard() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <section id="plans" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] leading-tight text-[#142033] sm:text-4xl">{copy.plansTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3d4a5c]">{copy.plansText}</p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[copy.support, copy.maintenance, copy.updates, copy.noExtraShort].map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-[#142033] px-4 py-4 text-center text-lg font-semibold text-[#fffdf8]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          {copy.plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex h-full flex-col rounded-3xl p-6 sm:p-8 ${
                plan.featured
                  ? "bg-[#142033] text-[#fffdf8] ring-2 ring-[#a6842d]"
                  : "bg-[#f6f3ec] text-[#142033] ring-1 ring-[#142033]/10"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className={`text-lg font-semibold ${plan.featured ? "text-[#e7c56a]" : "text-[#0f6e62]"}`}>
                  {plan.name}
                </p>
                {plan.featured && (
                  <span className="shrink-0 rounded-full bg-[#a6842d] px-3 py-1 text-base font-semibold text-[#142033]">
                    {copy.bestFit}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-2xl leading-snug">{plan.includes}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(locale === "ta" ? tamilPlanParts : planParts)[plan.id].map((part) => (
                  <li
                    key={part}
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      plan.featured ? "bg-white/10 text-[#fffdf8]" : "bg-white text-[#142033]"
                    }`}
                  >
                    {part}
                  </li>
                ))}
              </ul>

              {plan.secondPrice ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">{plan.price}</p>
                    <p className="mt-1 text-lg text-[#3d4a5c]">{plan.priceNote}</p>
                    <p className="mt-2 inline-flex rounded-full bg-[#a6842d] px-3 py-1 text-base font-semibold text-[#142033]">
                      {copy.emi}
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">{plan.secondPrice}</p>
                    <p className="mt-1 text-lg text-[#3d4a5c]">{plan.secondNote}</p>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <p className="text-4xl font-semibold tracking-tight sm:text-5xl">{plan.price}</p>
                  <p className={`mt-1 text-lg ${plan.featured ? "text-[#e7d7a4]" : "text-[#3d4a5c]"}`}>
                    {plan.priceNote}
                  </p>
                </div>
              )}

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-lg font-semibold ${
                    plan.featured
                      ? "bg-[#e7c56a] text-[#142033] hover:bg-[#f3dc8d]"
                      : "bg-[#0f6e62] text-white hover:bg-[#0c5c52]"
                  }`}
                >
                  {copy.talk}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-3xl bg-[#142033] p-6 text-[#fffdf8] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h3 className="text-2xl text-[#e7c56a]">{copy.softwareOnceTitle}</h3>
              <p className="mt-4 text-lg text-[#d5ddd9]">{copy.softwareOnceFrom}</p>
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">{copy.softwareOncePrice}</p>
              <p className="mt-3 text-lg leading-relaxed text-[#d5ddd9]">{copy.softwareOnceNote}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {copy.softwareExamples.map((example, index) => (
                <li key={example.title} className="rounded-2xl bg-[#1d3048] px-4 py-5">
                  <SoftwareMark index={index} />
                  <p className="mt-4 text-lg font-semibold">{example.title}</p>
                  <p className="mt-1 text-lg leading-relaxed text-[#d5ddd9]">{example.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function SoftwareMark({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-14 w-14">
        <rect width="64" height="64" rx="16" fill="#0f6e62" />
        <circle cx="32" cy="24" r="8" fill="#e7c56a" />
        <rect x="18" y="38" width="28" height="8" rx="4" fill="#fffdf8" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-14 w-14">
        <rect width="64" height="64" rx="16" fill="#a6842d" />
        <rect x="16" y="14" width="32" height="36" rx="4" fill="#fffdf8" />
        <rect x="22" y="22" width="8" height="8" fill="#0f6e62" />
        <rect x="34" y="22" width="8" height="8" fill="#0f6e62" />
        <rect x="22" y="34" width="8" height="8" fill="#142033" />
        <rect x="34" y="34" width="8" height="8" fill="#142033" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-14 w-14">
      <rect width="64" height="64" rx="16" fill="#e7c56a" />
      <rect x="14" y="28" width="36" height="22" rx="4" fill="#142033" />
      <rect x="20" y="18" width="24" height="12" rx="3" fill="#0f6e62" />
    </svg>
  );
}

const groupArt = ["profile", "search", "report"] as const;

function GroupMark({ kind }: { kind: (typeof groupArt)[number] }) {
  if (kind === "profile") {
    return (
      <svg viewBox="0 0 72 72" aria-hidden="true" className="h-16 w-16">
        <rect width="72" height="72" rx="18" fill="#0f6e62" />
        <rect x="16" y="18" width="18" height="18" rx="4" fill="#e7c56a" />
        <rect x="40" y="20" width="16" height="5" rx="2" fill="#fffdf8" />
        <rect x="40" y="30" width="12" height="4" rx="2" fill="#d5ebe6" />
        <rect x="16" y="44" width="40" height="10" rx="5" fill="#fffdf8" />
      </svg>
    );
  }
  if (kind === "search") {
    return (
      <svg viewBox="0 0 72 72" aria-hidden="true" className="h-16 w-16">
        <rect width="72" height="72" rx="18" fill="#142033" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="#e7c56a" strokeWidth="4" />
        <path d="M41 41l10 10" stroke="#fffdf8" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="h-16 w-16">
      <rect width="72" height="72" rx="18" fill="#a6842d" />
      <rect x="18" y="40" width="8" height="14" rx="2" fill="#142033" />
      <rect x="32" y="30" width="8" height="24" rx="2" fill="#142033" />
      <rect x="46" y="20" width="8" height="34" rx="2" fill="#fffdf8" />
    </svg>
  );
}

export function SeoWorkboard() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <section className="bg-[#f6f3ec] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] leading-tight text-[#142033] sm:text-4xl">{copy.seoTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3d4a5c]">{copy.seoText}</p>
        </div>

        <div className="mt-10 grid gap-6">
          {copy.seoGroups.map((group, index) => (
            <article key={group.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#142033]/10 sm:p-8">
              <div className="flex items-center gap-4">
                <GroupMark kind={groupArt[index] ?? "report"} />
                <h3 className="text-2xl text-[#142033]">{group.title}</h3>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.label} className="rounded-2xl bg-[#f6f3ec] px-4 py-4">
                    <p className="text-lg font-semibold text-[#142033]">{item.label}</p>
                    <p className="mt-1 text-lg leading-relaxed text-[#3d4a5c]">{item.line}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudioHero() {
  const { locale } = useTranslation();
  const copy = getOfferCopy(locale);

  return (
    <section className="bg-[#142033] text-[#fffdf8]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-lg font-semibold text-[#e7c56a]">{copy.heroKicker}</p>
        <h1 className={`mt-3 max-w-4xl leading-tight sm:text-5xl ${locale === "ta" ? "text-[1.75rem]" : "text-4xl"}`}>{copy.heroTitle}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#d5ddd9] sm:text-xl">{copy.heroText}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#e7c56a] px-7 text-lg font-semibold text-[#142033] hover:bg-[#f3dc8d]"
          >
            {copy.talk}
          </Link>
          <Link
            href="#plans"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fffdf8]/30 px-7 text-lg font-semibold text-[#fffdf8] hover:border-[#e7c56a]"
          >
            {copy.seePlans}
          </Link>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "+", label: copy.support },
            { icon: "✓", label: copy.maintenance },
            { icon: "✎", label: copy.updates },
            { icon: "₹", label: copy.noExtraShort },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/15"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7c56a] text-xl font-semibold text-[#142033]">
                {item.icon}
              </span>
              <span className="text-lg font-semibold leading-snug text-[#fffdf8]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

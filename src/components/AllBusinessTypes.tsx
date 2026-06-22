"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { businessTypeEmojis } from "@/lib/site";

type AllBusinessTypesProps = {
  showShowcaseLink?: boolean;
};

export function AllBusinessTypes({ showShowcaseLink = false }: AllBusinessTypesProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.businessTypes.title.split("{every}")[0]}
            <span className="text-teal-600">{t.businessTypes.every}</span>
            {t.businessTypes.title.split("{every}")[1]}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.businessTypes.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {t.businessTypes.items.map((label, i) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:border-teal-300 hover:shadow-md"
            >
              <span className="text-2xl">{businessTypeEmojis[i]}</span>
              <p className="mt-2 text-xs font-medium text-slate-700 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          {showShowcaseLink ? (
            <Link
              href="/showcase"
              className="text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              {t.businessTypes.showcaseLink}
            </Link>
          ) : (
            <Link
              href="/industries"
              className="text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              {t.servicesShowcase.viewAll}
            </Link>
          )}
          <p className="text-slate-600">
            {t.businessTypes.dontSee}{" "}
            <Link href="/contact" className="font-semibold text-teal-700 hover:text-teal-800">
              {t.businessTypes.contactLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

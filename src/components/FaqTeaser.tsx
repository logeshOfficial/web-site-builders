"use client";

import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { useTranslation } from "@/contexts/LanguageContext";

/** Top FAQ category IDs for homepage teaser */
const TEASER_IDS = ["marketing", "basics", "pricing", "contact"] as const;
const TEASER_ITEM_INDEX = 0;

type FaqTeaserProps = {
  maxItems?: number;
};

export function FaqTeaser({ maxItems = TEASER_IDS.length }: FaqTeaserProps) {
  const { t } = useTranslation();
  const p = t.faqPage;

  const teaserItems = TEASER_IDS.slice(0, maxItems).flatMap((categoryId) => {
    const category = p.categories.find((c) => c.id === categoryId);
    const item = category?.items[TEASER_ITEM_INDEX];
    return item ? [item] : [];
  });

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{p.teaserTitle}</h2>
          <p className="mt-2 text-slate-600">{p.teaserSubtitle}</p>
        </div>
        <div className="mt-8">
          <FaqAccordion items={teaserItems} idPrefix="home-teaser" />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            {t.common.viewAllFaqs}
          </Link>
        </div>
      </div>
    </section>
  );
}

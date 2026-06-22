"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

type FaqItem = {
  question: string;
  answer: string;
  guide?: {
    href: string;
    labelKey: string;
  };
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  idPrefix: string;
};

export function FaqAccordion({ items, idPrefix }: FaqAccordionProps) {
  const { t } = useTranslation();

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const panelId = `${idPrefix}-faq-${index}`;
        return (
          <details key={item.question} className="group">
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden"
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45 group-open:bg-teal-100 group-open:text-teal-700"
                aria-hidden
              >
                +
              </span>
            </summary>
            <div id={panelId} className="px-5 pb-4">
              <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
              {item.guide ? (
                <Link
                  href={item.guide.href}
                  className="mt-3 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  {t.common[item.guide.labelKey as keyof typeof t.common]}
                </Link>
              ) : null}
            </div>
          </details>
        );
      })}
    </div>
  );
}

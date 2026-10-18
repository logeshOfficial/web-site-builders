"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { getWhatsAppUrl } from "@/lib/site";

export function CTA({
  headline,
  subheadline,
}: {
  headline?: string;
  subheadline?: string;
}) {
  const { t } = useTranslation();

  return (
    <section className="bg-[#142033] py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl text-white sm:text-4xl">
          {headline ?? t.cta.defaultHeadline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#d5ddd9]">
          {subheadline ?? t.cta.defaultSubheadline}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e7c56a] px-8 py-3 text-lg font-semibold text-[#142033] transition hover:bg-[#f3dc8d] sm:w-auto"
          >
            {t.common.bookFreeConsultation}
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 px-8 py-3 text-lg font-semibold text-white transition hover:border-white sm:w-auto"
          >
            {t.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}

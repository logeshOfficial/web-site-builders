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
    <section className="bg-teal-600 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white break-words sm:text-3xl md:text-4xl">
          {headline ?? t.cta.defaultHeadline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-teal-100 break-words sm:text-lg">
          {subheadline ?? t.cta.defaultSubheadline}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold whitespace-nowrap text-teal-700 transition hover:bg-teal-50 sm:w-auto sm:py-3.5"
          >
            {t.common.bookFreeConsultation}
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border-2 border-white/40 px-8 py-3 text-base font-semibold whitespace-nowrap text-white transition hover:border-white sm:w-auto sm:py-3.5"
          >
            {t.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}

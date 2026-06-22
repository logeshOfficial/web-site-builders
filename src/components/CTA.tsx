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
    <section className="bg-teal-600 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {headline ?? t.cta.defaultHeadline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
          {subheadline ?? t.cta.defaultSubheadline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            {t.common.bookFreeConsultation}
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white"
          >
            {t.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}

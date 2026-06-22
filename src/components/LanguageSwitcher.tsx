"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: t.languageSwitcher.english },
    { value: "ta", label: t.languageSwitcher.tamil },
  ];

  return (
    <div
      className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5"
      role="group"
      aria-label={t.languageSwitcher.label}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            locale === option.value
              ? "bg-teal-600 text-white shadow-sm"
              : "text-slate-600 hover:text-teal-700"
          }`}
          aria-pressed={locale === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

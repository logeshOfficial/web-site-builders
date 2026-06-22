"use client";

import Link from "next/link";
import { useState } from "react";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-3.5">
        <Logo
          variant="full"
          theme="light"
          asLink
          subtitleVisible="sm"
          className="min-w-0 shrink-0 sm:min-w-0"
          subtitle={interpolate(t.header.subtitle, { shortName: siteConfig.shortName })}
        />

        <div className="ml-auto hidden shrink-0 items-center gap-4 lg:gap-6 md:flex">
          <nav className="flex flex-nowrap items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-teal-700"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold leading-none text-white transition hover:bg-teal-700"
            >
              {t.common.freeConsultation}
            </Link>
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label={t.common.toggleMenu}
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t.common.freeConsultation}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#142033]/10 bg-[#fffdf8]/95 backdrop-blur-sm" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#142033] focus:shadow-lg">
        {locale === "ta" ? "முக்கிய உள்ளடக்கத்திற்குச் செல்லவும்" : "Skip to main content"}
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Logo
          variant="full"
          theme="light"
          asLink
          showSubtitle={false}
          className="min-w-0 flex-1 xl:flex-none xl:shrink-0"
        />

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 xl:flex">
          <nav aria-label={locale === "ta" ? "முதன்மை வழிசெலுத்தல்" : "Main navigation"}>
            <div className="flex flex-nowrap items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-md py-2 text-base font-medium transition hover:text-[#0f6e62] ${isActive(link.href) ? "text-[#0f6e62] underline decoration-2 underline-offset-8" : "text-[#3d4a5c]"}`}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </div>
          </nav>

          <LanguageSwitcher />

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#0f6e62] px-5 py-2 text-base font-semibold leading-none text-white transition hover:bg-[#0c5c52]"
          >
            {t.common.freeConsultation}
          </Link>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 xl:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50"
            onClick={() => setOpen(!open)}
            aria-label={t.common.toggleMenu}
            aria-expanded={open}
            aria-controls={open ? "mobile-navigation" : undefined}
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
        <nav id="mobile-navigation" aria-label={locale === "ta" ? "முதன்மை வழிசெலுத்தல்" : "Main navigation"} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[#142033]/10 xl:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex min-h-12 w-full items-center rounded-lg px-3 py-2.5 text-lg font-medium hover:bg-[#f6f3ec] ${isActive(link.href) ? "bg-[#e7f2ee] text-[#0f6e62]" : "text-[#142033]"}`}
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex min-h-12 w-full items-center justify-center rounded-full bg-[#0f6e62] px-5 py-3 text-center text-lg font-semibold text-white hover:bg-[#0c5c52]"
              onClick={() => setOpen(false)}
            >
              {t.common.freeConsultation}
            </Link>
          </div>
          </div>
        </nav>
      )}
    </header>
  );
}

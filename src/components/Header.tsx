"use client";

import Link from "next/link";
import { useState } from "react";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

type NavLinkItem = (typeof navLinks)[number];

function desktopNavLinkClassName(link: NavLinkItem) {
  const base =
    "whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-teal-700";

  const hideUntil = "hideUntil" in link ? link.hideUntil : undefined;

  if (hideUntil === "lg") {
    return `${base} hidden lg:inline`;
  }
  return base;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="flex w-full min-h-[3.25rem] items-center gap-2 px-4 py-2.5 sm:min-h-[3.5rem] sm:gap-3 sm:px-6 sm:py-3.5 lg:px-10 xl:px-12">
        <Logo
          variant="full"
          theme="light"
          asLink
          truncateName
          subtitleVisible="sm"
          className="min-w-0 max-w-[calc(100%-7.5rem)] flex-1 sm:max-w-none md:flex-none md:shrink-0"
          subtitle={interpolate(t.header.subtitle, { shortName: siteConfig.shortName })}
        />

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex lg:gap-6">
          <nav aria-label="Main navigation">
            <div className="flex flex-nowrap items-center gap-4 lg:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={desktopNavLinkClassName(link)}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </div>
          </nav>

          <LanguageSwitcher />

          <Link
            href="/contact"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold leading-none text-white transition hover:bg-teal-700 lg:px-5"
          >
            {t.common.freeConsultation}
          </Link>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50"
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
        <nav className="border-t border-slate-100 px-4 py-3 sm:px-6 sm:py-4 md:hidden lg:px-10 xl:px-12">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[44px] w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 break-words hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-center text-sm font-semibold whitespace-nowrap text-white hover:bg-teal-700"
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

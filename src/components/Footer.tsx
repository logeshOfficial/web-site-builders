"use client";

import Link from "next/link";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo
              variant="full"
              theme="dark"
              subtitle={t.header.subtitle}
              subtitleVisible="always"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400 break-words">
              {interpolate(t.footer.description, { city: siteConfig.location.city })}
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.pages}</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.learn}</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/what-is-seo" className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                  {t.nav.whatIsSeo}
                </Link>
              </li>
              <li>
                <Link href="/what-is-domain-hosting" className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                  {t.nav.whatIsDomainHosting}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                  {t.nav.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.examples}</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/showcase" className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                  {t.nav.showcase}
                </Link>
              </li>
              {t.industries.list.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="inline-flex min-h-[44px] items-center text-sm break-words hover:text-teal-400 sm:min-h-0">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-[44px] items-center break-all hover:text-teal-400 sm:min-h-0">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex min-h-[44px] items-center hover:text-teal-400 sm:min-h-0">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="break-words leading-relaxed">{siteConfig.location.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center sm:mt-10 sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
          <p className="text-sm text-slate-500 break-words">
            © {new Date().getFullYear()} {siteConfig.name}. {t.common.allRightsReserved}
          </p>
          <p className="text-sm text-slate-500 break-words">{t.common.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}

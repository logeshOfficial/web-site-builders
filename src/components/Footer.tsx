"use client";

import Link from "next/link";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo
              variant="full"
              theme="dark"
              subtitle={`${siteConfig.shortName} · ${t.common.chennaiFreelancers}`}
              subtitleVisible="always"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {interpolate(t.footer.description, { city: siteConfig.location.city })}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.pages}</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400">
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.learn}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/what-is-seo" className="text-sm hover:text-teal-400">
                  {t.nav.whatIsSeo}
                </Link>
              </li>
              <li>
                <Link href="/what-is-domain-hosting" className="text-sm hover:text-teal-400">
                  {t.nav.whatIsDomainHosting}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-teal-400">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-teal-400">
                  {t.nav.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.examples}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/showcase" className="text-sm hover:text-teal-400">
                  {t.nav.showcase}
                </Link>
              </li>
              {t.industries.list.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="text-sm hover:text-teal-400">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-400">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-teal-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. {t.common.allRightsReserved}
          </p>
          <p className="text-sm text-slate-500">{t.common.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}

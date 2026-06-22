import Link from "next/link";
import { industries, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-sm font-bold text-white">
                WB
              </span>
              <span className="text-lg font-semibold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              SEO-ready websites and web apps for local businesses and online brands in{" "}
              {siteConfig.location.city}, {siteConfig.location.country}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Pages</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Industries</h3>
            <ul className="mt-4 space-y-2">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm hover:text-teal-400"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
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
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built with Next.js · SEO-first by design</p>
        </div>
      </div>
    </footer>
  );
}

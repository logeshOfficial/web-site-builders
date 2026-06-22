"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white">
            WB
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-teal-700">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

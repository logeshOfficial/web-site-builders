"use client";

import type { ReactNode } from "react";

export const ICON_CLASS = "h-5 w-5 text-teal-400";
export const ICON_GOLD_CLASS = "h-5 w-5 text-brand-gold";
export const ICON_RING_CLASS =
  "flex items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-brand-gold/40";
export const BADGE_BORDER_CLASS = "border border-brand-gold/35";

export type IndustryKey = "gym" | "salon" | "clinic" | "ecommerce" | "restaurant" | "shop";

export function IndustryIcon({ type, className = ICON_CLASS }: { type: IndustryKey; className?: string }) {
  switch (type) {
    case "gym":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9h12M6 15h12M4 9v6M20 9v6M2 12h2M20 12h2" />
        </svg>
      );
    case "salon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v6M18 3v6M6 9c0 3.314 2.686 6 6 6s6-2.686 6-6M12 15v6" />
        </svg>
      );
    case "clinic":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case "restaurant":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13M8 6v4a4 4 0 008 0V6M4 6h16" />
        </svg>
      );
    case "shop":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      );
  }
}

export function VisualCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-600/60 bg-slate-800/80 p-4 shadow-xl shadow-teal-900/20 ring-1 ring-brand-gold/10 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import type { ReactNode } from "react";

type PageHeroVisualProps = {
  children: ReactNode;
  caption?: string;
  className?: string;
};

export function PageHeroVisual({ children, caption, className = "" }: PageHeroVisualProps) {
  return (
    <div className={`relative mx-auto w-full max-w-sm ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl bg-teal-500/5 blur-2xl" />
      <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[260px]">{children}</div>
      {caption ? <p className="mt-3 text-center text-xs text-slate-400 sm:text-sm">{caption}</p> : null}
    </div>
  );
}

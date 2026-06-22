"use client";

import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
  visual?: ReactNode;
  maxWidth?: "4xl" | "6xl";
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
  visual,
  maxWidth = "6xl",
}: PageHeroProps) {
  const maxW = maxWidth === "4xl" ? "max-w-4xl" : "max-w-6xl";

  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className={`mx-auto ${maxW} px-4 sm:px-6`}>
        <div className={visual ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16" : undefined}>
          <div>
            {eyebrow ? (
              typeof eyebrow === "string" ? (
                <p className="text-sm font-medium text-teal-400">{eyebrow}</p>
              ) : (
                eyebrow
              )
            ) : null}
            <h1
              className={`text-4xl font-bold tracking-tight break-words sm:text-5xl${eyebrow ? " mt-2" : ""}`}
            >
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-lg text-slate-300 break-words">{subtitle}</p>
            ) : null}
            {children}
          </div>

          {visual ? <div className="mt-10 lg:mt-0">{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { processStepNumbers } from "@/lib/site";

export function ProcessSteps() {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.processSteps.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{t.processSteps.description}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.processSteps.items.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="text-5xl font-bold text-teal-500/30">{processStepNumbers[i]}</span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

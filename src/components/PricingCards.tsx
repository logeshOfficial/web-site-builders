import Link from "next/link";
import { packages } from "@/lib/site";

export function PricingCards({ showAllLink = false }: { showAllLink?: boolean }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparent pricing for Indian businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Market-valid packages with no hidden fees. 50% to start, 50% before launch.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                pkg.highlighted
                  ? "border-teal-500 bg-teal-50 shadow-xl shadow-teal-500/10 ring-2 ring-teal-500"
                  : "border-slate-200 bg-white"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{pkg.name}</p>
                <p className="mt-1 text-lg font-medium text-slate-900">{pkg.subtitle}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                  <span className="text-sm text-slate-500">{pkg.priceNote}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{pkg.description}</p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  pkg.highlighted
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-700"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        {showAllLink && (
          <p className="mt-8 text-center">
            <Link href="/pricing" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              See add-ons and custom quotes →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

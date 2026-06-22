import Link from "next/link";
import { industries } from "@/lib/site";

export function IndustryGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for your industry
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Specialized websites for local service businesses in Chennai and across India.
            </p>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            Don&apos;t see your industry? Contact us →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-teal-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-700">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{industry.shortDescription}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-teal-600">
                Learn more
                <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Also serving restaurants, gyms, lawyers, electricians, coaches, e-commerce brands, and more.
        </p>
      </div>
    </section>
  );
}

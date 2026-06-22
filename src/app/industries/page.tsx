import Link from "next/link";
import { CTA } from "@/components/CTA";
import { createMetadata } from "@/lib/seo";
import { industries } from "@/lib/site";

export const metadata = createMetadata({
  title: "Industries We Serve",
  description:
    "SEO websites for dentists, plumbers, salons, and local businesses in Chennai and across India.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Industries we serve</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Specialized website and SEO solutions for local service businesses and online brands.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:border-teal-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-teal-700">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{industry.shortDescription}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-teal-600">
                  View details →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-center text-slate-600">
            Also building sites for restaurants, gyms, lawyers, electricians, coaches, and e-commerce brands.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}

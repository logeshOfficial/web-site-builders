import Link from "next/link";
import { CTA } from "@/components/CTA";
import { createMetadata } from "@/lib/seo";
import { addOns, services, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Web Design & SEO Services",
  description:
    "Professional website design, local SEO, web apps, and maintenance for businesses in Chennai and India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            End-to-end web solutions for local businesses and online brands—from your first website to
            ongoing growth.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service, i) => (
              <div key={service.title} className="flex gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-lg font-bold text-teal-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900">Popular add-ons</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900">Add-on</th>
                  <th className="px-6 py-4 font-semibold text-slate-900">Price range</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((addon) => (
                  <tr key={addon.name} className="border-b border-slate-100 last:border-0">
                    <td className="px-6 py-4 text-slate-700">{addon.name}</td>
                    <td className="px-6 py-4 font-medium text-teal-700">{addon.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-slate-600">
            Based in {siteConfig.location.city}? We offer in-person consultations for local businesses.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Link
            href="/pricing"
            className="inline-flex rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-700"
          >
            View Full Pricing
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}

import { CTA } from "@/components/CTA";
import { PricingCards } from "@/components/PricingCards";
import { createMetadata } from "@/lib/seo";
import { addOns } from "@/lib/site";

export const metadata = createMetadata({
  title: "Website Pricing Packages",
  description:
    "Transparent website pricing for Indian businesses. Starter from ₹29,999, Growth ₹59,999, Premium ₹1,29,999. No hidden fees.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Clear packages for every stage of your business. All prices in INR. Custom quotes available
            for web apps and enterprise projects.
          </p>
        </div>
      </section>

      <PricingCards />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Add-ons & recurring services</h2>
          <p className="mt-2 text-slate-600">Enhance any package or build recurring revenue into your plan.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {addOns.map((addon) => (
              <div key={addon.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{addon.name}</h3>
                <p className="mt-2 text-teal-700 font-medium">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Payment terms</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="flex gap-3">
              <span className="font-bold text-teal-600">50%</span>
              <span>Deposit to begin work</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-teal-600">50%</span>
              <span>Balance due before website goes live</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-teal-600">Monthly</span>
              <span>SEO retainers and maintenance billed in advance</span>
            </li>
          </ul>
          <p className="mt-8 rounded-xl bg-teal-50 p-6 text-sm text-slate-700">
            <strong>Web app projects</strong> are quoted separately based on scope. Simple MVPs typically
            range from ₹1,50,000 to ₹8,00,000+. Book a free call for an accurate estimate.
          </p>
        </div>
      </section>

      <CTA headline="Not sure which package fits?" subheadline="Tell us about your business and we'll recommend the best option—no obligation." />
    </>
  );
}

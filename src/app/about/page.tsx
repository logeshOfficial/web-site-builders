import { CTA } from "@/components/CTA";
import { ProcessSteps } from "@/components/ProcessSteps";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Chennai-based web design agency specializing in SEO websites for local businesses and web apps for online brands across India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About {siteConfig.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We help local businesses and online brands in India get found on Google and turn visitors into
            paying customers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Our mission</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Too many small businesses in Chennai pay for websites that look fine but never bring a single
            customer from Google. We built {siteConfig.name} to fix that—every site we deliver is fast,
            mobile-first, and structured for search engines from day one.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Whether you&apos;re a dentist in Anna Nagar, a plumber covering all of Chennai, a salon in
            T. Nagar, or an online coach selling across India—we build websites that work as hard as you do.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Why choose us?</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO-first approach",
                text: "We don't bolt SEO on at the end. Structure, speed, schema, and keywords are built in from the start.",
              },
              {
                title: "Chennai roots, India reach",
                text: "Based in Chennai with deep understanding of local markets, plus experience serving online businesses nationwide.",
              },
              {
                title: "Modern tech stack",
                text: "Next.js, fast hosting, and clean code—sites that load in under 2 seconds on mobile networks.",
              },
              {
                title: "Clear communication",
                text: "WhatsApp updates, regular progress reports, and no tech jargon unless you want the details.",
              },
              {
                title: "Fair pricing",
                text: "Transparent packages in INR. No surprise invoices. You know exactly what you're paying for.",
              },
              {
                title: "Ongoing support",
                text: "We don't disappear after launch. Maintenance, SEO retainers, and updates keep your site performing.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTA />
    </>
  );
}

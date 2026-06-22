import Link from "next/link";

export function CTA({
  headline = "Ready to get more customers from Google?",
  subheadline = "Book a free 15-minute consultation. We'll review your goals and recommend the right package—no pressure.",
}: {
  headline?: string;
  subheadline?: string;
}) {
  return (
    <section className="bg-teal-600 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">{subheadline}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Book Free Consultation
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

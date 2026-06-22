"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Replace with Formspree, Resend, or your API endpoint
    console.log("Contact form submission:", payload);

    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Thank you!</h3>
        <p className="mt-2 text-slate-600">
          We&apos;ll get back to you within 24 hours. For urgent inquiries, call{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-semibold text-teal-700">
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder="you@business.com"
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-slate-700">
          Business type
        </label>
        <select
          id="business"
          name="business"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">Select your industry</option>
          <option value="dentist">Dentist / Dental Clinic</option>
          <option value="plumber">Plumber / Home Services</option>
          <option value="salon">Salon / Spa</option>
          <option value="restaurant">Restaurant / Cafe</option>
          <option value="online">Online Business</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium text-slate-700">
          Interested package
        </label>
        <select
          id="package"
          name="package"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">Not sure yet</option>
          <option value="starter">Starter — ₹29,999</option>
          <option value="growth">Growth — ₹59,999</option>
          <option value="premium">Premium — ₹1,29,999</option>
          <option value="custom">Custom quote</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder="What does your business do? What are your goals?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-teal-600 py-3.5 text-base font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

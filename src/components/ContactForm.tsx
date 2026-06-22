"use client";

import { useState } from "react";
import { interpolate, useTranslation } from "@/contexts/LanguageContext";
import {
  buildFormspreePayload,
  getFormspreeEndpoint,
  parseFormspreeError,
  parseFormspreeFormId,
} from "@/lib/formspree";
import { siteConfig } from "@/lib/site";

const rawFormspreeEnv = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeId = parseFormspreeFormId(rawFormspreeEnv);
const formspreeMisconfigured = Boolean(rawFormspreeEnv?.trim()) && !formspreeId;
const formspreeEnabled = Boolean(formspreeId);

function buildMailtoUrl(form: HTMLFormElement): string {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "");
  const phone = String(data.get("phone") ?? "");
  const email = String(data.get("email") ?? "");
  const business = String(data.get("business") ?? "");
  const pkg = String(data.get("package") ?? "");
  const message = String(data.get("message") ?? "");

  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      business ? `Business type: ${business}` : null,
      pkg ? `Package: ${pkg}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const f = t.contactForm;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;

    if (formspreeMisconfigured) {
      setError(f.formspreeInvalidId);
      setLoading(false);
      return;
    }

    if (!formspreeEnabled) {
      window.location.href = buildMailtoUrl(form);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(getFormspreeEndpoint(formspreeId!), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildFormspreePayload(form)),
      });

      if (!response.ok) {
        const detail = await parseFormspreeError(response);
        setError(interpolate(f.submitErrorDetail, { detail }));
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      const detail = err instanceof Error ? err.message : t.common.networkError;
      setError(interpolate(f.submitErrorDetail, { detail }));
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{t.common.thankYou}</h3>
        <p className="mt-2 text-slate-600">
          {interpolate(f.thankYouMessage, { phone: siteConfig.phone })}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          {t.common.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formspreeMisconfigured && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          <p className="font-semibold">{f.formspreeInvalidId}</p>
          <p className="mt-2 text-red-800">{f.formspreeSetupInstructions}</p>
        </div>
      )}

      {!formspreeEnabled && !formspreeMisconfigured && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <p>
            {interpolate(f.formspreeNotConfigured, { email: siteConfig.email })}{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline hover:text-amber-950">
              {siteConfig.email}
            </a>
            {f.formspreeNotConfiguredSuffix}
          </p>
          <p className="mt-2 text-amber-800">{f.formspreeSetupInstructions}</p>
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <p>{error}</p>
          <p className="mt-2">
            {interpolate(f.submitErrorFallback, { email: siteConfig.email })}{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline hover:text-red-900">
              {siteConfig.email}
            </a>
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            {f.fullName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder={f.placeholderName}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            placeholder={f.placeholderPhone}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          {f.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder={f.placeholderEmail}
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-slate-700">
          {f.businessType}
        </label>
        <select
          id="business"
          name="business"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">{f.selectIndustry}</option>
          <option value="dentist">{f.industries.dentist}</option>
          <option value="plumber">{f.industries.plumber}</option>
          <option value="salon">{f.industries.salon}</option>
          <option value="restaurant">{f.industries.restaurant}</option>
          <option value="online">{f.industries.online}</option>
          <option value="other">{f.industries.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium text-slate-700">
          {f.interestedPackage}
        </label>
        <select
          id="package"
          name="package"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        >
          <option value="">{f.notSureYet}</option>
          <option value="starter">{f.packages.starter}</option>
          <option value="growth">{f.packages.growth}</option>
          <option value="premium">{f.packages.premium}</option>
          <option value="custom">{f.customQuote}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          placeholder={f.placeholderMessage}
        />
      </div>

      <button
        type="submit"
        disabled={loading || formspreeMisconfigured}
        className="w-full rounded-full bg-teal-600 py-3.5 text-base font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
      >
        {loading ? t.common.sending : formspreeEnabled ? t.common.sendMessage : f.sendViaEmail}
      </button>
    </form>
  );
}

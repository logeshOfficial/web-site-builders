"use client";

import { ContactForm } from "@/components/ContactForm";
import { TrustSection } from "@/components/TrustSection";
import { useTranslation } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";

export function ContactContent() {
  const { t } = useTranslation();
  const p = t.contactPage;

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{p.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">{p.getInTouch}</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-medium text-slate-500">{p.phoneLabel}</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-lg font-semibold text-teal-700 hover:text-teal-800"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{p.emailLabel}</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-lg font-semibold text-teal-700 hover:text-teal-800"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{p.locationLabel}</p>
                  <p className="mt-1 text-lg text-slate-800">{siteConfig.location.address}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{p.hoursLabel}</p>
                  <p className="mt-1 text-slate-800">{p.hours}</p>
                </div>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.335-1.662C8.01 23.441 9.964 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.59-.477-5.103-1.313l-.366-.217-3.76.987 1.004-3.648-.24-.375A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {t.common.chatOnWhatsApp}
              </a>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TrustSection sections={["badges"]} />
    </>
  );
}

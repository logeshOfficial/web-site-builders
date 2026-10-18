"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { clients } from "@/lib/clients";

export function ClientMarquee() {
  const { locale } = useTranslation();
  const title = locale === "ta" ? "எங்கள் வாடிக்கையாளர்கள்" : "Our clients";
  const loop = [...clients, ...clients];

  return (
    <section aria-label={title} className="overflow-hidden border-y border-[#142033]/10 bg-white py-8">
      <h2 className="px-4 text-center text-2xl text-[#142033]">{title}</h2>
      <div className="client-marquee mt-6">
        <ul className="client-marquee-track">
          {loop.map((client, index) => (
            <li key={`${client.name}-${index}`} className={`shrink-0 ${index >= clients.length ? "client-marquee-duplicate" : ""}`} aria-hidden={index >= clients.length ? true : undefined}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={index >= clients.length ? -1 : undefined}
                className="flex h-24 items-center gap-3 rounded-2xl bg-[#f6f3ec] px-5 transition hover:bg-[#e8f2ee]"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.showName ? "" : client.name}
                    className={`h-16 w-auto object-contain ${client.wide ? "max-w-[22rem]" : "max-w-[11rem]"}`}
                  />
                ) : null}
                {client.showName || !client.logo ? (
                  <span className="whitespace-nowrap text-lg font-semibold text-[#142033]">{client.name}</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export function MySlotHub() {
  const { locale } = useTranslation();
  const copy = locale === "ta" ? {
    label: "உங்கள் இணையதளத்துடன் இணையும் appointment software",
    title: "MySlotHub மூலம் appointments எளிதாக",
    intro: "உங்கள் இணையதளத்தைப் பார்வையிடுபவர்கள் அடுத்த படியை எடுக்க உதவுங்கள். MySlotHub ஒரு online appointment booking தீர்வு; உங்கள் website-க்கு ஒரு பயனுள்ள துணை.",
    items: [
      { title: "Online booking", text: "வாடிக்கையாளர்கள் booking page-ல் appointment நேரத்தைத் தேர்வு செய்யலாம்." },
      { title: "Website-லிருந்து booking", text: "உங்கள் website-ல் booking link சேர்த்து, பார்வையாளர்களை appointment page-க்கு அழைத்துச் செல்லுங்கள்." },
      { title: "Clinic-களுக்கும் சேவை நிறுவனங்களுக்கும்", text: "Appointment அடிப்படையில் செயல்படும் நிறுவனங்களுக்கு ஒரு எளிய booking வழி." },
    ],
    example: "META DENTAL தனது website-லிருந்து MySlotHub booking page-க்கு வாடிக்கையாளர்களை வழிநடத்துகிறது.",
    action: "MySlotHub பற்றி கேளுங்கள்",
  } : {
    label: "Appointment software for your website",
    title: "Make appointments easier with MySlotHub",
    intro: "Help visitors take the next step. MySlotHub is an online appointment booking solution that complements your business website.",
    items: [
      { title: "Online booking", text: "Customers can visit a booking page to choose an appointment time." },
      { title: "Connect from your website", text: "Add a booking link to guide website visitors to your appointment page." },
      { title: "For appointment-led businesses", text: "A convenient booking option for clinics and other service businesses." },
    ],
    example: "META DENTAL guides visitors from its website to its MySlotHub booking page.",
    action: "Ask about MySlotHub",
  };

  return (
    <section id="myslothub" className="bg-[#f6f3ec] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[#142033] p-6 text-[#fffdf8] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-wider text-[#e7c56a]">{copy.label}</p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{copy.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#d5ddd9]">{copy.intro}</p>
              <p className="mt-4 text-base leading-relaxed text-[#d5ddd9]">{copy.example}</p>
              <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#e7c56a] px-6 text-lg font-semibold text-[#142033] hover:bg-[#f3dc8d]">
                {copy.action}
              </Link>
            </div>
            <ul className="grid gap-3">
              {copy.items.map((item, index) => (
                <li key={item.title} className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f6e62] font-semibold text-white">0{index + 1}</span>
                  <div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-1 leading-relaxed text-[#d5ddd9]">{item.text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

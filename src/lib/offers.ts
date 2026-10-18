import { CARE_PLANS, formatPrice } from "./pricing-config";

export type OfferLocale = "en" | "ta";

const money = {
  complete: formatPrice(CARE_PLANS.complete),
  software: formatPrice(CARE_PLANS.software),
  websiteSetup: formatPrice(CARE_PLANS.websiteSetup),
  websiteMonthly: formatPrice(CARE_PLANS.websiteMonthly),
  seo: formatPrice(CARE_PLANS.seo),
  softwareOnce: formatPrice(CARE_PLANS.softwareOnce),
};

export type SkillId = "software" | "website" | "seo" | "gbp";
export type PlanId = "complete" | "software" | "website" | "seo";

type Copy = {
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  skillsTitle: string;
  plansTitle: string;
  plansText: string;
  seoTitle: string;
  seoText: string;
  perMonth: string;
  setup: string;
  then: string;
  emi: string;
  includedTitle: string;
  support: string;
  maintenance: string;
  updates: string;
  noExtra: string;
  noExtraShort: string;
  softwareOnceTitle: string;
  softwareOnceFrom: string;
  softwareOncePrice: string;
  softwareOnceNote: string;
  softwareExamples: { title: string; line: string }[];
  talk: string;
  seePlans: string;
  bestFit: string;
  skills: { id: SkillId; title: string; line: string }[];
  plans: {
    id: PlanId;
    name: string;
    includes: string;
    price: string;
    priceNote?: string;
    secondPrice?: string;
    secondNote?: string;
    featured?: boolean;
  }[];
  seoGroups: { title: string; items: { label: string; line: string }[] }[];
};

const en: Copy = {
  heroKicker: "Chennai",
  heroTitle: "Software, websites and Google visibility for your business.",
  heroText: "From custom software to a website customers can find, we help you build and maintain your online presence.",
  skillsTitle: "How we can help",
  plansTitle: "Find the right plan",
  plansText: "Compare your options and choose the services your business needs.",
  seoTitle: "What's included in SEO care",
  seoText: "Ongoing care for your Google Business Profile, search terms and monthly reporting.",
  perMonth: "per month",
  setup: "to design and launch",
  then: "then",
  emi: "EMI available",
  includedTitle: "Included in every plan",
  support: "24/7 support",
  maintenance: "Maintenance included",
  updates: "Minor updates included",
  noExtra: "Clear pricing with no surprise charges.",
  noExtraShort: "No surprise charges",
  softwareOnceTitle: "Prefer a one-time software purchase?",
  softwareOnceFrom: "Starting price",
  softwareOncePrice: money.softwareOnce,
  softwareOnceNote: "A one-time payment, with the final price based on your requirements.",
  softwareExamples: [
    { title: "Clinic tracker", line: "Patients, treatment, and expenses" },
    { title: "ITR reports", line: "Excel reports for income-tax filing" },
    { title: "Inventory", line: "Stock for a shop or office" },
  ],
  talk: "Discuss your needs",
  seePlans: "Explore plans",
  bestFit: "Full care",
  skills: [
    {
      id: "software",
      title: "Custom desktop software",
      line: "Clinic records, expense reports for ITR, inventory, and other tools for your work.",
    },
    {
      id: "website",
      title: "Web design",
      line: "A professional, mobile-friendly website that helps customers learn about your business.",
    },
    {
      id: "seo",
      title: "Local SEO",
      line: "Help nearby customers find your business when they search for your services.",
    },
    {
      id: "gbp",
      title: "Google Business Profile",
      line: "Photos, posts, reviews, hours, and a booking button on Google.",
    },
  ],
  plans: [
    {
      id: "complete",
      name: "Complete",
      includes: "SEO + custom software + website",
      price: money.complete,
      priceNote: "per month",
      featured: true,
    },
    {
      id: "software",
      name: "Software",
      includes: "SEO + custom software",
      price: money.software,
      priceNote: "per month",
    },
    {
      id: "website",
      name: "Website",
      includes: "SEO + website",
      price: money.websiteSetup,
      priceNote: "to design and launch",
      secondPrice: money.websiteMonthly,
      secondNote: "per month for SEO and website updates",
    },
    {
      id: "seo",
      name: "SEO only",
      includes: "Google care only",
      price: money.seo,
      priceNote: "per month",
    },
  ],
  seoGroups: [
    {
      title: "Google Business Profile",
      items: [
        { label: "Profile", line: "Category, description, services, hours" },
        { label: "Posts", line: "Tuesday and Friday" },
        { label: "Reviews", line: "Checked daily, reply within 24 hours" },
        { label: "WhatsApp", line: "A note when each post is live" },
        { label: "Questions", line: "FAQ written on your profile" },
        { label: "Booking", line: "MySlotHub, Practo, or Calendly" },
        { label: "Review card", line: "A5 QR card for your counter" },
        { label: "Photos", line: "Real photos, added regularly" },
        { label: "Holiday hours", line: "Special hours kept up to date" },
      ],
    },
    {
      title: "Keywords",
      items: [
        { label: "Your words", line: "Main and extra search phrases" },
        { label: "Competitors", line: "Who ranks above you, and why" },
        { label: "Rank check", line: "Where you sit on Google" },
      ],
    },
    {
      title: "Monthly report",
      items: [
        { label: "This month vs last", line: "Views, calls, direction requests, and posts" },
      ],
    },
  ],
};

const ta: Copy = {
  heroKicker: "சென்னை",
  heroTitle: "உங்கள் வணிகத்திற்கான மென்பொருள், இணையதளம் மற்றும் கூகுள் தேடல் சேவைகள்.",
  heroText: "உங்கள் தேவைக்கேற்ற மென்பொருள் முதல் வாடிக்கையாளர்கள் கண்டறியக்கூடிய இணையதளம் வரை உருவாக்கிப் பராமரிக்க உதவுகிறோம்.",
  skillsTitle: "நாங்கள் வழங்கும் சேவைகள்",
  plansTitle: "உங்களுக்கேற்ற திட்டத்தைத் தேர்ந்தெடுங்கள்",
  plansText: "திட்டங்களை ஒப்பிட்டு, உங்கள் வணிகத்திற்குத் தேவையான சேவைகளைத் தேர்ந்தெடுங்கள்.",
  seoTitle: "தேடல் மேம்பாட்டுப் பராமரிப்பில் உள்ளவை",
  seoText: "உங்கள் கூகுள் வணிகச் சுயவிவரம், தேடல் சொற்கள் மற்றும் மாத அறிக்கைக்கான தொடர் பராமரிப்பு.",
  perMonth: "மாதம்",
  setup: "வடிவமைப்பு மற்றும் வெளியீடு",
  then: "பிறகு",
  emi: "தவணை வசதி உண்டு",
  includedTitle: "எல்லா திட்டங்களிலும்",
  support: "24/7 ஆதரவு",
  maintenance: "பராமரிப்பு சேர்க்கப்பட்டுள்ளது",
  updates: "சிறிய மாற்றங்கள் சேர்க்கப்பட்டுள்ளன",
  noExtra: "தெளிவான விலை; எதிர்பாராத கட்டணங்கள் இல்லை.",
  noExtraShort: "கூடுதல் கட்டணம் இல்லை",
  softwareOnceTitle: "மென்பொருளை ஒருமுறை கட்டணத்தில் வாங்க விரும்புகிறீர்களா?",
  softwareOnceFrom: "தொடக்க விலை",
  softwareOncePrice: money.softwareOnce,
  softwareOnceNote: "ஒருமுறை கட்டணம். உங்கள் தேவைகளுக்கு ஏற்ப இறுதி விலை மாறும்.",
  softwareExamples: [
    { title: "மருத்துவப் பதிவு", line: "நோயாளி, சிகிச்சை, செலவு" },
    { title: "வருமான வரி அறிக்கை", line: "வருமான வரிக்கான செலவுப் பட்டியல்" },
    { title: "சரக்கு இருப்பு", line: "கடை அல்லது அலுவலக இருப்பு" },
  ],
  talk: "உங்கள் தேவைகளைப் பேசலாம்",
  seePlans: "திட்டங்களைப் பார்க்கவும்",
  bestFit: "முழு பராமரிப்பு",
  skills: [
    {
      id: "software",
      title: "தனிப்பயன் கணினி மென்பொருள்",
      line: "மருத்துவப் பதிவு, வருமான வரி செலவு அறிக்கை, சரக்கு இருப்பு மற்றும் உங்கள் வேலைக்கான கருவிகள்.",
    },
    {
      id: "website",
      title: "இணையதள வடிவமைப்பு",
      line: "உங்கள் வணிகத்தை அறிந்துகொள்ள உதவும், கைபேசியில் எளிதாகப் பயன்படுத்தக்கூடிய இணையதளம்.",
    },
    {
      id: "seo",
      title: "உள்ளூர் தேடல் மேம்பாடு",
      line: "உங்கள் சேவைகளைத் தேடும் அருகிலுள்ள வாடிக்கையாளர்கள் உங்கள் வணிகத்தைக் கண்டறிய உதவுகிறோம்.",
    },
    {
      id: "gbp",
      title: "கூகுள் வணிகச் சுயவிவரம்",
      line: "படங்கள், பதிவுகள், மதிப்புரைகள், நேரம் மற்றும் முன்பதிவு பொத்தான்.",
    },
  ],
  plans: [
    {
      id: "complete",
      name: "முழுமை",
      includes: "தேடல் மேம்பாடு + மென்பொருள் + இணையதளம்",
      price: money.complete,
      priceNote: "மாதம்",
      featured: true,
    },
    {
      id: "software",
      name: "மென்பொருள்",
      includes: "தேடல் மேம்பாடு + மென்பொருள்",
      price: money.software,
      priceNote: "மாதம்",
    },
    {
      id: "website",
      name: "இணையதளம்",
      includes: "தேடல் மேம்பாடு + இணையதளம்",
      price: money.websiteSetup,
      priceNote: "வடிவமைப்பு மற்றும் வெளியீடு",
      secondPrice: money.websiteMonthly,
      secondNote: "மாதம் தேடல் மேம்பாடு மற்றும் இணையதள மாற்றங்கள்",
    },
    {
      id: "seo",
      name: "தேடல் மேம்பாடு மட்டும்",
      includes: "கூகுள் பராமரிப்பு மட்டும்",
      price: money.seo,
      priceNote: "மாதம்",
    },
  ],
  seoGroups: [
    {
      title: "கூகுள் வணிகச் சுயவிவரம்",
      items: [
        { label: "சுயவிவரம்", line: "வகை, விவரம், சேவைகள், நேரம்" },
        { label: "பதிவுகள்", line: "செவ்வாய் மற்றும் வெள்ளி" },
        { label: "விமர்சனம்", line: "தினமும் பார்த்து, 24 மணி நேரத்தில் பதில்" },
        { label: "வாட்ஸ்அப்", line: "பதிவு வந்ததும் தகவல்" },
        { label: "கேள்விகள்", line: "சுயவிவரத்தில் பொதுவான கேள்விகள்" },
        { label: "முன்பதிவு", line: "மைஸ்லாட்ஹப், பிராக்டோ அல்லது காலெண்ட்லி" },
        { label: "மதிப்புரை அட்டை", line: "மதிப்புரை வழங்குவதற்கான குறியீடு அட்டை" },
        { label: "படங்கள்", line: "உண்மையான படங்கள், அடிக்கடி" },
        { label: "விடுமுறை நேரம்", line: "சிறப்பு நேரம் புதுப்பிப்பு" },
      ],
    },
    {
      title: "தேடல் சொற்கள்",
      items: [
        { label: "உங்கள் சொற்கள்", line: "முக்கிய மற்றும் கூடுதல் சொற்கள்" },
        { label: "போட்டியாளர்", line: "யார் மேலே இருக்கிறார்கள்" },
        { label: "தரவரிசை", line: "கூகுளில் நீங்கள் எங்கே" },
      ],
    },
    {
      title: "மாத அறிக்கை",
      items: [{ label: "இந்த மாதம் / முந்தைய மாதம்", line: "பார்வை, அழைப்பு, வழி, பதிவுகள்" }],
    },
  ],
};

export function getOfferCopy(locale: OfferLocale): Copy {
  return locale === "ta" ? ta : en;
}

export const offerMoney = money;

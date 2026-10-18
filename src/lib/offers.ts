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
  heroTitle: "Software, a website, and Google — looked after for you.",
  heroText: "Four kinds of work. One clear monthly plan. Pictures first, so you can see what you are paying for.",
  skillsTitle: "The work",
  plansTitle: "Choose a plan",
  plansText: "The price you see is the full price.",
  seoTitle: "What SEO care looks like",
  seoText: "Your Google listing, your keywords, and a simple monthly report.",
  perMonth: "per month",
  setup: "to design and launch",
  then: "then",
  emi: "EMI available",
  includedTitle: "Included in every plan",
  support: "24/7 support",
  maintenance: "Maintenance included",
  updates: "All updates included",
  noExtra: "No surprise charges. No surprise charges.",
  noExtraShort: "No surprise charges",
  softwareOnceTitle: "Or buy the software once",
  softwareOnceFrom: "Starting price",
  softwareOncePrice: money.softwareOnce,
  softwareOnceNote: "One payment, starting here. The price follows the use case.",
  softwareExamples: [
    { title: "Clinic tracker", line: "Patients, treatment, and expenses" },
    { title: "ITR reports", line: "Excel reports for income-tax filing" },
    { title: "Inventory", line: "Stock for a shop or office" },
  ],
  talk: "Talk about your plan",
  seePlans: "See the plans",
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
      line: "A clear website people can open on a phone and trust.",
    },
    {
      id: "seo",
      title: "Local SEO",
      line: "Show up when people nearby search for your service.",
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
  heroTitle: "மென்பொருள், இணையதளம், கூகுள் — நாங்கள் பார்த்துக் கொள்கிறோம்.",
  heroText: "நான்கு வேலைகள். தெளிவான மாத திட்டம். படத்தில் பார்த்து புரிந்து கொள்ளுங்கள்.",
  skillsTitle: "வேலைகள்",
  plansTitle: "ஒரு திட்டத்தைத் தேர்ந்தெடுங்கள்",
  plansText: "நீங்கள் பார்க்கும் விலையே முழு விலை.",
  seoTitle: "தேடல் மேம்பாட்டுப் பராமரிப்பில் என்ன உள்ளது",
  seoText: "உங்கள் கூகுள் பட்டியல், தேடல் சொற்கள், மாத அறிக்கை.",
  perMonth: "மாதம்",
  setup: "வடிவமைப்பு மற்றும் வெளியீடு",
  then: "பிறகு",
  emi: "தவணை வசதி உண்டு",
  includedTitle: "எல்லா திட்டங்களிலும்",
  support: "24/7 ஆதரவு",
  maintenance: "பராமரிப்பு இலவசம்",
  updates: "அனைத்து மாற்றங்கள் இலவசம்",
  noExtra: "ஆச்சரிய கட்டணம் இல்லை. கூடுதல் கட்டணம் இல்லை.",
  noExtraShort: "கூடுதல் கட்டணம் இல்லை",
  softwareOnceTitle: "அல்லது மென்பொருளை ஒரு முறை வாங்கலாம்",
  softwareOnceFrom: "தொடக்க விலை",
  softwareOncePrice: money.softwareOnce,
  softwareOnceNote: "ஒரே கட்டணம், இங்கிருந்து தொடங்கும். வேலைக்கு ஏற்ப விலை மாறும்.",
  softwareExamples: [
    { title: "மருத்துவப் பதிவு", line: "நோயாளி, சிகிச்சை, செலவு" },
    { title: "வருமான வரி அறிக்கை", line: "வருமான வரிக்கான செலவுப் பட்டியல்" },
    { title: "சரக்கு இருப்பு", line: "கடை அல்லது அலுவலக இருப்பு" },
  ],
  talk: "திட்டம் பற்றி பேசுங்கள்",
  seePlans: "திட்டங்களைப் பாருங்கள்",
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
      line: "கைபேசியில் எளிதாகப் பயன்படுத்தக்கூடிய நம்பகமான இணையதளம்.",
    },
    {
      id: "seo",
      title: "உள்ளூர் தேடல் மேம்பாடு",
      line: "அருகில் தேடும்போது கூகுளில் தெரியும்.",
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

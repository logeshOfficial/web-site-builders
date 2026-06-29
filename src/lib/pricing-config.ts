export const PRICING_RAW = {
  packages: {
    starter: { min: 4999, max: 7999 },
    growth: { min: 14999, max: 21999 },
    premium: { min: 27999, max: 44999 },
  },
  domain: { min: 800, max: 1200 },
  addOns: {
    booking: { min: 5000, max: 15000 },
    ecommerce: { min: 20000, max: 60000 },
    seoRetainer: { min: 5000, max: 15000 },
    copywriting: { min: 3000, max: 12000 },
  },
  agency: {
    basic: { min: 50000, max: 80000 },
    growth: { min: 80000, max: 150000 },
    premium: { min: 200000, max: null },
    seo: { min: 25000, max: 50000 },
    mobile: { min: 15000, max: 30000 },
    overpay: { min: 80000, max: 200000 },
  },
  misc: {
    gymIntro: 8000,
    webAppMvp: { min: 150000, max: 800000 },
  }
};

export function formatPrice(amount: number): string {
  return "₹" + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(amount);
}

export function formatRange(min: number, max: number | null, suffix = ""): string {
  if (max === null) {
    return `${formatPrice(min)}+${suffix}`;
  }
  return `${formatPrice(min)} – ${formatPrice(max)}${suffix}`;
}

export const PRICING = {
  starter: {
    min: formatPrice(PRICING_RAW.packages.starter.min),
    max: formatPrice(PRICING_RAW.packages.starter.max),
    range: formatRange(PRICING_RAW.packages.starter.min, PRICING_RAW.packages.starter.max),
    rangeCompact: `${formatPrice(PRICING_RAW.packages.starter.min)}–${formatPrice(PRICING_RAW.packages.starter.max).replace("₹", "")}`,
  },
  growth: {
    min: formatPrice(PRICING_RAW.packages.growth.min),
    max: formatPrice(PRICING_RAW.packages.growth.max),
    range: formatRange(PRICING_RAW.packages.growth.min, PRICING_RAW.packages.growth.max),
    rangeCompact: `${formatPrice(PRICING_RAW.packages.growth.min)}–${formatPrice(PRICING_RAW.packages.growth.max).replace("₹", "")}`,
  },
  premium: {
    min: formatPrice(PRICING_RAW.packages.premium.min),
    max: formatPrice(PRICING_RAW.packages.premium.max),
    range: formatRange(PRICING_RAW.packages.premium.min, PRICING_RAW.packages.premium.max),
    rangeCompact: `${formatPrice(PRICING_RAW.packages.premium.min)}–${formatPrice(PRICING_RAW.packages.premium.max).replace("₹", "")}`,
  },
  domain: {
    min: formatPrice(PRICING_RAW.domain.min),
    max: formatPrice(PRICING_RAW.domain.max),
    range: formatRange(PRICING_RAW.domain.min, PRICING_RAW.domain.max),
    rangeYearly: `~${formatPrice(PRICING_RAW.domain.min)} – ${formatPrice(PRICING_RAW.domain.max)}/year`,
    rangeYearlyCompact: `~${formatPrice(PRICING_RAW.domain.min)} – ${formatPrice(PRICING_RAW.domain.max)}/yr`,
    priceYearly: `~${formatPrice(PRICING_RAW.domain.min)} – ${formatPrice(PRICING_RAW.domain.max)}/year`,
  },
  addOns: {
    booking: {
      min: formatPrice(PRICING_RAW.addOns.booking.min),
      max: formatPrice(PRICING_RAW.addOns.booking.max),
      range: formatRange(PRICING_RAW.addOns.booking.min, PRICING_RAW.addOns.booking.max),
    },
    ecommerce: {
      min: formatPrice(PRICING_RAW.addOns.ecommerce.min),
      max: formatPrice(PRICING_RAW.addOns.ecommerce.max),
      range: formatRange(PRICING_RAW.addOns.ecommerce.min, PRICING_RAW.addOns.ecommerce.max),
    },
    seoRetainer: {
      min: formatPrice(PRICING_RAW.addOns.seoRetainer.min),
      max: formatPrice(PRICING_RAW.addOns.seoRetainer.max),
      range: formatRange(PRICING_RAW.addOns.seoRetainer.min, PRICING_RAW.addOns.seoRetainer.max),
      rangeMonthly: `${formatPrice(PRICING_RAW.addOns.seoRetainer.min)} – ${formatPrice(PRICING_RAW.addOns.seoRetainer.max)}/mo`,
    },
    copywriting: {
      min: formatPrice(PRICING_RAW.addOns.copywriting.min),
      max: formatPrice(PRICING_RAW.addOns.copywriting.max),
      range: formatRange(PRICING_RAW.addOns.copywriting.min, PRICING_RAW.addOns.copywriting.max),
    },
  },
  agency: {
    basicRange: formatRange(PRICING_RAW.agency.basic.min, PRICING_RAW.agency.basic.max),
    growthRange: formatRange(PRICING_RAW.agency.growth.min, PRICING_RAW.agency.growth.max),
    premiumRange: `${formatPrice(PRICING_RAW.agency.premium.min)}+`,
    seoRange: formatRange(PRICING_RAW.agency.seo.min, PRICING_RAW.agency.seo.max),
    mobileRange: formatRange(PRICING_RAW.agency.mobile.min, PRICING_RAW.agency.mobile.max),
    overpayRange: formatRange(PRICING_RAW.agency.overpay.min, PRICING_RAW.agency.overpay.max),
    seoAddonApprox: formatPrice(50000),
  },
  misc: {
    gymIntro: formatPrice(PRICING_RAW.misc.gymIntro),
    webAppMvpRange: formatRange(PRICING_RAW.misc.webAppMvp.min, PRICING_RAW.misc.webAppMvp.max, "+"),
  }
};

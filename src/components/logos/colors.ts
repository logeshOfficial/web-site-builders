/** Brand palette for logo concepts */

export const logoColors = {

  teal: "#0d9488", // teal-600

  tealDark: "#0f766e", // teal-700

  tealLight: "#14b8a6", // teal-500

  slate: "#0f172a", // slate-900

  slateMid: "#334155", // slate-700

  slateLight: "#64748b", // slate-500

  white: "#ffffff",

  gold: "#b8860b", // dark goldenrod — accent for bold concepts

  goldLight: "#d4a853",

} as const;



/** Aries (Fire / Mars) palettes for Concept A — professional, not cartoon. Geometry: ./paths.ts */

export const ariesPalettes = {

  marsRedGold: {

    name: "Mars Red + Gold",

    description: "Mars fire energy — deep maroon triangle, scarlet L, gold accent.",

    triangle: "#6B1D2A",

    uprightL: "#D6392B",

    mirroredL: "#C9A227",

    stroke: "#D6392B",

  },

  coralWhite: {

    name: "Coral + White",

    description: "Coral lucky red with crisp white contrast on maroon base.",

    triangle: "#5C1820",

    uprightL: "#E8735C",

    mirroredL: "#FFFFFF",

    stroke: "#E8735C",

  },

  crimsonGold: {

    name: "Crimson + Gold",

    description: "Deep crimson leadership tone paired with gold prosperity accent.",

    triangle: "#4A1018",

    uprightL: "#9B1B30",

    mirroredL: "#B8860B",

    stroke: "#9B1B30",

  },

  bloodstone: {

    name: "Bloodstone",

    description:

      "Aries birthstone energy — deep green courage base, scarlet L for vitality, gold mirrored L for grounded prosperity.",

    triangle: "#1B4332",

    uprightL: "#C41E3A",

    mirroredL: "#C9A227",

    stroke: "#C41E3A",

  },

  diamond: {

    name: "Diamond",

    description:

      "April clarity — navy-slate triangle for focus, white L for truth, silver mirrored L for refined strength (diamond birthstone).",

    triangle: "#1E293B",

    uprightL: "#FFFFFF",

    mirroredL: "#CBD5E1",

    stroke: "#E2E8F0",

  },

  fireElement: {

    name: "Fire Element",

    description:

      "Pure Aries fire — orange-red Mars triangle, bright flame L, yellow-gold mirrored L for spark, luck, and bold new starts.",

    triangle: "#C2410C",

    uprightL: "#F97316",

    mirroredL: "#FACC15",

    stroke: "#F97316",

  },

  marsMoon: {

    name: "Mars + Moon",

    description:

      "Mars courage meets lunar calm — burgundy base, coral fire L, soft silver-white mirrored L for balanced leadership.",

    triangle: "#6B2737",

    uprightL: "#E8735C",

    mirroredL: "#F1F5F9",

    stroke: "#E8735C",

  },

  tealTrust: {

    name: "Teal Trust",

    description:

      "Agency teal for credibility and trust, coral mirrored L accent — professional presence with an Aries fire touch.",

    triangle: "#115E59",

    uprightL: "#0D9488",

    mirroredL: "#E8735C",

    stroke: "#0D9488",

  },

} as const;



export type AriesPaletteKey = keyof typeof ariesPalettes;



/** Default Aries palette wired into Header, Footer, and favicon */

export const defaultAriesPalette: AriesPaletteKey = "marsRedGold";



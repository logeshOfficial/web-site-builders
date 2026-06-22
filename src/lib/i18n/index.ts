import { en } from "./en";
import { ta } from "./ta";
import type { Locale, Translation } from "./types";

export * from "./types";

const translations: Record<Locale, Translation> = { en, ta };

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export { en, ta };

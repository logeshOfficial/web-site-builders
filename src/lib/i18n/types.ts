import { en } from "./en";

export type Locale = "en" | "ta";

export const LOCALES: Locale[] = ["en", "ta"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "bwm-locale";

export type NavKey =
  | "home"
  | "whatIsSeo"
  | "whatIsDomainHosting"
  | "services"
  | "showcase"
  | "pricing"
  | "about"
  | "contact";

type Stringify<T> = T extends readonly (infer U)[]
  ? readonly Stringify<U>[]
  : T extends object
    ? { readonly [K in keyof T]: Stringify<T[K]> }
    : string;

export type Translation = Stringify<typeof en>;

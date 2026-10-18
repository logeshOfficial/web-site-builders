"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  getTranslations,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Translation,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const localeListeners = new Set<() => void>();
let fallbackLocale: Locale | null = null;

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  if (fallbackLocale !== null) return fallbackLocale;
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored === "ta" ? "ta" : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

function subscribeToLocale(callback: () => void) {
  localeListeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === LOCALE_STORAGE_KEY || event.key === null) {
      fallbackLocale = null;
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    localeListeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function serverLocale(): Locale {
  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, readStoredLocale, serverLocale);

  const setLocale = useCallback((next: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      fallbackLocale = null;
    } catch {
      // Keep language switching usable when browser storage is unavailable.
      fallbackLocale = next;
    }
    localeListeners.forEach((listener) => listener());
  }, []);

  const t = useMemo(() => getTranslations(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useTranslation() {
  const { locale, setLocale, t } = useLanguage();
  return { locale, setLocale, t };
}

/** Replace {key} placeholders in translation strings */
export function interpolate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in vars ? String(vars[key]) : `{${key}}`,
  );
}

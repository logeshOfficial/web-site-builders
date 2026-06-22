"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export function HtmlLang() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale === "ta" ? "ta-IN" : "en-IN";
  }, [locale]);

  return null;
}

"use client";

import { HtmlLang } from "@/components/HtmlLang";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLang />
      {children}
    </LanguageProvider>
  );
}

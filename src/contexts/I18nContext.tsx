import React, { createContext, useContext, useMemo } from "react";
import enMessages from "@/locales/en.json";
import { flattenMessages } from "@/utils/flattenMessages";

export type Messages = Record<string, string>;

const EN_FALLBACK: Messages = flattenMessages(
  enMessages as Record<string, unknown>,
);

export interface I18nValue {
  lang: string;
  messages: Messages;
  t: (id: string) => string;
  /** Path for a locale (e.g. "" for en, "/es" for es) for use in links */
  localePath: (locale: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  lang,
  messages,
  children,
}: {
  lang: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = useMemo<I18nValue>(() => {
    const t = (id: string) => {
      const msg = messages[id];
      if (typeof msg === "string" && msg.length > 0) return msg;
      const fallback = EN_FALLBACK[id];
      if (typeof fallback === "string") return fallback;
      return id;
    };
    const localePath = (locale: string) => {
      if (locale === "en") return "";
      return `/${locale}`;
    };
    return { lang, messages, t, localePath };
  }, [lang, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

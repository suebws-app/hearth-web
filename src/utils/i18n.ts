import enMessages from "@/locales/en.json";
import { flattenMessages } from "@/utils/flattenMessages";

export type Messages = Record<string, string>;

const EN_FALLBACK: Messages = flattenMessages(
  enMessages as Record<string, unknown>,
);

export function createT(messages: Messages) {
  return (id: string): string => {
    const msg = messages[id];
    if (typeof msg === "string" && msg.length > 0) return msg;
    const fallback = EN_FALLBACK[id];
    if (typeof fallback === "string") return fallback;
    return id;
  };
}

export function localePath(locale: string): string {
  return locale === "en" ? "" : `/${locale}`;
}

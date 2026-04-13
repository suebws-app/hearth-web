import React, { useState } from "react";
import { I18nProvider } from "@/contexts/I18nContext";
import ResetPassword from "@/features/reset-password/ResetPassword";
import LanguageSelectorInline from "@/components/LanguageSelectorInline";
import type { Messages } from "@/contexts/I18nContext";

export interface ResetPasswordWithI18nProps {
  allMessages: Record<string, Messages>;
}

function getInitialLang(allMessages: Record<string, Messages>): string {
  if (typeof window === "undefined") return "en";
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && allMessages[urlLang]) return urlLang;
  return "en";
}

export default function ResetPasswordWithI18n({
  allMessages,
}: ResetPasswordWithI18nProps) {
  const [lang, setLang] = useState(() => getInitialLang(allMessages));
  const messages = allMessages[lang] ?? allMessages["en"];

  return (
    <I18nProvider lang={lang} messages={messages}>
      <ResetPassword />
      <LanguageSelectorInline currentLang={lang} onChangeLang={setLang} />
    </I18nProvider>
  );
}

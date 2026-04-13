import React, { useEffect, useState } from "react";
import { I18nProvider } from "@/contexts/I18nContext";
import ConfirmRecovery from "@/features/reset-password/ConfirmRecovery";
import LanguageSelectorInline from "@/components/LanguageSelectorInline";
import type { Messages } from "@/contexts/I18nContext";

export interface ConfirmRecoveryWithI18nProps {
  allMessages: Record<string, Messages>;
}

export default function ConfirmRecoveryWithI18n({
  allMessages,
}: ConfirmRecoveryWithI18nProps) {
  const [lang, setLang] = useState("en");
  const messages = allMessages[lang] ?? allMessages["en"];

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && allMessages[urlLang]) {
      setLang(urlLang);
    }
  }, [allMessages]);

  return (
    <I18nProvider lang={lang} messages={messages}>
      <ConfirmRecovery />
      <LanguageSelectorInline currentLang={lang} onChangeLang={setLang} />
    </I18nProvider>
  );
}

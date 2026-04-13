import React, { useState } from "react";
import IconGlobe from "@/assets/icons/globe";
import { useI18n } from "@/contexts/I18nContext";
import { siteConfig } from "@/config/site";
import { LOCALES } from "@/data/locales";
import { cn } from "@/components/ui/utils";

export default function LanguageSelector() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, lang, localePath } = useI18n();

  return (
    <div className="relative flex items-center gap-4">
      <button
        type="button"
        onClick={() => setLangMenuOpen((o) => !o)}
        className="focus:ring-primary/50 rounded p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2"
        aria-expanded={langMenuOpen}
        aria-haspopup="true"
        aria-label={t("landing.footer.aria_language")}
      >
        <IconGlobe className="h-5 w-5" />
      </button>
      {langMenuOpen && (
        <div
          className="absolute bottom-8 right-0 z-50 max-h-[18rem] w-40 overflow-y-auto rounded-lg border border-border bg-background py-1 shadow-lg"
          role="menu"
        >
          {siteConfig.locales.map((locale) => (
            <a
              key={locale}
              href={localePath(locale) || "/"}
              role="menuitem"
              onClick={() => setLangMenuOpen(false)}
              className={cn(
                "block w-full px-4 py-2 text-left transition-colors type-small-body",
                lang === locale
                  ? "bg-muted font-medium text-foreground"
                  : "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
              )}
            >
              {LOCALES[locale] ?? locale}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

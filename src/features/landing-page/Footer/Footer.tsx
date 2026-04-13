import React from "react";
import IconHeart from "@/assets/icons/heart";
import { useI18n } from "@/contexts/I18nContext";
import LanguageSelector from "./LanguageSelector";
import Logo from "@/assets/icons/logo";

export default function Footer() {
  const { t, lang, localePath } = useI18n();
  const homeHref = `${localePath(lang) || ""}/`;
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto mb-12 grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <a
            href={homeHref}
            className="focus:ring-primary/40 mb-4 inline-flex items-center gap-2 rounded-md text-foreground outline-none focus:ring-2"
            aria-label="Hearth"
          >
            <Logo className="h-10 w-10" />
            <span className="font-bold type-heading-4">Hearth</span>
          </a>
          <p className="mb-4 leading-relaxed text-muted-foreground type-small-body">
            {t("landing.footer.tagline")}
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="text-muted-foreground type-small-body">
          {t("landing.footer.copyright")}
        </p>
        <LanguageSelector />
      </div>
    </footer>
  );
}

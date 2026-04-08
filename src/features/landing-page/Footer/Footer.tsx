import React from "react";
import IconHeart from "@/assets/icons/heart";
import { useI18n } from "@/contexts/I18nContext";
import LanguageSelector from "./LanguageSelector";
import Logo from "@/assets/icons/logo";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 text-foreground">
            <Logo className="w-10 h-10" />
            <span className="font-bold text-xl">Hearth</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
            {t(
              "landing.footer.tagline",
              "Making the world a more loving place, one couple at a time.",
            )}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-border">
        <p className="text-sm text-muted-foreground">
          {t(
            "landing.footer.copyright",
            "© 2026 Hearth App. All rights reserved.",
          )}
        </p>
        <LanguageSelector />
      </div>
    </footer>
  );
}

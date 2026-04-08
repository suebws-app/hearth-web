import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import StoreButtons from "../HeroSection/StoreButtons";
import IconDownload from "@/assets/icons/download";

export default function Cta() {
  const { t } = useI18n();
  const colors = { primary: "#9b59b6" };
  return (
    <section
      className="px-6 py-24 md:px-12 text-center"
      style={{ backgroundColor: `${colors.primary}10` }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">
          {t("landing.cta.title", "Ready to prioritize your relationship?")}
        </h2>
        <p className="type-heading-4 mb-10 opacity-80">
          {t(
            "landing.cta.subtitle",
            "Join the community of couples who are intentionally building a better future together.",
          )}
        </p>
        <div className="scale-110">
          <StoreButtons />
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2 type-body font-semibold">
            <IconDownload className="w-4 h-4" />{" "}
            {t("landing.cta.available_on", "Available on iOS & coming soon on Android")}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import StoreButtons from "../HeroSection/StoreButtons";
import IconDownload from "@/assets/icons/download";

export default function Cta() {
  const { t } = useI18n();
  const colors = { primary: "#9b59b6" };
  return (
    <section
      className="px-6 py-24 text-center md:px-12"
      style={{ backgroundColor: `${colors.primary}10` }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <h2 className="mb-6 font-bold type-display">
          {t("landing.cta.title")}
        </h2>
        <p className="mb-10 opacity-80 type-heading-4">
          {t("landing.cta.subtitle")}
        </p>
        <div className="scale-110">
          <StoreButtons />
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2 font-semibold type-body">
            <IconDownload className="h-4 w-4" /> {t("landing.cta.available_on")}
          </div>
        </div>
      </div>
    </section>
  );
}

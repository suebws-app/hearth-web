import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import AppMockup from "./AppMockup";
import StoreButtons from "./StoreButtons";
import IconSparkles from "@/assets/icons/sparkles";
import IconHeart from "@/assets/icons/heart";
import IconShield from "@/assets/icons/shield";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center px-6 py-12 lg:px-12 lg:py-24 gap-12 max-w-7xl mx-auto w-full">
      <div
        className="flex-1 space-y-8 animate-fade-in-up"
        style={{ animationFillMode: "backwards" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">
          <IconSparkles className="w-4 h-4" />
          <span>{t("landing.hero.badge", "The #1 App for Couples")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          {t("landing.hero.title_line1", "Deepen Your Connection.")}{" "}
          <br />
          <span className="text-primary">
            {t("landing.hero.title_line2", "Every Single Day.")}
          </span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-lg text-muted-foreground">
          {t(
            "landing.hero.subtitle",
            "Hearth helps you build a stronger, more intimate relationship through shared memories, daily questions, and meaningful interactions.",
          )}
        </p>

        <StoreButtons />

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <IconShield className="w-4 h-4" />
            <span>{t("landing.hero.private_secure", "Private & Secure")}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconHeart className="w-4 h-4" />
            <span>{t("landing.hero.trusted_by", "Trusted by 50k+ couples")}</span>
          </div>
        </div>
      </div>
      <AppMockup />
    </div>
  );
}

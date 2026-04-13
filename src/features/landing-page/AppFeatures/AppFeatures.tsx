import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { features } from "@/data/data";
import { AnimateInView } from "@/components/AnimateInView";

export default function AppFeatures() {
  const { t } = useI18n();
  return (
    <section className="bg-black/5 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-bold type-heading-2">
            {t("landing.features.section_title")}
          </h2>
          <p className="text-muted-foreground type-subtitle">
            {t("landing.features.section_subtitle")}
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          {features.map((feature, index) => (
            <AnimateInView
              key={index}
              className="flex flex-col items-center md:items-start"
              delay={index * 100}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-bold type-heading-4">
                {t(feature.titleKey)}
              </h3>
              <p className="leading-relaxed text-muted-foreground type-body">
                {t(feature.descriptionKey)}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

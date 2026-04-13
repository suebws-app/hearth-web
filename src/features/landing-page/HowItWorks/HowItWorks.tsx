import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { steps } from "@/data/data";
import { AnimateInView } from "@/components/AnimateInView";

export default function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-bold type-heading-1">
            {t("landing.how_it_works.title")}
          </h2>
          <p className="text-muted-foreground type-subtitle">
            {t("landing.how_it_works.subtitle")}
          </p>
        </div>

        <div className="relative mt-10 grid gap-8 md:grid-cols-3">
          <div className="absolute left-[15%] right-[15%] top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50 md:block"></div>

          {steps.map((step, index) => (
            <AnimateInView
              key={index}
              className="group relative z-10 flex flex-col items-center text-center"
              delay={index * 200}
            >
              <div className="relative mb-8 pt-2">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-primary-foreground">{step.icon}</div>
                </div>

                <div className="absolute -right-3 -top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background font-bold text-primary shadow-lg type-subtitle">
                  {index + 1}
                </div>
              </div>

              <div className="rounded-2xl p-4 transition-colors duration-300">
                <h3 className="mb-3 font-bold type-heading-4">
                  {t(step.titleKey)}
                </h3>
                <p className="mx-auto max-w-xs leading-relaxed text-muted-foreground type-body">
                  {t(step.descriptionKey)}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

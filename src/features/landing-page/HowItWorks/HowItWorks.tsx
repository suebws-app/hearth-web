import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { steps } from "@/data/data";
import { getDefaultMessage } from "@/utils/defaultMessages";
import { AnimateInView } from "@/components/AnimateInView";

export default function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-24 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {t("landing.how_it_works.title", "How it works")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              "landing.how_it_works.subtitle",
              "Three simple steps to start building a deeper connection today.",
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mt-10">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>

          {steps.map((step, index) => (
            <AnimateInView
              key={index}
              className="relative z-10 flex flex-col items-center text-center group"
              delay={index * 200}
            >
              <div className="relative mb-8 pt-2">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg relative z-10 bg-primary transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-primary-foreground">{step.icon}</div>
                </div>

                <div className="absolute -top-3 -right-3 w-10 h-10 border-border text-primary rounded-full bg-background flex items-center justify-center font-bold shadow-lg text-lg border-2 z-20">
                  {index + 1}
                </div>
              </div>

              <div className="rounded-2xl p-4 transition-colors duration-300">
                <h3 className="type-heading-4 font-bold mb-3">
                  {t(step.titleKey, getDefaultMessage(step.titleKey))}
                </h3>
                <p className="max-w-xs mx-auto type-body leading-relaxed text-muted-foreground">
                  {t(
                    step.descriptionKey,
                    getDefaultMessage(step.descriptionKey),
                  )}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

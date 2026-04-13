import React, { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { faqs } from "@/data/data";
import IconArrowRight from "@/assets/icons/arrow-right";
import { AnimateInView } from "@/components/AnimateInView";
import { cn } from "@/components/ui/utils";

export default function Faq() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleOpenFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="border-t border-border bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <AnimateInView className="mb-12">
          <h2 className="text-center font-bold type-heading-2">
            {t("landing.faq.section_title")}
          </h2>
        </AnimateInView>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimateInView key={i} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  className={cn(
                    "flex w-full items-center justify-between px-6 py-4 text-left font-bold",
                    openFaq === i && "accordion-open",
                  )}
                  onClick={() => handleOpenFaq(i)}
                >
                  <span>{t(faq.questionKey)}</span>
                  <span className="accordion-chevron inline-flex" aria-hidden>
                    <IconArrowRight className="h-4 w-4 rotate-90 transform" />
                  </span>
                </button>
                <div
                  className={cn("accordion-panel", openFaq === i && "is-open")}
                >
                  <div>
                    <div className="px-6 pb-6 pt-0 leading-relaxed text-muted-foreground type-small-body">
                      {t(faq.answerKey)}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

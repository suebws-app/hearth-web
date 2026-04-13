import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { testimonials } from "@/data/data";
import IconHeart from "@/assets/icons/heart";
import IconStar from "@/assets/icons/star";
import IconCheck from "@/assets/icons/check";
import { AnimateInView } from "@/components/AnimateInView";

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-[#0F0A1E] py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/30 mix-blend-screen blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/25 mix-blend-screen blur-[120px]"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 mix-blend-screen blur-[140px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <AnimateInView className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 font-medium text-primary-foreground backdrop-blur-sm type-small-body">
            <IconHeart className="h-4 w-4 text-pink-400" fill />
            <span>{t("landing.testimonials.badge")}</span>
          </div>
          <h2 className="mb-6 font-bold tracking-tight text-primary-foreground type-display">
            {t("landing.testimonials.section_title")}
          </h2>
          <p className="mx-auto max-w-2xl text-body text-muted-foreground">
            {t("landing.testimonials.section_subtitle")}
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimateInView key={i} className="flex flex-col" delay={i * 100}>
              <div className="flex min-w-80 flex-1 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-white/10">
                <div className="mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconStar
                      key={star}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                      fill
                    />
                  ))}
                </div>

                <blockquote className="mb-8 flex-1 font-medium leading-relaxed text-primary-foreground type-heading-4">
                  &quot;{t(testimonial.quoteKey)}&quot;
                </blockquote>

                <div className="mt-auto flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-primary to-accent font-bold text-white"
                    aria-hidden
                  >
                    {getInitials(t(testimonial.authorKey))}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-primary-foreground type-body">
                        {t(testimonial.authorKey)}
                      </p>
                      <div className="rounded-full bg-blue-500/20 p-0.5">
                        <IconCheck className="h-3 w-3 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200/70 type-small-body">
                      <span>{t(testimonial.locationKey)}</span>
                      <span className="opacity-50">•</span>
                      <span>{t(testimonial.yearsKey)}</span>
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

function getInitials(name: string): string {
  const parts = name.split(/[\s&]+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase() || "•";
}

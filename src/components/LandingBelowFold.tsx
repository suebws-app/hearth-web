import React from "react";
import { I18nProvider } from "@/contexts/I18nContext";
import type { Messages } from "@/contexts/I18nContext";
import Stats from "@/features/landing-page/Stats/Stats";
import AppFeatures from "@/features/landing-page/AppFeatures/AppFeatures";
import HowItWorks from "@/features/landing-page/HowItWorks/HowItWorks";
import Testimonials from "@/features/landing-page/Testimonials/Testimonials";
import Faq from "@/features/landing-page/Faq/Faq";
import Cta from "@/features/landing-page/Cta/Cta";
import Footer from "@/features/landing-page/Footer/Footer";

export interface LandingBelowFoldProps {
  lang: string;
  messages: Messages;
}

export default function LandingBelowFold({
  lang,
  messages,
}: LandingBelowFoldProps) {
  return (
    <I18nProvider lang={lang} messages={messages}>
      <Stats />
      <AppFeatures />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </I18nProvider>
  );
}

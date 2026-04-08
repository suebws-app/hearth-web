import Header from "./Header";
import React, { lazy, Suspense } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";
import Footer from "./Footer/Footer";

const AppFeatures = lazy(() => import("./AppFeatures/AppFeatures"));
const HowItWorks = lazy(() => import("./HowItWorks/HowItWorks"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Faq = lazy(() => import("./Faq/Faq"));
const Cta = lazy(() => import("./Cta/Cta"));

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <Stats />
      <Suspense fallback={null}>
        <AppFeatures />
      </Suspense>
      <Suspense fallback={null}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <Faq />
      </Suspense>
      <Suspense fallback={null}>
        <Cta />
      </Suspense>
      <Footer />
    </div>
  );
}

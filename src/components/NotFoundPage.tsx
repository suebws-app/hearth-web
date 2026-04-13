import React, { useState } from "react";
import IconHome from "@/assets/icons/home";
import { I18nProvider, useI18n } from "@/contexts/I18nContext";
import Logo from "@/assets/icons/logo";
import Footer from "@/features/landing-page/Footer/Footer";
import { Button } from "@/components/ui/Button";
import type { Messages } from "@/contexts/I18nContext";

export interface NotFoundPageProps {
  allMessages: Record<string, Messages>;
}

function detectLangFromPath(allMessages: Record<string, Messages>): string {
  if (typeof window === "undefined") return "en";
  const segment = window.location.pathname.split("/").filter(Boolean)[0];
  if (segment && allMessages[segment]) return segment;
  return "en";
}

export default function NotFoundPage({ allMessages }: NotFoundPageProps) {
  const [lang] = useState(() => detectLangFromPath(allMessages));
  const messages = allMessages[lang] ?? allMessages["en"] ?? {};

  return (
    <I18nProvider lang={lang} messages={messages}>
      <NotFoundContent />
    </I18nProvider>
  );
}

function NotFoundContent() {
  const { t, lang, localePath } = useI18n();
  const homeHref = `${localePath(lang) || ""}/`;

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
        <nav className="flex items-center justify-between border-b border-border bg-background px-6 py-4 md:px-12 md:py-6">
          <a
            href={homeHref}
            className="focus:ring-primary/40 flex items-center gap-2 rounded-md outline-none focus:ring-2"
            aria-label="Hearth"
          >
            <Logo className="h-8 w-8" />
            <span className="font-bold tracking-tight type-heading-4">
              Hearth
            </span>
          </a>
        </nav>
        <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20 md:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(var(--foreground) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="relative mx-auto w-full max-w-3xl text-center">
            <div className="animate-fade-in-scale mb-10 flex justify-center">
              <LostHeartIllustration
                ariaLabel={t("notfound.illustration_alt")}
              />
            </div>

            <div className="animate-fade-in-up">
              <span className="bg-card/60 mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                {t("notfound.error_code")}
              </span>

              <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                {t("notfound.header")}
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground md:text-lg">
                {t("notfound.description")}
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="hover:bg-primary/90 shadow-primary/20 h-12 rounded-full bg-primary px-7 text-primary-foreground shadow-lg"
                >
                  <a
                    href={homeHref}
                    className="inline-flex items-center gap-2"
                    aria-label={t("notfound.go_back")}
                  >
                    <IconHome className="h-4 w-4" aria-hidden />
                    {t("notfound.go_back")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

function LostHeartIllustration({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg
      width="260"
      height="220"
      viewBox="0 0 260 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_20px_40px_rgba(155,89,182,0.25)]"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="130" cy="115" r="95" fill="url(#glow)" />

      <ellipse
        cx="130"
        cy="115"
        rx="90"
        ry="30"
        stroke="url(#orbitGrad)"
        strokeWidth="1.5"
        strokeDasharray="3 6"
        fill="none"
        transform="rotate(-12 130 115)"
      />

      <circle cx="42" cy="58" r="3" fill="var(--accent)" opacity="0.7">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="220" cy="45" r="2.5" fill="var(--primary)" opacity="0.8">
        <animate
          attributeName="opacity"
          values="1;0.2;1"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="210" cy="180" r="2" fill="var(--accent)" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.2;0.9;0.2"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="38" cy="170" r="2.5" fill="var(--primary)" opacity="0.7">
        <animate
          attributeName="opacity"
          values="0.9;0.3;0.9"
          dur="2.8s"
          repeatCount="indefinite"
        />
      </circle>

      <g style={{ transformOrigin: "130px 115px" }}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 -6; 0 6; 0 -6"
          dur="4s"
          repeatCount="indefinite"
        />
        <path
          d="M130 170 C 70 130, 70 80, 105 75 C 120 73, 130 85, 130 95 C 130 85, 140 73, 155 75 C 190 80, 190 130, 130 170 Z"
          fill="url(#heartGrad)"
        />
        <path
          d="M115 98 Q 122 92, 128 98"
          stroke="var(--primary-foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M138 98 Q 145 92, 151 98"
          stroke="var(--primary-foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M118 125 Q 133 135, 148 125"
          stroke="var(--primary-foreground)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <circle
          cx="95"
          cy="110"
          r="4"
          fill="var(--primary-foreground)"
          opacity="0.35"
        />
        <circle
          cx="165"
          cy="108"
          r="3"
          fill="var(--primary-foreground)"
          opacity="0.3"
        />
      </g>

      <ellipse
        cx="130"
        cy="200"
        rx="45"
        ry="5"
        fill="var(--primary)"
        opacity="0.15"
      >
        <animate
          attributeName="rx"
          values="45;38;45"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}

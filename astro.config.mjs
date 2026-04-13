// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const LOCALES = [
  "en",
  "es",
  "pt",
  "it",
  "de",
  "id",
  "ms",
  "tr",
  "nl",
  "no",
  "th",
  "da",
  "fi",
  "ko",
  "pl",
  "ro",
  "hu",
  "lt",
  "lv",
  "et",
  "el",
  "sk",
  "sl",
  "hr",
  "cs",
  "vi",
  "uk",
  "sv",
  "fr",
  "fil",
];

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://www.hearthapp.com",
  output: "static",
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
      filter: (page) =>
        !page.includes("/reset-password") &&
        !page.includes("/auth/confirm") &&
        !page.includes("/404"),
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: LOCALES,
    routing: { prefixDefaultLocale: false },
  },
});

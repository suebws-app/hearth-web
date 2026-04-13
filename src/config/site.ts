/**
 * Central site config for SEO, manifest, and shared metadata.
 */
const siteUrl: string =
  ((typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: { PUBLIC_SITE_URL?: string } }).env
      ?.PUBLIC_SITE_URL) as string | undefined) ?? "https://www.hearthapp.com";
const twitterHandle: string =
  ((typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: { PUBLIC_TWITTER_HANDLE?: string } }).env
      ?.PUBLIC_TWITTER_HANDLE) as string | undefined) ?? "";

export const siteConfig = {
  name: "Hearth",
  shortName: "Hearth",
  siteUrl,
  defaultTitle: "Hearth App",
  defaultDescription: "Hearth — your landing page. Discover more.",
  defaultOgImage: "/og-default.png",
  twitterHandle,
  locale: "en_US",
  locales: [
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
  ] as const,
} as const;

export function getAbsoluteUrl(
  path: string,
  baseUrl: string = siteConfig.siteUrl,
): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${normalizedPath}`;
}

export interface LocalizedSeo {
  lang: string;
  description: string;
  url: string;
}

export function buildWebSiteJsonLd(seo: LocalizedSeo): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    name: siteConfig.name,
    url: seo.url,
    description: seo.description,
    inLanguage: seo.lang,
    publisher: { "@id": `${siteConfig.siteUrl}#organization` },
  };
}

export function buildOrganizationJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: getAbsoluteUrl(siteConfig.defaultOgImage),
  };
}

export function buildFaqPageJsonLd(
  faqs: { question: string; answer: string }[],
  lang: string,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function buildSoftwareAppJsonLd(seo: LocalizedSeo): object {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${siteConfig.siteUrl}#app`,
    name: siteConfig.name,
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    description: seo.description,
    inLanguage: seo.lang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "50328",
    },
  };
}

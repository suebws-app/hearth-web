export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterMenuSection {
  label: string;
  href: string;
  items: FooterLink[];
}

export const MENU_ITEMS: FooterMenuSection[] = [
  {
    label: "landing.footer.legal",
    href: "/legal",
    items: [
      {
        label: "landing.footer.privacy_policy",
        href: "/privacy-policy",
      },
      {
        label: "landing.footer.terms_of_service",
        href: "/terms-of-service",
      },
      {
        label: "landing.footer.cookie_policy",
        href: "/cookie-policy",
      },
    ],
  },
  {
    label: "landing.footer.company",
    href: "/company",
    items: [
      {
        label: "landing.footer.about_us",
        href: "/about-us",
      },
      {
        label: "landing.footer.contact",
        href: "/contact",
      },
    ],
  },
  {
    label: "landing.footer.product",
    href: "/product",
    items: [
      {
        label: "landing.footer.features",
        href: "/features",
      },
      {
        label: "landing.footer.pricing",
        href: "/pricing",
      },
      {
        label: "landing.footer.testimonials",
        href: "/testimonials",
      },
      { label: "landing.footer.faq", href: "/faq" },
    ],
  },
];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { body: "var(--font-family)", heading: "var(--font-family)" },
      fontSize: {
        display: "var(--font-size-display)",
        "heading-1": "var(--font-size-heading-1)",
        "heading-2": "var(--font-size-heading-2)",
        "heading-3": "var(--font-size-heading-3)",
        "heading-4": "var(--font-size-heading-4)",
        "heading-5": "var(--font-size-heading-5)",
        "button-text": "var(--button-text-size)",
        "button-sm-text": "var(--button-sm-text-size)",
        body: "var(--body-text-size)",
        "small-body": "var(--small-body-text-size)",
        subtitle: "var(--large-subtitle-size)",
        caption: "var(--small-caption-size)",
        label: "var(--label-text-size)",
        overline: "var(--overline-text-size)",
      },
      lineHeight: {
        none: "0px",
        display: "var(--leading-display)",
        "heading-1": "var(--leading-heading-1)",
        "heading-2": "var(--leading-heading-2)",
        "heading-3": "var(--leading-heading-3)",
        "heading-4": "var(--leading-heading-4)",
        "heading-5": "var(--leading-heading-5)",
        "button-text": "var(--button-text-leading)",
        "button-sm-text": "var(--button-sm-text-leading)",
        body: "var(--body-text-leading)",
        "small-body": "var(--small-body-text-leading)",
        subtitle: "var(--large-subtitle-leading)",
        caption: "var(--small-caption-leading)",
        label: "var(--label-text-leading)",
        overline: "var(--overline-text-leading)",
      },
      fontWeight: { normal: "400", medium: "500", semibold: "600", bold: "700" },
      type: {
        display: { fontSize: "display", fontFamily: "heading", lineHeight: "display", fontWeight: "bold" },
        "heading-1": { fontSize: "heading-1", fontFamily: "heading", lineHeight: "heading-1", fontWeight: "semibold" },
        "heading-2": { fontSize: "heading-2", fontFamily: "heading", lineHeight: "heading-2", fontWeight: "semibold" },
        "heading-3": { fontSize: "heading-3", fontFamily: "heading", lineHeight: "heading-3", fontWeight: "semibold" },
        "heading-4": { fontSize: "heading-4", fontFamily: "heading", lineHeight: "heading-4", fontWeight: "medium" },
        "heading-5": { fontSize: "heading-5", fontFamily: "heading", lineHeight: "heading-5", fontWeight: "semibold" },
        subtitle: { fontSize: "subtitle", fontFamily: "body", lineHeight: "subtitle", fontWeight: "medium" },
        body: { fontSize: "body", fontFamily: "body", lineHeight: "body", fontWeight: "normal" },
        "small-body": { fontSize: "small-body", fontFamily: "body", lineHeight: "small-body", fontWeight: "normal" },
        caption: { fontSize: "caption", fontFamily: "body", lineHeight: "caption", fontWeight: "normal" },
        label: { fontSize: "label", fontFamily: "body", lineHeight: "label", fontWeight: "medium" },
        overline: { fontSize: "overline", fontFamily: "body", lineHeight: "overline", fontWeight: "semibold" },
        button: { fontSize: "button-text", fontFamily: "body", lineHeight: "button-text", fontWeight: "medium" },
        "button-sm": { fontSize: "button-sm-text", fontFamily: "body", lineHeight: "button-sm-text", fontWeight: "medium" },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        destructive: { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
        success: "var(--success)",
        warning: "var(--warning)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        popover: { DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)" },
        brand: { gradient: "var(--brand-gradient)" },
      },
      borderRadius: { lg: "0.5rem", md: "0.375rem", sm: "0.25rem" },
      boxShadow: {
        elevated:
          "0px 10px 15px -3px rgba(155, 89, 182, 0.101961), 0px 4px 6px -4px rgba(155, 89, 182, 0.101961)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const typeStyles = theme("type");
      const utilities = {};
      if (typeStyles) {
        Object.keys(typeStyles).forEach((key) => {
          const style = typeStyles[key];
          utilities[`.type-${key}`] = {
            fontSize: theme(`fontSize.${style.fontSize}`),
            lineHeight: theme(`lineHeight.${style.lineHeight}`),
            fontWeight: theme(`fontWeight.${style.fontWeight}`),
            fontFamily: theme(`fontFamily.${style.fontFamily}`),
          };
        });
      }
      addUtilities(utilities);
    },
  ],
};

const tailwindTheme = {
  extend: {
    fontFamily: {
      body: "var(--font-family)",
      heading: "var(--font-family)",
    },
    fontSize: {
      "heading-1": "var(--font-size-heading-1)",
      "heading-2": "var(--font-size-heading-2)",
      "heading-3": "var(--font-size-heading-3)",
      "heading-4": "var(--font-size-heading-4)",
      "button-text": "var(--button-text-size)",
      body: "var(--body-text-size)",
      "small-body": "var(--small-body-text-size)",
      subtitle: "var(--large-subtitle-size)",
      caption: "var(--small-caption-size)",
    },
    lineHeight: {
      none: "0px",
      "heading-1": "var(--leading-heading-1)",
      "heading-2": "var(--leading-heading-2)",
      "heading-3": "var(--leading-heading-3)",
      "heading-4": "var(--leading-heading-4)",
      "button-text": "var(--button-text-leading)",
      body: "var(--body-text-leading)",
      "small-body": "var(--small-body-text-leading)",
      subtitle: "var(--large-subtitle-leading)",
      caption: "var(--small-caption-leading)",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    type: {
      "heading-1": {
        fontSize: "heading-1",
        fontFamily: "heading",
        lineHeight: "heading-1",
      },
      "heading-2": {
        fontSize: "heading-2",
        fontFamily: "heading",
        lineHeight: "heading-2",
      },
      "heading-3": {
        fontSize: "heading-3",
        fontFamily: "heading",
        lineHeight: "heading-3",
      },
      "heading-4": {
        fontSize: "heading-4",
        fontFamily: "heading",
        lineHeight: "heading-4",
      },
      button: {
        fontSize: "button-text",
        fontFamily: "body",
        lineHeight: "button-text",
      },
      body: { fontSize: "body", fontFamily: "body", lineHeight: "body" },
      "small-body": {
        fontSize: "small-body",
        fontFamily: "body",
        lineHeight: "small-body",
      },
      subtitle: {
        fontSize: "subtitle",
        fontFamily: "body",
        lineHeight: "subtitle",
      },
      caption: {
        fontSize: "caption",
        fontFamily: "body",
        lineHeight: "caption",
      },
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)",
      },
      muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)",
      },
      destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)",
      },
      success: "var(--success)",
      warning: "var(--warning)",
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)",
      },
      brand: { gradient: "var(--brand-gradient)" },
    },
    borderRadius: { lg: "0.5rem", md: "0.375rem", sm: "0.25rem" },
    boxShadow: {
      elevated:
        "0px 10px 15px -3px rgba(155, 89, 182, 0.101961), 0px 4px 6px -4px rgba(155, 89, 182, 0.101961)",
    },
  },
};

export default tailwindTheme;

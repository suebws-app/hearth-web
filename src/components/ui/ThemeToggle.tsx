import React, { useState, useEffect } from "react";
import IconSun from "@/assets/icons/sun";
import IconMoon from "@/assets/icons/moon";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

function getEffectiveTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const stored = document.documentElement.getAttribute(
    "data-theme",
  ) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (window.localStorage.getItem(THEME_KEY) ??
      getEffectiveTheme()) as Theme;
    applyTheme(stored);
    setTheme(stored);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Toggle theme"
      >
        <IconSun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="focus:ring-primary/50 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5" />
      ) : (
        <IconMoon className="h-5 w-5" />
      )}
    </button>
  );
}

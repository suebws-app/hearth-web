import React, { useState, useRef, useEffect } from "react";
import IconGlobe from "@/assets/icons/globe";
import { LOCALES } from "@/data/locales";
import { cn } from "@/components/ui/utils";

interface LanguageSelectorInlineProps {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}

export default function LanguageSelectorInline({ currentLang, onChangeLang }: LanguageSelectorInlineProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg px-3 py-2 border border-border bg-card shadow-md"
          aria-expanded={open}
          aria-haspopup="true"
        >
          <IconGlobe className="w-4 h-4" />
          <span>{LOCALES[currentLang] ?? currentLang}</span>
        </button>
        {open && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 py-1 w-44 rounded-lg border border-border bg-background shadow-lg z-50 max-h-[16rem] overflow-y-auto"
            role="menu"
          >
            {Object.entries(LOCALES).map(([code, name]) => (
              <button
                key={code}
                type="button"
                role="menuitem"
                onClick={() => {
                  onChangeLang(code);
                  setOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm transition-colors",
                  currentLang === code
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                )}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

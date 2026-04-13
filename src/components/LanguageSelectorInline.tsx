import React, { useState, useRef, useEffect } from "react";
import IconGlobe from "@/assets/icons/globe";
import { LOCALES } from "@/data/locales";
import { cn } from "@/components/ui/utils";

interface LanguageSelectorInlineProps {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}

export default function LanguageSelectorInline({
  currentLang,
  onChangeLang,
}: LanguageSelectorInlineProps) {
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
    <div ref={ref} className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground shadow-md transition-colors hover:text-foreground"
          aria-expanded={open}
          aria-haspopup="true"
        >
          <IconGlobe className="h-4 w-4" />
          <span>{LOCALES[currentLang] ?? currentLang}</span>
        </button>
        {open && (
          <div
            className="absolute bottom-10 left-1/2 z-50 max-h-[16rem] w-44 -translate-x-1/2 overflow-y-auto rounded-lg border border-border bg-background py-1 shadow-lg"
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
                  "block w-full px-4 py-2 text-left text-sm transition-colors",
                  currentLang === code
                    ? "bg-muted font-medium text-foreground"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
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

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/components/ui/utils";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
}

export function AnimateInView({
  children,
  className,
  style,
  delay = 0,
  once = true,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in or past the viewport when mounted
    // (e.g. after scrolling fast or when lazy-loaded below the fold),
    // reveal it immediately instead of waiting for the next intersection.
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight) {
      setInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("animate-in-view", inView && "in-view", className)}
      style={{
        ...style,
        transitionDelay: inView ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}

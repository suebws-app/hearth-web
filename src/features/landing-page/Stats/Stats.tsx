import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { stats } from "@/data/stats";
import { formatStatValue } from "@/utils/formatStat";

export default function Stats() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-muted p-2 text-primary">
              {stat.icon}
            </div>
            <div className="mb-1 font-bold text-foreground type-heading-2">
              {typeof stat.value === "number"
                ? formatStatValue(stat.value)
                : stat.value}
            </div>
            <div className="font-medium text-muted-foreground type-body">
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { MENU_ITEMS } from "@/data/menuItems";
import React from "react";
import { useI18n } from "@/contexts/I18nContext";

const MenuItem = ({ label, href }: { label: string; href: string }) => (
  <li>
    <a href={href} className="hover:underline">
      {label}
    </a>
  </li>
);

export default function Menu() {
  const { t } = useI18n();
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <div key={item.label}>
          <h4 className="mb-4 font-bold">{t(item.label)}</h4>
          <ul className="space-y-2 text-muted-foreground type-small-body">
            {item.items.map((subItem) => (
              <MenuItem
                key={subItem.label}
                label={t(subItem.label)}
                href={subItem.href}
              />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

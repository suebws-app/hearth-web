import React from "react";
import AppleLogo from "@/assets/icons/apple";
import GooglePlayLogo from "@/assets/icons/google-play";
import { useI18n } from "@/contexts/I18nContext";

export default function StoreButtons() {
  const { t } = useI18n();
  const buttonBase =
    "inline-flex h-14 items-center gap-3 rounded-xl px-6 text-left shadow-md transition-all font-medium whitespace-nowrap type-small-body";

  return (
    <div id="download" className="flex flex-col gap-4 pt-4 sm:flex-row">
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-white text-primary hover:-translate-y-1 hover:shadow-xl`}
      >
        <AppleLogo className="h-8 w-8" />
        <span className="flex flex-col leading-none">
          <span className="font-medium uppercase type-caption">
            {t("landing.store.app_store_caption")}
          </span>
          <span className="font-bold !leading-4 type-heading-4">
            {t("landing.store.app_store")}
          </span>
        </span>
      </a>
      <div
        className={`${buttonBase} bg-primary text-primary-foreground cursor-default opacity-75`}
        aria-disabled="true"
      >
        <GooglePlayLogo className="h-7 w-7" />
        <span className="flex flex-col leading-none">
          <span className="font-medium uppercase type-caption">
            {t("landing.store.google_play_coming_soon_caption")}
          </span>
          <span className="font-bold !leading-4 type-heading-4">
            {t("landing.store.google_play")}
          </span>
        </span>
      </div>
    </div>
  );
}

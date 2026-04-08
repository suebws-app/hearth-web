import { Button } from "@/components/ui/Button";
import AppleLogo from "@/assets/icons/apple";
import GooglePlayLogo from "@/assets/icons/google-play";
import React from "react";
import { useI18n } from "@/contexts/I18nContext";
import { cn } from "@/components/ui/utils";

const StoreButton = ({
  icon,
  title,
  caption,
  onClick,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "h-14 px-6 rounded-xl text-left flex items-center gap-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all",
        className,
      )}
    >
      {icon}
      <div className="flex flex-col leading-none">
        <span className={cn("type-caption uppercase font-medium")}>
          {caption}
        </span>
        <span className="type-heading-4 !leading-4 font-bold">{title}</span>
      </div>
    </Button>
  );
};

export default function StoreButtons() {
  const { t } = useI18n();
  const onGetStarted = () => {
    // TODO: link to app store
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <StoreButton
        icon={<AppleLogo className="w-8 h-8" />}
        title={t("landing.store.app_store", "App Store")}
        caption={t("landing.store.app_store_caption", "Download on the")}
        onClick={onGetStarted}
        className="bg-white text-primary"
      />
      {/* Google Play button - hidden until launch */}
      {/* <StoreButton
        icon={<GooglePlayLogo className="w-7 h-7" />}
        title={t("landing.store.google_play", "Google Play")}
        caption={t("landing.store.google_play_caption", "Get it on")}
        onClick={onGetStarted}
      /> */}
      <Button
        className="h-14 px-6 rounded-xl text-left flex items-center gap-3 shadow-md opacity-75 cursor-default"
      >
        <GooglePlayLogo className="w-7 h-7" />
        <div className="flex flex-col leading-none">
          <span className="type-caption uppercase font-medium">
            {t("landing.store.google_play_coming_soon_caption", "Coming soon on")}
          </span>
          <span className="type-heading-4 !leading-4 font-bold">
            {t("landing.store.google_play", "Google Play")}
          </span>
        </div>
      </Button>
    </div>
  );
}

import { useEffect, useState } from "react";
import Logo from "@/assets/icons/logo";
import { useI18n } from "@/contexts/I18nContext";

const API_URL =
  (import.meta as unknown as { env?: { PUBLIC_API_URL?: string } }).env
    ?.PUBLIC_API_URL ?? "http://localhost:3002/api";

export default function ConfirmRecovery() {
  const { t } = useI18n();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenHash = params.get("token_hash");
    const type = params.get("type");
    const lang = params.get("lang");

    if (!tokenHash || !type) {
      setError(t("reset_password.invalid_params"));
      return;
    }

    fetch(`${API_URL}/auth/verify-recovery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token_hash: tokenHash, type }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as {
            errorCode?: string;
            message?: string;
          } | null;
          const code = data?.errorCode;
          const key = code
            ? `reset_password.errors.${code}`
            : "reset_password.errors.generic";
          const translated = t(key);
          const message =
            translated !== key
              ? translated
              : data?.message || t("reset_password.verify_failed");
          throw new Error(message);
        }
        return res.json();
      })
      .then((data: { accessToken: string; refreshToken: string }) => {
        const langParam = lang ? `&lang=${encodeURIComponent(lang)}` : "";
        const redirectUrl = `/reset-password?access_token=${encodeURIComponent(data.accessToken)}&refresh_token=${encodeURIComponent(data.refreshToken)}${langParam}`;
        window.location.href = redirectUrl;
      })
      .catch((err: Error) => {
        setError(err.message || t("reset_password.link_error"));
      });
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <Logo className="h-14 w-14" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {t("reset_password.link_expired")}
          </h1>

          <p className="text-sm text-muted-foreground">
            {t("reset_password.request_new")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex justify-center">
          <Logo className="h-14 w-14" />
        </div>
        <h1 className="mb-2 text-xl font-bold text-foreground">
          {t("reset_password.verifying")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("reset_password.please_wait")}
        </p>
      </div>
    </div>
  );
}

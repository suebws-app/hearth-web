import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Logo from "@/assets/icons/logo";
import IconShield from "@/assets/icons/shield";
import { useI18n } from "@/contexts/I18nContext";

const API_URL =
  (import.meta as unknown as { env?: { PUBLIC_API_URL?: string } }).env
    ?.PUBLIC_API_URL ?? "http://localhost:3002/api";

export default function ResetPassword() {
  const { t } = useI18n();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("access_token") || !params.get("refresh_token")) {
      window.location.replace("/404");
    }
  }, []);

  const passwordsMatch = password === confirmPassword;
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isValid =
    hasMinLength &&
    hasUppercase &&
    hasNumber &&
    passwordsMatch &&
    confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (!accessToken || !refreshToken) {
      setError(t("reset_password.missing_tokens"));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken,
          refreshToken,
          newPassword: password,
        }),
      });

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
        const fallback =
          data?.message ||
          t("reset_password.errors.generic") ||
          t("reset_password.failed");
        setError(translated !== key ? translated : fallback);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError(t("reset_password.generic_error"));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-success/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--success)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {t("reset_password.success_title")}
          </h1>
          <p className="mb-8 text-muted-foreground">
            {t("reset_password.success_message")}
          </p>
          <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
            {t("reset_password.close_page")}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex justify-center">
            <Logo className="h-14 w-14" />
          </div>
          <h1 className="mb-1 text-2xl font-bold text-foreground">
            {t("reset_password.title")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("reset_password.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                {t("reset_password.new_password")}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("reset_password.new_password_placeholder")}
                  className="focus:ring-primary/30 w-full rounded-xl border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-foreground"
              >
                {t("reset_password.confirm_password")}
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t("reset_password.confirm_password_placeholder")}
                  className="focus:ring-primary/30 w-full rounded-xl border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="mt-1 text-xs text-destructive">
                  {t("reset_password.passwords_do_not_match")}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-border bg-card p-4">
            <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
              <IconShield className="h-3.5 w-3.5" />
              <span className="font-medium">
                {t("reset_password.requirements_title")}
              </span>
            </div>
            <PasswordRule
              met={hasMinLength}
              label={t("reset_password.min_characters")}
            />
            <PasswordRule
              met={hasUppercase}
              label={t("reset_password.one_uppercase")}
            />
            <PasswordRule
              met={hasNumber}
              label={t("reset_password.one_number")}
            />
          </div>

          {error && (
            <div className="border-destructive/30 bg-destructive/5 rounded-xl border p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={!isValid || isLoading}
            className="hover:bg-primary/90 h-12 w-full rounded-xl bg-primary text-base font-semibold text-white disabled:opacity-40"
          >
            {isLoading
              ? t("reset_password.resetting")
              : t("reset_password.submit")}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t("reset_password.having_trouble")}{" "}
          <a
            href="mailto:support@hearth-app.love"
            className="text-primary hover:underline"
          >
            {t("reset_password.contact_support")}
          </a>
        </p>
      </div>
    </div>
  );
}

function PasswordRule({ met, label }: { met: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-colors ${
          met ? "bg-success" : "bg-muted"
        }`}
      >
        {met && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span
        className={`text-xs transition-colors ${
          met ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

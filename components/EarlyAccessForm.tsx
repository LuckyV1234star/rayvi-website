"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/GalleryShell";
import { PUBLIC_API_BASE } from "@/lib/site";

type Source = "hero" | "footer";
type Status = "idle" | "pending" | "ok" | "invalid" | "error";

function looksLikeEmail(value: string): boolean {
  const email = value.trim();
  return email.length > 3 && email.includes("@") && !email.startsWith("@") && !email.endsWith("@");
}

export function EarlyAccessForm({ source }: { source: Source }) {
  const { locale, t } = useLocale();
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!looksLikeEmail(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("pending");
    try {
      const response = await fetch(`${PUBLIC_API_BASE}/public/early-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          locale,
          source,
          website,
        }),
      });
      if (response.status === 400) {
        setStatus("invalid");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setEmail("");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "ok"
      ? t.hero.signupSuccess
      : status === "invalid"
        ? t.hero.signupInvalid
        : status === "error"
          ? t.hero.signupError
          : "";

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-wrap items-center gap-3">
      <label className="sr-only" htmlFor={`early-access-${source}`}>
        {t.hero.emailPlaceholder}
      </label>
      <input
        id={`early-access-${source}`}
        type="email"
        name="email"
        inputMode="email"
        autoComplete="email"
        required
        maxLength={255}
        placeholder={t.hero.emailPlaceholder}
        value={email}
        disabled={status === "pending" || status === "ok"}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === "invalid" || status === "error") setStatus("idle");
        }}
        className="min-h-11 w-56 rounded-full border border-white/16 bg-transparent px-4 text-sm text-on-surface placeholder:text-muted disabled:opacity-60"
      />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <button
        type="submit"
        disabled={status === "pending" || status === "ok"}
        className="inline-flex min-h-11 items-center rounded-full bg-(--demo-accent) px-5 text-sm font-medium text-(--demo-on) disabled:opacity-60"
      >
        {t.hero.ctaPrimary}
      </button>
      {message ? (
        <p className="text-sm text-on-surface/80" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

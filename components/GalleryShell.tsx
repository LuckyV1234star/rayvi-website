"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { copy, type Copy, type Locale } from "@/lib/copy";
import { themePresets } from "@/lib/demo-data";

type Preset = (typeof themePresets)[number];

type GalleryAccentContextValue = {
  preset: Preset;
  setPresetId: (id: Preset["id"]) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Copy;
};

const GalleryAccentContext = createContext<GalleryAccentContextValue | null>(null);

export function useGalleryAccent() {
  const value = useContext(GalleryAccentContext);
  if (!value) {
    throw new Error("useGalleryAccent must be used inside GalleryShell");
  }
  return value;
}

export function useLocale() {
  const { locale, setLocale, t } = useGalleryAccent();
  return { locale, setLocale, t };
}

export function GalleryShell({ children }: { children: ReactNode }) {
  const [presetId, setPresetId] = useState<Preset["id"]>("obsidian");
  const [locale, setLocale] = useState<Locale>("en");
  const [localeReady, setLocaleReady] = useState(false);
  const preset = themePresets.find((item) => item.id === presetId) ?? themePresets[0];
  const t = copy[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("rayvi-locale");
    if (saved === "en" || saved === "zh-Hant") setLocale(saved);
    setLocaleReady(true);
  }, []);

  useEffect(() => {
    if (!localeReady) return;
    document.documentElement.lang = locale === "zh-Hant" ? "zh-Hant" : "en";
    window.localStorage.setItem("rayvi-locale", locale);
  }, [locale, localeReady]);

  return (
    <GalleryAccentContext.Provider value={{ preset, setPresetId, locale, setLocale, t }}>
      <div
        style={
          {
            "--demo-accent": preset.primary,
            "--demo-on": preset.onPrimary,
            "--demo-secondary": preset.secondary,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </GalleryAccentContext.Provider>
  );
}

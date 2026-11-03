"use client";

import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { themePresets } from "@/lib/demo-data";

type Preset = (typeof themePresets)[number];

type GalleryAccentContextValue = {
  preset: Preset;
  setPresetId: (id: Preset["id"]) => void;
};

const GalleryAccentContext = createContext<GalleryAccentContextValue | null>(null);

export function useGalleryAccent() {
  const value = useContext(GalleryAccentContext);
  if (!value) {
    throw new Error("useGalleryAccent must be used inside GalleryShell");
  }
  return value;
}

export function GalleryShell({ children }: { children: ReactNode }) {
  const [presetId, setPresetId] = useState<Preset["id"]>("obsidian");
  const preset = themePresets.find((item) => item.id === presetId) ?? themePresets[0];

  return (
    <GalleryAccentContext.Provider value={{ preset, setPresetId }}>
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

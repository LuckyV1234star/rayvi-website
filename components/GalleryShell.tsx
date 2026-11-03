"use client";

import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { personaAccents } from "@/lib/demo-data";

type Accent = (typeof personaAccents)[number];

type GalleryAccentContextValue = {
  accent: Accent;
  setAccentId: (id: Accent["id"]) => void;
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
  const [accentId, setAccentId] = useState<Accent["id"]>("iris");
  const accent = personaAccents.find((item) => item.id === accentId) ?? personaAccents[0];

  return (
    <GalleryAccentContext.Provider value={{ accent, setAccentId }}>
      <div
        style={
          {
            "--demo-accent": accent.accent,
            "--demo-on": accent.onAccent,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </GalleryAccentContext.Provider>
  );
}

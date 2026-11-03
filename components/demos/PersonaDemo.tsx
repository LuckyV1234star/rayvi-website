"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { useGalleryAccent } from "@/components/GalleryShell";
import { RayviShell } from "@/components/RayviShell";
import { personaTones, themePresets } from "@/lib/demo-data";

export function PersonaDemo() {
  const { preset, setPresetId } = useGalleryAccent();
  const [toneId, setToneId] = useState<(typeof personaTones)[number]["id"]>("brief");
  const tone = personaTones.find((item) => item.id === toneId) ?? personaTones[0];

  return (
    <RayviShell active="settings" title="Settings">
      <div className="h-full overflow-y-auto px-5 py-4 rayvi:px-10 rayvi:py-8">
        <GlassPanel className="p-6 rayvi:p-7">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase">Appearance</p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-muted">
            Pick a shipped preset. The shell chrome follows it.
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
            Shipped
          </p>
          <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
            {themePresets.map((item) => {
              const selected = item.id === preset.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setPresetId(item.id)}
                  className="border px-3 py-3 text-left"
                  style={{
                    borderColor: selected ? item.primary : "rgba(229,225,228,0.12)",
                    background: selected ? "rgba(255,255,255,0.03)" : "transparent",
                  }}
                >
                  <span className="flex gap-1" aria-hidden>
                    {item.swatches.map((color) => (
                      <span
                        key={color}
                        className="size-2.5 rounded-full"
                        style={{ background: color }}
                      />
                    ))}
                  </span>
                  <span className="mt-2 block text-sm">{item.name}</span>
                  <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
                    Shipped
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-5 border-t border-white/8 pt-4">
            <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {personaTones.map((item) => {
                const selected = item.id === tone.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setToneId(item.id)}
                    className="min-h-11 border px-4 text-sm"
                    style={{
                      borderColor: selected ? preset.primary : "rgba(229,225,228,0.16)",
                      background: selected ? preset.primary : "transparent",
                      color: selected ? preset.onPrimary : "#E5E1E4",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <p
              className="mt-4 px-3 py-3 text-sm leading-relaxed"
              style={{ background: preset.primary, color: preset.onPrimary }}
            >
              {tone.line}
            </p>
          </div>
        </GlassPanel>
      </div>
    </RayviShell>
  );
}

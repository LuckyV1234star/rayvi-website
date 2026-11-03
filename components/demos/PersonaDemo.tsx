"use client";

import { useState, type CSSProperties } from "react";
import { DemoFrame } from "@/components/DemoFrame";
import { personaAccents, personaTones } from "@/lib/demo-data";

export function PersonaDemo() {
  const [accentId, setAccentId] = useState<(typeof personaAccents)[number]["id"]>("iris");
  const [toneId, setToneId] = useState<(typeof personaTones)[number]["id"]>("brief");
  const accent = personaAccents.find((item) => item.id === accentId) ?? personaAccents[0];
  const tone = personaTones.find((item) => item.id === toneId) ?? personaTones[0];

  return (
    <DemoFrame
      label="Persona"
      style={
        {
          "--demo-accent": accent.accent,
          "--demo-on": accent.onAccent,
        } as CSSProperties
      }
    >
      <fieldset className="border-0 p-0">
        <legend className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          Accent
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {personaAccents.map((item) => {
            const selected = item.id === accent.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setAccentId(item.id)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm"
                style={{
                  borderColor: selected ? item.accent : "rgba(229,225,228,0.16)",
                  background: selected ? item.accent : "transparent",
                  color: selected ? item.onAccent : "#E5E1E4",
                }}
              >
                <span
                  aria-hidden
                  className="size-2.5 rounded-full border border-black/20"
                  style={{ background: item.accent }}
                />
                {item.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-5 border-0 p-0">
        <legend className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          Tone
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {personaTones.map((item) => {
            const selected = item.id === tone.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setToneId(item.id)}
                className="min-h-11 rounded-full border px-4 text-sm"
                style={{
                  borderColor: selected ? accent.accent : "rgba(229,225,228,0.16)",
                  background: selected ? accent.accent : "transparent",
                  color: selected ? accent.onAccent : "#E5E1E4",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 rounded-2xl border border-white/10 bg-container-mid p-4">
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          You
        </p>
        <p className="mt-1 text-sm">Put Thursday&apos;s design review on my calendar at 3.</p>
        <p
          className="mt-4 rounded-2xl rounded-bl-md px-3 py-2 text-sm leading-relaxed"
          style={{ background: accent.accent, color: accent.onAccent }}
        >
          <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
            Rayvi · {tone.label}
          </span>
          {tone.line}
        </p>
      </div>
    </DemoFrame>
  );
}

"use client";

import { useState, type ReactNode } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { useGalleryAccent, useLocale } from "@/components/GalleryShell";
import { RayviShell } from "@/components/RayviShell";
import {
  characterPacks,
  emoteNames,
  emoteSrc,
  moodNames,
  moodSrc,
  portraitSrc,
} from "@/lib/character";

export function PersonaDemo() {
  const { characterId, setCharacterId } = useGalleryAccent();
  const { locale, t } = useLocale();
  const [name, setName] = useState("Rayvi");
  const [slotKey, setSlotKey] = useState("avatar:avatar");
  const bundled = characterPacks.find((pack) => pack.id === characterId)?.bundled ?? true;
  const filled = bundled ? 16 : 0;
  const track = locale === "zh-Hant" ? "tracking-normal" : "tracking-[2px]";
  const portrait = portraitSrc(characterId);

  return (
    <RayviShell active="settings" title={t.persona.title}>
      <div className="h-full overflow-y-auto px-5 py-4 rayvi:px-10 rayvi:py-8">
        <GlassPanel className="max-w-[620px] p-7">
          <p className={`font-mono text-[11px] ${track}`}>{t.persona.heading}</p>
          <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">{t.persona.blurb}</p>

          <div className="mt-5 flex items-start gap-4">
            <div className="shrink-0 text-center">
              {portrait ? (
                <img
                  src={portrait}
                  alt=""
                  className="size-[72px] rounded-full object-cover object-top"
                />
              ) : (
                <span className="inline-block size-[72px] rounded-full bg-white/8" />
              )}
              <p className="mt-1 text-[11px] text-muted">{t.persona.setProfile}</p>
            </div>
            <label className="min-w-0 flex-1">
              <span className="text-xs text-muted">{t.persona.nameLabel}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 min-h-11 w-full border border-white/12 bg-transparent px-3 text-sm"
              />
            </label>
          </div>
          <p className="mt-2 font-mono text-[11px] text-muted">{t.persona.nameHelper}</p>

          <p className={`mt-5 font-mono text-[11px] ${track}`}>{t.persona.tabIcon}</p>
          <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted">{t.persona.tabIconHelper}</p>
          <div className="mt-3 flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/4 px-4 py-3">
            <PersonIcon />
            <span className={`font-mono text-xs text-(--demo-secondary) ${locale === "zh-Hant" ? "" : "uppercase tracking-[2.4px]"}`}>
              {name.trim() || t.persona.tabPreview}
            </span>
          </div>

          <p className={`mt-5 font-mono text-[11px] ${track}`}>{t.persona.character}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {characterPacks.map((pack) => {
              const selected = pack.id === characterId;
              const cardPortrait = portraitSrc(pack.id);
              return (
                <button
                  key={pack.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCharacterId(pack.id)}
                  className="w-32 rounded-xl border bg-white/4 p-1.5 text-left"
                  style={{
                    borderColor: selected ? "var(--demo-secondary)" : "rgba(229,225,228,0.28)",
                    borderWidth: selected ? 2 : 1,
                  }}
                >
                  <span className="block h-[120px] overflow-hidden rounded-lg bg-white/6">
                    {cardPortrait ? (
                      <img src={cardPortrait} alt="" className="h-full w-full object-cover object-top" />
                    ) : null}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1 px-0.5">
                    <span className="min-w-0 flex-1 truncate text-[13px]">
                      {t.persona.packs[pack.id]}
                    </span>
                    {selected ? <CheckIcon /> : null}
                  </span>
                </button>
              );
            })}
          </div>
          {characterId === "custom" ? (
            <p className="mt-2.5 font-mono text-[11px] leading-relaxed text-muted">{t.persona.customBlurb}</p>
          ) : null}

          <div className="mt-5 flex items-center gap-3">
            <p className={`font-mono text-[11px] ${track}`}>{t.persona.artSlots}</p>
            <p className="ml-auto font-mono text-[10px] text-muted">
              {fill(t.persona.slotsUploaded, { count: filled })}
            </p>
          </div>

          <SlotGroup
            label={t.persona.groups.profile}
            meta={fill(t.persona.groupSet, { count: bundled ? 1 : 0, total: 1 })}
            track={locale === "zh-Hant" ? "tracking-normal" : "tracking-[1.4px]"}
          >
            <SlotTile
              label={t.persona.profile}
              src={portrait}
              selected={slotKey === "avatar:avatar"}
              onSelect={() => setSlotKey("avatar:avatar")}
              circle
            />
          </SlotGroup>

          <SlotGroup
            label={t.persona.groups.moods}
            meta={`3:4 · ${fill(t.persona.groupSet, { count: bundled ? moodNames.length : 0, total: moodNames.length })}`}
            track={locale === "zh-Hant" ? "tracking-normal" : "tracking-[1.4px]"}
          >
            {moodNames.map((mood) => (
              <SlotTile
                key={mood}
                label={t.persona.moods[mood]}
                src={moodSrc(characterId, mood)}
                selected={slotKey === `mood:${mood}`}
                onSelect={() => setSlotKey(`mood:${mood}`)}
                tall
              />
            ))}
          </SlotGroup>

          <SlotGroup
            label={t.persona.groups.emotes}
            meta={fill(t.persona.groupSet, { count: bundled ? emoteNames.length : 0, total: emoteNames.length })}
            track={locale === "zh-Hant" ? "tracking-normal" : "tracking-[1.4px]"}
          >
            {emoteNames.map((emote) => (
              <SlotTile
                key={emote}
                label={t.persona.emotes[emote]}
                src={emoteSrc(characterId, emote)}
                selected={slotKey === `emote:${emote}`}
                onSelect={() => setSlotKey(`emote:${emote}`)}
              />
            ))}
          </SlotGroup>

          <p className="mt-5 font-mono text-[11px] text-muted">{t.persona.filesNote}</p>
        </GlassPanel>
      </div>
    </RayviShell>
  );
}

function fill(template: string, values: Record<string, number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

function SlotGroup({
  label,
  meta,
  track,
  children,
}: {
  label: string;
  meta: string;
  track: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-3.5">
      <div className="flex items-center gap-3">
        <p className={`font-mono text-[10px] ${track}`}>{label}</p>
        <p className="ml-auto font-mono text-[10px] text-muted">{meta}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2.5">{children}</div>
    </div>
  );
}

function SlotTile({
  label,
  src,
  selected,
  onSelect,
  tall = false,
  circle = false,
}: {
  label: string;
  src: string | null;
  selected: boolean;
  onSelect: () => void;
  tall?: boolean;
  circle?: boolean;
}) {
  return (
    <button type="button" onClick={onSelect} aria-pressed={selected} className="w-[104px] text-left">
      <span
        className={`block overflow-hidden bg-white/6 ${circle ? "rounded-full" : "rounded-xl"} ${
          tall ? "aspect-[3/4]" : "aspect-square"
        } ${selected ? "ring-2 ring-(--demo-secondary)" : ""}`}
      >
        {src ? <img src={src} alt="" className="h-full w-full object-cover object-top" /> : null}
      </span>
      <span className="mt-1 block truncate text-[11px]">{label}</span>
    </button>
  );
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="text-(--demo-secondary)">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 19.2c1.2-3 3.4-4.4 6.5-4.4s5.3 1.4 6.5 4.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="shrink-0 text-(--demo-secondary)">
      <path d="M3 8.2 6.4 11.5 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

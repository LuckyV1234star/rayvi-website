export const characterPacks = [
  { id: "rayvi_default", bundled: true },
  { id: "rayvi_red_sailor", bundled: true },
  { id: "custom", bundled: false },
] as const;

export type CharacterId = (typeof characterPacks)[number]["id"];

export const moodNames = ["idle", "resting", "excited", "focused", "confused", "shy"] as const;
export const emoteNames = [
  "happy",
  "excited",
  "shy",
  "angry",
  "awkward",
  "deadpan",
  "hmmmm",
  "confuse",
  "sleep",
] as const;

export type EmoteName = (typeof emoteNames)[number];

export function characterPack(id: CharacterId) {
  return characterPacks.find((pack) => pack.id === id) ?? characterPacks[0];
}

export function portraitSrc(id: CharacterId) {
  if (!characterPack(id).bundled) return null;
  return `/rayvi/presets/${id}/portrait/portrait.png`;
}

export function moodSrc(id: CharacterId, name: (typeof moodNames)[number]) {
  if (!characterPack(id).bundled) return null;
  return `/rayvi/presets/${id}/moods/${name}.png`;
}

export function emoteSrc(id: CharacterId, name: EmoteName) {
  if (!characterPack(id).bundled) return null;
  return `/rayvi/presets/${id}/emotes/${name}.jpg`;
}

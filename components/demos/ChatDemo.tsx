"use client";

import { useRef, useState } from "react";
import { useGalleryAccent, useLocale } from "@/components/GalleryShell";
import { GlassPanel } from "@/components/GlassPanel";
import { RayviPortrait, RayviShell, RayviStatusLine } from "@/components/RayviShell";
import { emoteSrc, portraitSrc, type EmoteName } from "@/lib/character";
import { calendarEvents, sampleWeek } from "@/lib/demo-data";

type ChatKey = "opening" | "lunch" | "coffee" | "brief" | "feeling";

type ChatMessage = {
  id: string;
  role: "user" | "rayvi";
  key: ChatKey;
};

const replyKeys = ["lunch", "coffee", "brief", "feeling"] as const;

const stickerFor: Record<ChatKey, EmoteName | null> = {
  opening: "hmmmm",
  lunch: null,
  coffee: "happy",
  brief: "deadpan",
  feeling: "happy",
};

export function ChatDemo() {
  const { characterId } = useGalleryAccent();
  const { locale, t } = useLocale();
  const portrait = portraitSrc(characterId);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "u0", role: "user", key: "opening" },
    { id: "r0", role: "rayvi", key: "opening" },
  ]);
  const [draft, setDraft] = useState("");
  const [nudge, setNudge] = useState(false);
  const [day, setDay] = useState<(typeof sampleWeek)[number]["key"]>("wed");
  const idRef = useRef(2);

  function line(message: ChatMessage) {
    if (message.key === "opening") {
      return message.role === "user" ? t.chat.openingUser : t.chat.openingRayvi;
    }
    const reply = t.chat.replies[replyKeys.indexOf(message.key)];
    return message.role === "user" ? reply.user : reply.reply;
  }

  function send(raw: string) {
    const text = raw.trim();
    const index = t.chat.replies.findIndex(
      (reply) => reply.user.toLowerCase() === text.toLowerCase(),
    );
    if (index < 0) {
      setNudge(true);
      return;
    }
    const key = replyKeys[index];
    const userId = `m${idRef.current++}`;
    const rayviId = `m${idRef.current++}`;
    setNudge(false);
    setDraft("");
    setMessages((current) => [
      ...current,
      { id: userId, role: "user", key },
      { id: rayviId, role: "rayvi", key },
    ]);
  }

  const dayEvents = calendarEvents.filter((event) => event.day === day);

  return (
    <div>
    <RayviShell active="assistant" title={null}>
      <div className="flex h-full min-h-0 flex-col px-5 pt-14 pb-3 rayvi:px-10 rayvi:pt-0 rayvi:pb-8">
        <div className="flex min-h-0 flex-1 gap-6">
          <GlassPanel className="flex min-h-0 min-w-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4 rayvi:p-6" aria-live="polite">
              {messages.map((message) => {
                const sticker = message.role === "rayvi" ? stickerFor[message.key] : null;
                return (
                  <Bubble
                    key={message.id}
                    message={message}
                    text={line(message)}
                    stickerSrc={sticker ? emoteSrc(characterId, sticker) : null}
                    stickerLabel={sticker ? t.persona.emotes[sticker] : ""}
                  />
                );
              })}
            </div>
            <form
              className="border-t border-white/8 bg-container-high/40 p-3 rayvi:p-4"
              onSubmit={(event) => {
                event.preventDefault();
                send(draft);
              }}
            >
              <div className="flex items-end gap-3">
                <span
                  aria-hidden
                  className="mb-1 inline-flex size-10 items-center justify-center text-(--demo-secondary)"
                >
                  <CameraIcon />
                </span>
                <label className="sr-only" htmlFor="chat-draft">
                  {t.chat.placeholder}
                </label>
                <input
                  id="chat-draft"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder={t.chat.placeholder}
                  autoComplete="off"
                  className="min-h-11 flex-1 bg-transparent px-2 text-sm text-on-surface placeholder:text-muted/70 rayvi:rounded-none"
                />
                <button
                  type="submit"
                  aria-label={t.chat.send}
                  className="mb-0.5 hidden size-10 items-center justify-center text-(--demo-secondary) rayvi:inline-flex"
                >
                  <SendIcon />
                </button>
                <button
                  type="submit"
                  aria-label={t.chat.send}
                  className="inline-flex size-11 items-center justify-center rounded-lg bg-(--demo-accent) text-(--demo-on) rayvi:hidden"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </GlassPanel>

          <div className="hidden w-[340px] shrink-0 flex-col gap-3 rayvi:flex">
            <GlassPanel className="relative min-h-0 flex-[4]">
              {portrait ? (
                <img
                  src={portrait}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,#131315)]" />
              <div className="absolute inset-x-5 bottom-[18px]">
                <p className="flex items-center gap-2.5 text-lg tracking-wide">
                  <span className="size-2.5 rounded-full bg-(--demo-secondary)" />
                  Rayvi
                </p>
                <RayviStatusLine className="mt-1.5" />
              </div>
            </GlassPanel>
            <GlassPanel className="flex min-h-0 flex-[6] flex-col px-4 py-3">
              <div className="mb-3 h-0.5 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--demo-accent)_40%,transparent),transparent)]" />
              <div className="flex items-center gap-2">
                <p className="font-mono text-[11px] tracking-[0.16em]">{t.chat.daily}</p>
                <p className="ml-auto font-mono text-[11px] text-(--demo-accent)">{t.chat.week}</p>
              </div>
              <div className="mt-3 grid grid-cols-7 text-center font-mono text-[10px] text-muted">
                {t.calendar.sunLetters.map((letter, index) => (
                  <span key={`${letter}-${index}`}>{letter}</span>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7">
                {sampleWeek.map((item) => {
                  const selected = item.key === day;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setDay(item.key)}
                      className={
                        selected
                          ? "mx-auto flex size-8 items-center justify-center rounded-full bg-(--demo-secondary) text-sm text-bg"
                          : "mx-auto flex size-8 items-center justify-center text-sm text-on-surface"
                      }
                    >
                      {item.date}
                    </button>
                  );
                })}
              </div>
              <ul className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto border-t border-white/8 pt-2">
                {dayEvents.length === 0 ? (
                  <li className="py-4 text-center text-xs text-muted">{t.chat.empty}</li>
                ) : (
                  dayEvents.map((event) => (
                    <li key={event.id} className="text-sm">
                      <span className="font-mono text-[11px] text-muted">{event.time}</span>
                      <span className="mt-0.5 block">
                        {t.calendar.events[event.id as keyof typeof t.calendar.events].title}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </div>
    </RayviShell>
    <div className="mx-auto mt-4 flex w-full max-w-xl flex-col gap-2">
      <p
        className={`font-mono text-[11px] text-muted ${
          locale === "zh-Hant" ? "tracking-normal" : "tracking-[0.14em]"
        }`}
      >
        {t.chat.suggest}
      </p>
      {t.chat.replies.map((reply) => (
        <button
          key={reply.user}
          type="button"
          onClick={() => send(reply.user)}
          className="w-full rounded-2xl border border-(--demo-accent)/35 bg-(--demo-accent)/10 px-4 py-3 text-left text-sm leading-snug text-on-surface hover:bg-(--demo-accent)/20"
        >
          {reply.user}
        </button>
      ))}
      {nudge ? (
        <p className="text-sm text-secondary" role="status">
          {t.chat.nudge}
        </p>
      ) : null}
    </div>
    </div>
  );
}

function Bubble({
  message,
  text,
  stickerSrc,
  stickerLabel,
}: {
  message: ChatMessage;
  text: string;
  stickerSrc: string | null;
  stickerLabel: string;
}) {
  const isUser = message.role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex items-start gap-3"}>
      {isUser ? null : <RayviPortrait size={32} className="mt-1" />}
      <div
        className={
          isUser
            ? "max-w-[32rem] rounded-2xl rounded-br-sm border border-(--demo-accent)/15 bg-primary-container/20 p-4 text-[15px] leading-relaxed"
            : "max-w-[32rem] rounded-2xl rounded-bl-sm border border-white/8 bg-container-high/50 p-4 text-[15px] leading-relaxed"
        }
      >
        <p>{text}</p>
        {stickerSrc ? (
          <img
            src={stickerSrc}
            alt={stickerLabel}
            width={160}
            height={160}
            className="mt-2.5 size-40 object-contain"
          />
        ) : null}
      </div>
    </div>
  );
}

function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <rect x="2" y="5" width="14" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="9.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M2 8h12M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

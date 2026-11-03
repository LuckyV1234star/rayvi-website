"use client";

import { useRef, useState } from "react";
import { GlassPanel } from "@/components/GlassPanel";
import { RayviShell } from "@/components/RayviShell";
import { calendarEvents, cannedReplies, openingChat, sampleWeek } from "@/lib/demo-data";

type ChatMessage = {
  id: string;
  role: "user" | "rayvi";
  text: string;
};

const dayLetters = ["S", "M", "T", "W", "T", "F", "S"];

export function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(openingChat);
  const [draft, setDraft] = useState("");
  const [nudge, setNudge] = useState<string | null>(null);
  const [day, setDay] = useState<(typeof sampleWeek)[number]["key"]>("wed");
  const idRef = useRef(2);

  function send(raw: string) {
    const text = raw.trim();
    const match = cannedReplies.find(
      (reply) => reply.user.toLowerCase() === text.toLowerCase(),
    );
    if (!match) {
      setNudge("Try one of these replies. This preview only knows those lines.");
      return;
    }
    const userId = `m${idRef.current++}`;
    const rayviId = `m${idRef.current++}`;
    setNudge(null);
    setDraft("");
    setMessages((current) => [
      ...current,
      { id: userId, role: "user", text: match.user },
      { id: rayviId, role: "rayvi", text: match.reply },
    ]);
  }

  const dayEvents = calendarEvents.filter((event) => event.day === day);

  return (
    <RayviShell active="assistant" title={null}>
      <div className="flex h-full min-h-0 flex-col px-5 pt-16 pb-3 rayvi:px-10 rayvi:pt-8 rayvi:pb-8">
        <div className="flex min-h-0 flex-1 gap-6">
          <GlassPanel className="flex min-h-0 min-w-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-4 rayvi:px-6" aria-live="polite">
              {messages.map((message) => (
                <Bubble key={message.id} message={message} />
              ))}
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
                  Message Rayvi
                </label>
                <input
                  id="chat-draft"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Message Rayvi…"
                  autoComplete="off"
                  className="min-h-11 flex-1 bg-transparent px-2 text-sm text-on-surface placeholder:text-muted/70 rayvi:rounded-none"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="mb-0.5 hidden size-10 items-center justify-center text-(--demo-secondary) rayvi:inline-flex"
                >
                  <SendIcon />
                </button>
                <button
                  type="submit"
                  aria-label="Send"
                  className="inline-flex size-11 items-center justify-center rounded-lg bg-(--demo-accent) text-(--demo-on) rayvi:hidden"
                >
                  <SendIcon />
                </button>
              </div>
              <div className="mt-2 flex flex-col gap-1 pl-12">
                {cannedReplies.map((reply) => (
                  <button
                    key={reply.user}
                    type="button"
                    onClick={() => send(reply.user)}
                    className="text-left font-mono text-[11px] text-muted hover:text-on-surface"
                  >
                    {reply.user}
                  </button>
                ))}
              </div>
              {nudge ? (
                <p className="mt-2 pl-12 text-sm text-secondary" role="status">
                  {nudge}
                </p>
              ) : null}
            </form>
          </GlassPanel>

          <div className="hidden w-[340px] shrink-0 flex-col gap-3 rayvi:flex">
            <GlassPanel className="relative min-h-0 flex-[4] bg-[linear-gradient(to_bottom,transparent_40%,#131315)]">
              <div className="absolute inset-x-5 bottom-4">
                <p className="flex items-center gap-2 text-lg">
                  <span className="size-2.5 rounded-full bg-(--demo-secondary)" />
                  Rayvi
                </p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Steady
                </p>
              </div>
            </GlassPanel>
            <GlassPanel className="flex min-h-0 flex-[6] flex-col px-4 py-3">
              <div className="mb-3 h-0.5 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--demo-accent)_40%,transparent),transparent)]" />
              <div className="flex items-center gap-2">
                <p className="font-mono text-[11px] tracking-[0.16em]">Daily review</p>
                <p className="ml-auto font-mono text-[11px] text-(--demo-accent)">Current week</p>
              </div>
              <div className="mt-3 grid grid-cols-7 text-center font-mono text-[10px] text-muted">
                {dayLetters.map((letter, index) => (
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
                  <li className="py-4 text-center text-xs text-muted">Nothing scheduled.</li>
                ) : (
                  dayEvents.map((event) => (
                    <li key={event.id} className="text-sm">
                      <span className="font-mono text-[11px] text-muted">{event.time}</span>
                      <span className="mt-0.5 block">{event.title}</span>
                    </li>
                  ))
                )}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </div>
    </RayviShell>
  );
}

function Bubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex items-start gap-3"}>
      {isUser ? null : (
        <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-(--demo-accent)/30 bg-container text-[10px] text-(--demo-accent)">
          RV
        </span>
      )}
      <p
        className={
          isUser
            ? "max-w-[32rem] rounded-2xl rounded-br-sm border border-(--demo-accent)/15 bg-primary-container/20 px-4 py-3 text-[15px] leading-relaxed"
            : "max-w-[32rem] rounded-2xl rounded-bl-sm border border-white/8 bg-container-high/50 px-4 py-3 text-[15px] leading-relaxed"
        }
      >
        {message.text}
      </p>
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

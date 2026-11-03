"use client";

import { useRef, useState } from "react";
import { DemoFrame } from "@/components/DemoFrame";
import { cannedReplies, openingChat } from "@/lib/demo-data";

type ChatMessage = {
  id: string;
  role: "user" | "rayvi";
  text: string;
};

export function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(openingChat);
  const [draft, setDraft] = useState("");
  const [nudge, setNudge] = useState<string | null>(null);
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

  return (
    <DemoFrame label="Assistant">
      <div className="flex flex-col gap-3" aria-live="polite">
        {messages.map((message) => (
          <p
            key={message.id}
            className={
              message.role === "user"
                ? "ml-8 rounded-2xl rounded-br-md border border-white/10 bg-container-high px-3 py-2 text-sm leading-relaxed"
                : "mr-8 rounded-2xl rounded-bl-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm leading-relaxed"
            }
          >
            <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              {message.role === "user" ? "You" : "Rayvi"}
            </span>
            {message.text}
          </p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cannedReplies.map((reply) => (
          <button
            key={reply.user}
            type="button"
            onClick={() => send(reply.user)}
            className="min-h-11 rounded-full border border-white/15 bg-container-mid px-3 text-left text-sm text-on-surface motion-safe:transition-colors motion-safe:duration-200 hover:border-primary/50"
          >
            {reply.user}
          </button>
        ))}
      </div>

      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          send(draft);
        }}
      >
        <label className="sr-only" htmlFor="chat-draft">
          Reply
        </label>
        <input
          id="chat-draft"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Or type one of the replies above"
          autoComplete="off"
          className="min-h-11 flex-1 rounded-xl border border-white/10 bg-container-high px-3 text-sm text-on-surface placeholder:text-muted/70"
        />
        <button
          type="submit"
          className="min-h-11 rounded-xl bg-primary px-4 text-sm font-semibold text-on-primary"
        >
          Send
        </button>
      </form>
      {nudge ? (
        <p className="mt-2 text-sm text-secondary" role="status">
          {nudge}
        </p>
      ) : null}
    </DemoFrame>
  );
}

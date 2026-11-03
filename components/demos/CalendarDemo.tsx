"use client";

import { useState } from "react";
import { DemoFrame } from "@/components/DemoFrame";
import {
  calendarEvents,
  sampleWeek,
  type CalendarEvent,
} from "@/lib/demo-data";

type Selection = {
  event: CalendarEvent;
  dayLabel: string;
};

export function CalendarDemo() {
  const [selection, setSelection] = useState<Selection | null>(null);

  function close() {
    setSelection(null);
  }

  return (
    <DemoFrame label="Week">
      <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
        Sample week · 2–8 Nov
      </p>
      <div className="-mx-1 overflow-x-auto px-1 pb-1">
        <div className="grid min-w-[40rem] grid-cols-7 gap-2">
          {sampleWeek.map((day) => {
            const events = calendarEvents.filter((event) => event.day === day.key);
            return (
              <div key={day.key} className="min-h-36 rounded-xl bg-container-mid p-2">
                <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  {day.label}
                </p>
                <p className="text-sm text-on-surface">{day.date}</p>
                <div className="mt-2 flex flex-col gap-1.5">
                  {events.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() =>
                        setSelection({
                          event,
                          dayLabel: `${day.label} ${day.date} Nov`,
                        })
                      }
                      className="rounded-lg border border-primary/25 bg-primary/10 px-1.5 py-1 text-left text-[11px] leading-snug text-on-surface motion-safe:transition-colors motion-safe:duration-200 hover:border-primary"
                    >
                      <span className="block font-medium">{event.title}</span>
                      <span className="text-muted">{event.time}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-3 text-xs text-muted sm:hidden">Swipe for the rest of the week.</p>

      {selection ? (
        <div
          className="absolute inset-0 z-10 flex items-end bg-black/50 p-3 sm:items-center sm:justify-center"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-title"
            className="veil-in w-full max-w-sm rounded-2xl border border-white/15 bg-container-high p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => {
              if (event.key === "Escape") close();
            }}
          >
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              {selection.dayLabel}
            </p>
            <h3 id="event-title" className="mt-1 text-lg font-medium">
              {selection.event.title}
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
                <dt className="text-muted">Time</dt>
                <dd>{selection.event.time}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
                <dt className="text-muted">Place</dt>
                <dd>{selection.event.place}</dd>
              </div>
            </dl>
            <button
              type="button"
              autoFocus
              onClick={close}
              className="mt-5 min-h-11 w-full rounded-xl bg-primary text-sm font-semibold text-on-primary"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </DemoFrame>
  );
}

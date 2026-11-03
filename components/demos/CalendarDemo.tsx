"use client";

import { useState } from "react";
import { DeviceStage } from "@/components/DeviceStage";
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

  function open(event: CalendarEvent, dayLabel: string) {
    setSelection({ event, dayLabel });
  }

  return (
    <DeviceStage title="Calendar" active="Calendar">
      <div className="relative flex h-full min-h-0 flex-col">
        <p className="border-b border-white/10 px-4 py-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          Sample week · 2–8 Nov
        </p>

        <div className="min-h-0 flex-1 overflow-y-auto md:hidden">
          <ul>
            {sampleWeek.map((day) => {
              const events = calendarEvents.filter((event) => event.day === day.key);
              return (
                <li key={day.key} className="border-b border-white/10 px-4 py-3">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    {day.label} {day.date}
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    {events.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => open(event, `${day.label} ${day.date} Nov`)}
                        className="min-h-11 border border-(--demo-accent)/30 bg-(--demo-accent)/10 px-3 text-left text-sm"
                      >
                        <span className="block font-medium">{event.title}</span>
                        <span className="text-muted">{event.time}</span>
                      </button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden min-h-0 flex-1 grid-cols-7 gap-px overflow-auto bg-white/10 md:grid">
          {sampleWeek.map((day) => {
            const events = calendarEvents.filter((event) => event.day === day.key);
            return (
              <div key={day.key} className="min-h-full bg-container p-2">
                <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  {day.label}
                </p>
                <p className="text-sm">{day.date}</p>
                <div className="mt-2 flex flex-col gap-1.5">
                  {events.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => open(event, `${day.label} ${day.date} Nov`)}
                      className="border border-(--demo-accent)/30 bg-(--demo-accent)/10 px-1.5 py-1 text-left text-[11px] leading-snug hover:border-(--demo-accent)"
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

        {selection ? (
          <div
            className="absolute inset-0 z-10 flex items-end bg-black/55 p-3 md:items-center md:justify-center"
            onClick={close}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-title"
              className="veil-in w-full max-w-sm border border-white/15 bg-container-high p-4"
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
                className="mt-5 min-h-11 w-full bg-(--demo-accent) text-sm font-semibold text-(--demo-on)"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </DeviceStage>
  );
}

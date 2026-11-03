"use client";

import { useState } from "react";
import { useLocale } from "@/components/GalleryShell";
import { GlassPanel } from "@/components/GlassPanel";
import { RayviShell } from "@/components/RayviShell";
import { calendarEvents, sampleWeek, type CalendarEvent } from "@/lib/demo-data";
import type { Copy } from "@/lib/copy";

const startHour = 6;
const endHour = 22;
const rowHeight = 56;
const hours = Array.from({ length: endHour - startHour }, (_, index) => startHour + index);
export function CalendarDemo() {
  const { t } = useLocale();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [day, setDay] = useState<(typeof sampleWeek)[number]["key"]>("wed");
  const selected = calendarEvents.find((event) => event.id === selectedId) ?? null;
  const dayMeta = sampleWeek.find((item) => item.key === (selected?.day ?? day));

  return (
    <RayviShell active="calendar" title={t.shell.calendar}>
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex h-full min-h-0 flex-col px-5 pt-2 rayvi:hidden">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xl">{t.calendar.month}</p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted">{t.calendar.week}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-7 pb-3">
            {sampleWeek.map((item, index) => {
              const on = item.key === day;
              return (
                <button
                  key={item.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDay(item.key)}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="font-mono text-[10px] text-muted">{t.calendar.letters[index]}</span>
                  <span
                    className={
                      on
                        ? "flex size-8 items-center justify-center rounded-full bg-(--demo-secondary) text-sm text-bg"
                        : "flex size-8 items-center justify-center text-sm"
                    }
                  >
                    {item.date}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto border-t border-white/10">
            <Timeline
              events={calendarEvents.filter((event) => event.day === day)}
              onOpen={setSelectedId}
              copy={t}
            />
          </div>
        </div>

        <div className="hidden h-full min-h-0 flex-col rayvi:flex">
          <div className="flex h-20 items-center gap-3 px-10">
            <h3 className="text-3xl font-light tracking-tight">{t.calendar.range}</h3>
            <p className="ml-auto font-mono text-[11px] tracking-[0.14em] text-muted">{t.calendar.week}</p>
          </div>
          <div className="flex min-h-0 flex-1 gap-6 px-10 pb-8">
            <GlassPanel className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
              <div className="flex border-b border-white/10 bg-container/30">
                <span className="w-14 shrink-0" />
                {sampleWeek.map((item) => (
                  <span key={item.key} className="flex flex-1 flex-col items-center py-2">
                    <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
                      {t.calendar.days[item.key]}
                    </span>
                    <span
                      className={
                        item.key === "wed"
                          ? "mt-1 flex size-8 items-center justify-center rounded-full bg-(--demo-secondary) text-sm text-bg"
                          : "mt-1 flex size-8 items-center justify-center text-sm"
                      }
                    >
                      {item.date}
                    </span>
                  </span>
                ))}
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="flex" style={{ height: hours.length * rowHeight }}>
                  <div className="w-14 shrink-0">
                    {hours.map((hour) => (
                      <p
                        key={hour}
                        className="font-mono text-[10px] text-muted"
                        style={{ height: rowHeight }}
                      >
                        {String(hour).padStart(2, "0")}:00
                      </p>
                    ))}
                  </div>
                  {sampleWeek.map((item) => (
                    <div key={item.key} className="relative flex-1 border-l border-white/8">
                      {hours.map((hour) => (
                        <div
                          key={hour}
                          className="border-b border-white/5"
                          style={{ height: rowHeight }}
                        />
                      ))}
                      {calendarEvents
                        .filter((event) => event.day === item.key)
                        .map((event) => (
                          <EventBlock key={event.id} event={event} onOpen={setSelectedId} copy={t} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
            {selected ? (
              <div className="w-[340px] shrink-0">
                <Detail
                  event={selected}
                    dayLabel={`${t.calendar.days[selected.day]} ${dayMeta?.date ?? ""}`}
                  onClose={() => setSelectedId(null)}
                  copy={t}
                />
              </div>
            ) : null}
          </div>
        </div>

        {selected ? (
          <div className="absolute inset-0 z-10 flex items-end bg-black/50 p-3 rayvi:hidden">
            <Detail
              event={selected}
                    dayLabel={`${t.calendar.days[selected.day]} ${dayMeta?.date ?? ""}`}
              onClose={() => setSelectedId(null)}
              copy={t}
            />
          </div>
        ) : null}
      </div>
    </RayviShell>
  );
}

function eventText(copy: Copy, id: string) {
  return copy.calendar.events[id as keyof Copy["calendar"]["events"]];
}

function Timeline({
  events,
  onOpen,
  copy,
}: {
  events: CalendarEvent[];
  onOpen: (id: string) => void;
  copy: Copy;
}) {
  return (
    <div className="relative flex" style={{ height: hours.length * rowHeight }}>
      <div className="w-14 shrink-0">
        {hours.map((hour) => (
          <p key={hour} className="font-mono text-[10px] text-muted" style={{ height: rowHeight }}>
            {String(hour).padStart(2, "0")}:00
          </p>
        ))}
      </div>
      <div className="relative flex-1 border-l border-white/8">
        {hours.map((hour) => (
          <div key={hour} className="border-b border-white/5" style={{ height: rowHeight }} />
        ))}
        {events.map((event) => (
          <EventBlock key={event.id} event={event} onOpen={onOpen} copy={copy} />
        ))}
      </div>
    </div>
  );
}

function EventBlock({
  event,
  onOpen,
  copy,
}: {
  event: CalendarEvent;
  onOpen: (id: string) => void;
  copy: Copy;
}) {
  const title = eventText(copy, event.id).title;
  const top = ((event.startMin - startHour * 60) / 60) * rowHeight;
  const height = Math.max(((event.endMin - event.startMin) / 60) * rowHeight, 18);
  const chrome = height >= 72 ? "full" : height >= 48 ? "compact" : "strip";
  return (
    <button
      type="button"
      onClick={() => onOpen(event.id)}
      className="absolute inset-x-1 overflow-hidden rounded-md border border-(--demo-accent)/35 bg-(--demo-accent)/15 px-1 text-left"
      style={{ top, height }}
    >
      {chrome === "strip" ? (
        <span className="font-mono text-[10px]">{title.slice(0, 2)}</span>
      ) : (
        <span className="block truncate text-[11px] font-medium">{title}</span>
      )}
      {chrome === "full" ? (
        <span className="block truncate font-mono text-[10px] text-muted">{event.time}</span>
      ) : null}
    </button>
  );
}

function Detail({
  event,
  dayLabel,
  onClose,
  copy,
}: {
  event: CalendarEvent;
  dayLabel: string;
  onClose: () => void;
  copy: Copy;
}) {
  const text = eventText(copy, event.id);
  return (
    <GlassPanel className="w-full p-4">
      <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">{dayLabel}</p>
      <h3 className="mt-1 text-lg font-medium">{text.title}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
          <dt className="text-muted">{copy.calendar.time}</dt>
          <dd>{event.time}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
          <dt className="text-muted">{copy.calendar.place}</dt>
          <dd>{text.place}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={onClose}
        className="mt-5 min-h-11 w-full bg-(--demo-accent) text-sm font-semibold text-(--demo-on)"
      >
        {copy.calendar.close}
      </button>
    </GlassPanel>
  );
}

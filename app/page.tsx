import { CalendarDemo } from "@/components/demos/CalendarDemo";
import { ChatDemo } from "@/components/demos/ChatDemo";
import { ExpensesDemo } from "@/components/demos/ExpensesDemo";
import { PersonaDemo } from "@/components/demos/PersonaDemo";
import { Cta } from "@/components/Cta";
import { Exhibit } from "@/components/Exhibit";
import { Footer } from "@/components/Footer";
import { GalleryShell } from "@/components/GalleryShell";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <GalleryShell>
      <div id="top">
        <a
          href="#content"
          className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-(--demo-accent) px-4 py-2 text-sm font-semibold text-(--demo-on) focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">
          <Hero />
          <Exhibit
            id="chat"
            title="Chat"
            lede="A short exchange. Rayvi confirms the time, then the reminder. This preview only knows a few replies."
          >
            <ChatDemo />
          </Exhibit>
          <Exhibit
            id="calendar"
            title="Calendar"
            lede="One sample week. On a wide screen it is the week grid. On a phone it is the day list. Open an event for the time and the place."
          >
            <CalendarDemo />
          </Exhibit>
          <Exhibit
            id="expenses"
            title="Expenses"
            lede="Three months of sample spending. The chart and the list move together."
          >
            <ExpensesDemo />
          </Exhibit>
          <Exhibit
            id="persona"
            title="Persona"
            lede="Accent and tone. The window and phone frames in this gallery follow the accent."
          >
            <PersonaDemo />
          </Exhibit>
          <Cta />
        </main>
        <Footer />
      </div>
    </GalleryShell>
  );
}

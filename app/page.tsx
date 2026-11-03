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
            lede="One sample week. Wide screens show the week timeline. Phones show the day timeline. Open an event for the time and the place."
          >
            <CalendarDemo />
          </Exhibit>
          <Exhibit
            id="expenses"
            title="Expenses"
            lede="Three months of sample spending. Wide screens keep the line, pie, and bar together. Phones switch one chart slot."
          >
            <ExpensesDemo />
          </Exhibit>
          <Exhibit
            id="persona"
            title="Persona"
            lede="Appearance presets. The shell chrome in this gallery follows the accent."
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

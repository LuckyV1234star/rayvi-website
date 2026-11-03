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
        <SiteHeader />
        <main id="content">
          <Hero />
          <Exhibit id="persona">
            <PersonaDemo />
          </Exhibit>
          <Exhibit id="chat">
            <ChatDemo />
          </Exhibit>
          <Exhibit id="calendar">
            <CalendarDemo />
          </Exhibit>
          <Exhibit id="expenses">
            <ExpensesDemo />
          </Exhibit>
          <Cta />
        </main>
        <Footer />
      </div>
    </GalleryShell>
  );
}

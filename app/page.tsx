import { CalendarDemo } from "@/components/demos/CalendarDemo";
import { ChatDemo } from "@/components/demos/ChatDemo";
import { ExpensesDemo } from "@/components/demos/ExpensesDemo";
import { PersonaDemo } from "@/components/demos/PersonaDemo";
import { Cta } from "@/components/Cta";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#content"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <FeatureSection
          id="chat"
          index="01"
          title="Chat"
          lede="Ask in a sentence. Rayvi confirms the time and the reminder. This preview answers a few scripted replies."
        >
          <ChatDemo />
        </FeatureSection>
        <FeatureSection
          id="calendar"
          index="02"
          title="Calendar"
          lede="A sample week, Monday through Sunday. Open any event for the time and place."
        >
          <CalendarDemo />
        </FeatureSection>
        <FeatureSection
          id="expenses"
          index="03"
          title="Expenses"
          lede="Sample spending for three months. Switch the month and the chart and list both update."
        >
          <ExpensesDemo />
        </FeatureSection>
        <FeatureSection
          id="persona"
          index="04"
          title="Persona"
          lede="Accent and tone are yours. The preview frame and the sample line follow what you pick."
        >
          <PersonaDemo />
        </FeatureSection>
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

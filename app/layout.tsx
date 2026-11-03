import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayvi.net"),
  title: "Rayvi — your personal AI companion",
  description:
    "Calendar and expenses, in a persona you set. Rayvi is a friends-only TestFlight.",
};

export const viewport: Viewport = {
  themeColor: "#131315",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-on-surface">{children}</body>
    </html>
  );
}

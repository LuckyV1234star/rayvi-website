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
  title: "Rayvi — your custom personal secretary",
  description:
    "A secretary you design — calendar and expenses. Friends-only TestFlight.",
};

export const viewport: Viewport = {
  themeColor: "#131315",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg text-on-surface">{children}</body>
    </html>
  );
}

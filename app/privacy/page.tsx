import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Rayvi",
  description:
    "This policy explains how Rayvi (the website at https://rayvi.net and the mobile and desktop apps) collects, uses, and shares personal data.",
};

export default function PrivacyPage() {
  return <LegalDocument page="privacy" />;
}

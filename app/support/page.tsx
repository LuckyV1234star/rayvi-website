import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Support — Rayvi",
  description: "For help, email support@rayvi.net. Do not send your password by email.",
};

export default function SupportPage() {
  return <LegalDocument page="support" />;
}

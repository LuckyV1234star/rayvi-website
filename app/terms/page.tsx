import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms and Conditions — Rayvi",
  description:
    "These terms govern your use of the Rayvi website at https://rayvi.net and the apps. The operator is Yu Ching Leung.",
};

export default function TermsPage() {
  return <LegalDocument page="terms" />;
}

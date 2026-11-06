"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { GalleryShell, useLocale } from "@/components/GalleryShell";
import { SiteHeader } from "@/components/SiteHeader";
import { legalCopy, type LegalPageId } from "@/lib/legal";

const linkClass = "underline decoration-(--demo-accent)/70 underline-offset-4";
const tokens = ["support@rayvi.net", "https://rayvi.net", "Privacy Policy", "私隱政策", "rayvi.net"];

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let rest = text;
  let index = 0;

  while (rest.length > 0) {
    let foundAt = -1;
    let found = "";
    for (const token of tokens) {
      const at = rest.indexOf(token);
      if (at !== -1 && (foundAt === -1 || at < foundAt)) {
        foundAt = at;
        found = token;
      }
    }
    if (foundAt === -1) {
      nodes.push(<span key={index}>{rest}</span>);
      break;
    }
    if (foundAt > 0) {
      nodes.push(<span key={index}>{rest.slice(0, foundAt)}</span>);
      index += 1;
    }
    if (found === "support@rayvi.net") {
      nodes.push(
        <a key={index} href="mailto:support@rayvi.net" className={linkClass}>
          {found}
        </a>,
      );
    } else if (found === "https://rayvi.net" || found === "rayvi.net") {
      nodes.push(
        <a key={index} href="https://rayvi.net" className={linkClass}>
          {found}
        </a>,
      );
    } else {
      nodes.push(
        <Link key={index} href="/privacy" className={linkClass}>
          {found}
        </Link>,
      );
    }
    rest = rest.slice(foundAt + found.length);
    index += 1;
  }

  return nodes;
}

function LegalFrame({ page }: { page: LegalPageId }) {
  const { locale } = useLocale();
  const documentCopy = legalCopy[locale][page];

  useEffect(() => {
    document.title = `${documentCopy.title} — Rayvi`;
  }, [documentCopy.title]);

  return (
    <div id="top">
      <SiteHeader />
      <main id="content" className="px-5 py-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">{documentCopy.effective}</p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{documentCopy.title}</h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-on-surface/85">
            <p>
              <RichText text={documentCopy.intro} />
            </p>
            <ol className="list-decimal space-y-5 pl-6">
              {documentCopy.sections.map((section) => (
                <li key={section.slice(0, 32)}>
                  <RichText text={section} />
                </li>
              ))}
            </ol>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function LegalDocument({ page }: { page: LegalPageId }) {
  return (
    <GalleryShell>
      <LegalFrame page={page} />
    </GalleryShell>
  );
}

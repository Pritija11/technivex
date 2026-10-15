"use client";

import { useState } from "react";
import { Container } from "./Container";
import { IconClose, IconArrowRight } from "./icons";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="bg-[var(--teal)] text-[var(--on-teal)]">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        <p className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.06em]">
          <span className="opacity-80">
            Early access is open for the first 50 teams.
          </span>
          <a href="/contact" className="inline-flex items-center gap-1 underline">
            Request a seat
            <IconArrowRight className="h-3 w-3" />
          </a>
        </p>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => setOpen(false)}
          className="flex-none opacity-80 hover:opacity-100"
        >
          <IconClose className="h-3.5 w-3.5" />
        </button>
      </Container>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessageSquare,
} from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" icon={IconUser}>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
          <Field label="Work email" htmlFor="email" icon={IconMail}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Phone (optional)" htmlFor="phone" icon={IconPhone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+977 98..."
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
            />
          </Field>
          <label htmlFor="spend" className="flex flex-col gap-2">
            <span className="text-sm text-[var(--fg-muted)]">
              Approximate annual cloud spend
            </span>
            <select
              id="spend"
              name="spend"
              defaultValue=""
              className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--fg)] outline-none focus:border-[var(--primary)]"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option>Under $500K</option>
              <option>$500K – $2M</option>
              <option>$2M – $10M</option>
              <option>$10M+</option>
            </select>
          </label>
        </div>

        <Field
          label="What's prompting this?"
          htmlFor="message"
          icon={IconMessageSquare}
        >
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A surprise invoice, a board question about spend, a new AI initiative — whatever's driving it."
            className="w-full resize-none rounded-md border border-[var(--border-strong)] bg-[var(--bg)] py-2.5 pl-9 pr-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--primary)]"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-dark)]"
        >
          Send message
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          submitted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--success)] shadow-lg shadow-black/10">
          Message sent — we&apos;ll follow up within a business day.
        </span>
      </div>
    </>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm text-[var(--fg-muted)]">{label}</span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[var(--fg-faint)]" />
        {children}
      </div>
    </label>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function InlineEmailCTA({
  buttonLabel = "Request demo",
  dark = false,
  className = "",
}: {
  buttonLabel?: string;
  dark?: boolean;
  className?: string;
}) {
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
        className={`flex w-full max-w-xl flex-col gap-3 rounded-lg border p-2 sm:flex-row ${
          dark
            ? "border-white/15 bg-[#141312]"
            : "border-[var(--border-strong)] bg-[var(--surface)]"
        } ${className}`}
      >
        <input
          type="email"
          required
          placeholder="Work email*"
          aria-label="Work email"
          className={`w-full flex-1 bg-transparent px-4 py-3 text-sm outline-none ${
            dark
              ? "text-white placeholder:text-[#6f6c66]"
              : "text-[var(--fg)] placeholder:text-[var(--fg-faint)]"
          }`}
        />
        <button
          type="submit"
          className="inline-flex flex-none items-center justify-center rounded-md bg-[var(--teal)] px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--on-teal)] transition-colors hover:bg-[var(--teal-dark)]"
        >
          {buttonLabel}
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
          Thanks — someone will reach out within a business day.
        </span>
      </div>
    </>
  );
}

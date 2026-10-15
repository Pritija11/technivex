"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { AnnouncementBar } from "./AnnouncementBar";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/governance", label: "Governance" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div className="border-b border-[var(--border)] bg-[var(--bg)]">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--ink)]">
              <IconLogo className="h-4.5 w-4.5 text-[var(--primary)]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-[var(--fg)]">
              Technivex
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--ink)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-md bg-[var(--primary)] px-5 py-2.5 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-dark)] lg:inline-flex"
          >
            Schedule demo
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-[var(--fg)] lg:hidden"
          >
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </Container>

        {open && (
          <div className="border-t border-[var(--border)] lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-2 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[var(--surface-tint)] text-[var(--ink)]"
                        : "text-[var(--fg-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-md bg-[var(--primary)] px-4 py-3 text-center font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--on-primary)]"
              >
                Schedule demo
              </Link>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}

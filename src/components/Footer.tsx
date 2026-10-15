import Link from "next/link";
import { Container } from "./Container";
import { InlineEmailCTA } from "./InlineEmailCTA";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Why Technivex",
    links: [
      { href: "/about", label: "Engineering" },
      { href: "/about", label: "Finance" },
      { href: "/governance", label: "Reduce waste" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { href: "/platform", label: "Attribution" },
      { href: "/platform", label: "Anomaly detection" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { href: "/integrations", label: "AWS" },
      { href: "/integrations", label: "Google Cloud" },
      { href: "/integrations", label: "All connectors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-black text-[#b8b5ae]">
      <Container className="py-14">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
              See where your spend actually goes.
            </p>
            <p className="mt-1 text-sm text-[#8a877f]">
              No sales call required to get a first look.
            </p>
          </div>
          <InlineEmailCTA buttonLabel="Request demo" dark className="sm:w-auto" />
        </div>
      </Container>

      <Container className="grid grid-cols-2 gap-10 pb-12 sm:grid-cols-4">
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-white">{col.heading}</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {col.links.map((l, i) => (
                <li key={`${l.href}-${i}`}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[11px] text-[#8a877f] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <IconLogo className="h-4 w-4" />
            <span>&copy; {YEAR} Technivex. All rights reserved.</span>
          </div>
          <p>Cloud cost intelligence, built from Lalitpur, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}

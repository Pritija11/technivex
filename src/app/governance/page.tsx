import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";
import {
  IconCheck,
  IconClose,
  IconLock,
  IconServer,
  IconUsers,
  IconActivity,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "What Technivex can and can't see in your cloud accounts — read-only billing access, data handling, and internal safeguards.",
  alternates: {
    canonical: "/governance",
  },
};

const canSee = [
  "Billing and cost export data",
  "Resource tags and metadata",
  "Usage metrics (CPU, storage, requests)",
  "Account and service hierarchy",
];

const cannotSee = [
  "Application code or data stores",
  "Customer data processed by your services",
  "Infrastructure configuration beyond billing metadata",
  "Credentials, secrets, or environment variables",
];

const safeguards = [
  {
    icon: IconLock,
    title: "Read-only by design",
    body: "Every cloud integration uses the narrowest IAM policy that still supports cost modeling — never write or admin scopes.",
  },
  {
    icon: IconServer,
    title: "Isolated per-tenant storage",
    body: "Each customer's cost data is logically isolated and encrypted at rest with AES-256.",
  },
  {
    icon: IconUsers,
    title: "Role-based internal access",
    body: "Employee access to customer billing data is role-gated, logged, and reviewed quarterly.",
  },
  {
    icon: IconActivity,
    title: "Working toward SOC 2 Type II",
    body: "As an early-stage company, we're building our compliance program now, with policies in place from day one.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Governance
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              Your billing data. Nothing else.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup asking finance and engineering teams to connect
              billing accounts to us, we want the access boundary to be
              exactly as narrow as it sounds.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                What Technivex can see
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {canSee.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--success)_16%,transparent)]">
                      <IconCheck className="h-3 w-3 text-[var(--success)]" />
                    </span>
                    <span className="text-sm leading-6 text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                What Technivex never touches
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {cannotSee.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--danger)_14%,transparent)]">
                      <IconClose className="h-3 w-3 text-[var(--danger)]" />
                    </span>
                    <span className="text-sm leading-6 text-[var(--fg-muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              The rest of how we handle your data
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {safeguards.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Want the full access policy writeup?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We share the exact IAM policy JSON and a data-flow diagram
              during onboarding — just ask.
            </p>
            <div className="mt-8 flex justify-center">
              <InlineEmailCTA buttonLabel="Request documentation" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

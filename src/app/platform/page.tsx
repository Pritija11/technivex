import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";
import { CostAllocationTable } from "@/components/mocks/CostAllocationTable";
import { AnomalyAlert } from "@/components/mocks/AnomalyAlert";
import { SpendDashboardCard } from "@/components/mocks/SpendDashboardCard";
import { IconTag, IconTrendingUp, IconAlertTriangle, IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Technivex allocates, attributes, and flags cloud and AI spend — from raw billing data to a report finance can actually use.",
  alternates: {
    canonical: "/platform",
  },
};

const sections = [
  {
    icon: IconTag,
    eyebrow: "Allocation",
    title: "Every dollar, tied to a team",
    body: "Raw cloud bills tell you what you spent. Technivex tells you who spent it — mapped to the team, product, and customer behind every line item, pulled from tags, resource metadata, and usage patterns, not a spreadsheet someone has to maintain.",
    points: [
      "Works even where tagging is incomplete, using inferred ownership",
      "Shared infrastructure costs split by actual usage, not a flat percentage",
      "Every allocation rule is visible and editable, not a black box",
    ],
    mock: <CostAllocationTable />,
  },
  {
    icon: IconTrendingUp,
    eyebrow: "Attribution",
    title: "Cost tied to the outcome it produced",
    body: "Knowing a service costs $40,000 a month means nothing without knowing what it's for. Technivex ties infrastructure spend to the business metric it supports — cost per transaction, per customer, per feature — so pricing and margin conversations have real numbers behind them.",
    points: [
      "Unit economics down to cost-per-transaction, updated daily",
      "AI spend attributed to the model, prompt pattern, and feature calling it",
      "Margin erosion flagged before it shows up in a board deck",
    ],
    mock: (
      <SpendDashboardCard
        tone="teal"
        label="Unit economics"
        stat="$0.014"
        sub="Cost per transaction, live"
      />
    ),
  },
  {
    icon: IconAlertTriangle,
    eyebrow: "Anomaly detection",
    title: "Spikes caught in minutes, not at invoice time",
    body: "Most teams find out about a runaway cost when the monthly bill lands — weeks after it started. Technivex watches spend in near real time and pages the right owner the moment a service breaks its normal pattern.",
    points: [
      "Baselines learned per service, not a single blunt threshold",
      "Alerts route to the team that owns the resource, automatically",
      "Root-cause context included, not just \"spend went up\"",
    ],
    mock: <AnomalyAlert />,
  },
];

const steps = [
  {
    step: "01",
    title: "Connect your billing accounts",
    body: "Read-only integration with AWS, GCP, Azure, and your AI provider billing exports — no infrastructure access required.",
  },
  {
    step: "02",
    title: "Technivex builds the cost model",
    body: "Spend is mapped to teams, products, and customers automatically, filling gaps where tagging is incomplete.",
  },
  {
    step: "03",
    title: "Anomaly detection starts watching",
    body: "Baselines are learned per service within the first few days of connected data.",
  },
  {
    step: "04",
    title: "Reports go out where people work",
    body: "Slack, email, or a shared dashboard — finance and engineering look at the same numbers.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Platform
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              From a cloud bill to a decision, in one system.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a cloud cost intelligence startup, we built Technivex
              around a single cost model shared by allocation, attribution,
              and anomaly detection — so the number engineering sees matches
              the number finance reports.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-24">
          {sections.map((s, i) => (
            <Reveal key={s.eyebrow} delay={i * 40}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <p className="mt-5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
                    {s.eyebrow}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                        <span className="text-sm leading-6 text-[var(--fg-muted)]">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">{s.mock}</div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              How it works
            </p>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              From connection to first report
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 40}>
                <div className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--primary)]">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      {s.body}
                    </p>
                  </div>
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
              See it against your real spend.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Connect a sandbox billing account and get a real cost model
              back, not a canned demo.
            </p>
            <div className="mt-8 flex justify-center">
              <InlineEmailCTA buttonLabel="Request demo" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

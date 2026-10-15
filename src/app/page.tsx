import Link from "next/link";
import { Container } from "@/components/Container";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";
import { Reveal } from "@/components/Reveal";
import { SpendDashboardCard } from "@/components/mocks/SpendDashboardCard";
import {
  IconArrowRight,
  IconTag,
  IconTrendingUp,
  IconAlertTriangle,
  IconQuote,
} from "@/components/icons";

const stats = [
  { value: "$340M+", label: "Cloud spend tracked" },
  { value: "28%", label: "Median cost reduction" },
  { value: "11 min", label: "To first cost report" },
];

const capabilities = [
  {
    icon: IconTag,
    title: "Allocation",
    body: "Know exactly what each team, product, and customer costs across every cloud bill, not just the top-level total.",
  },
  {
    icon: IconTrendingUp,
    title: "Attribution",
    body: "Tie infrastructure cost directly to the feature or customer that drove it, down to the request.",
  },
  {
    icon: IconAlertTriangle,
    title: "Anomaly detection",
    body: "Catch a spend spike within minutes, not at the end of the month when the invoice lands.",
  },
];

const integrations = [
  "AWS", "Google Cloud", "Azure", "Kubernetes", "Snowflake", "Datadog",
  "OpenAI", "Anthropic", "MongoDB", "Databricks", "New Relic", "Terraform",
];

const accordionItems = [
  {
    q: "Find what's driving costs",
    a: "Explore spend across any dimension — team, service, customer, region — and see how every line item shapes your margin, in seconds.",
    open: true,
  },
  {
    q: "Make costs board-ready",
    a: "A monthly report finance can actually present, tied to real business metrics instead of a raw cloud bill nobody can parse.",
    open: false,
  },
  {
    q: "Stop spend anomalies fast",
    a: "Get paged the moment a service's cost trajectory breaks pattern, with enough context to act immediately.",
    open: false,
  },
];

const faqs = [
  {
    q: "Is Technivex a new company?",
    a: "Yes — we're an early-stage cloud cost intelligence startup based in Lalitpur, Nepal, building closely with our first group of design-partner teams.",
  },
  {
    q: "How is this different from our cloud provider's cost tools?",
    a: "Native cost tools stop at the resource level. Technivex ties spend to the team, feature, and customer driving it — the context your cloud bill alone can't give you.",
  },
  {
    q: "Does Technivex need write access to our infrastructure?",
    a: "No. Every integration is read-only, scoped to billing and usage data — we never touch your running infrastructure.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams see a first cost report within minutes of connecting a billing account, and full attribution within a day once tagging is in place.",
  },
  {
    q: "Do you support AI spend specifically?",
    a: "Yes — token-level cost attribution for OpenAI, Anthropic, and other model providers, tied to the same teams and products as the rest of your cloud spend.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="cube-field cube-field-left" aria-hidden />
        <div className="cube-field cube-field-right" aria-hidden />
        <Container className="relative z-10 flex flex-col items-center py-20 text-center md:py-28">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Startup · Tracking $340M+ in spend
            </p>
            <h1 className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--ink)] md:text-6xl">
              Every cloud dollar.{" "}
              <span className="marker">Every outcome.</span> Connected.
            </h1>
            <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Technivex unifies cloud and AI spend with business context, so
              you know exactly what every service, team, and customer costs
              — before the invoice tells you.
            </p>
            <div className="mt-10 flex justify-center">
              <InlineEmailCTA buttonLabel="Request demo" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats band */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-10">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--ink)]">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Capabilities — text left, divided icon rows right */}
      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              The financial control plane for cloud
            </p>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)]">
              Technivex is the cloud cost company
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              Technivex gives engineering and finance a shared system to
              govern cloud and AI spend. Stop guessing whether an investment
              is paying off and focus on what actually moves margin.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {capabilities.map((c) => (
                <div key={c.title} className="flex gap-5 py-6">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[var(--primary-soft)]">
                    <c.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[var(--fg-muted)]">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Integrations — full-bleed teal band */}
      <section className="bg-[var(--teal)] py-20 text-center text-[var(--on-teal)]">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] opacity-70">
              Integrations
            </p>
            <h2 className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
              Connected to the systems that spend your money
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 opacity-80">
              Technivex unifies cost and usage from every cloud provider, AI
              platform, and SaaS tool into one dimensional model.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-md bg-white/10 px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="/integrations"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] hover:bg-white/10"
            >
              See all connectors
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Showcase — three colored dashboard cards */}
      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Technivex delivers the financial control plane for cloud
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Reveal delay={0}>
              <SpendDashboardCard
                tone="primary"
                label="Unit cost dashboard"
                stat="$0.014"
                sub="Cost per transaction, live"
              />
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                Cost attribution
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                Map spend to the outcomes you report on: customer, product,
                transaction, P&amp;L.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <SpendDashboardCard
                tone="teal"
                label="Explorer"
                stat="$24.8M"
                sub="Tracked this quarter"
              />
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                Multi-dimensional allocation
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                Follow a dollar through customer, feature, and workflow at a
                depth buyers can defend.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <SpendDashboardCard
                tone="ink"
                label="Live signals"
                stat="2.4x"
                sub="Spend growth, flagged early"
              />
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">
                Real-time spend
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                Streaming telemetry captures cost as it happens, not days
                later when the bill arrives.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Feature accordion */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="max-w-sm font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              From raw spend to real answers
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              Most tools stop at activity metrics tied to spend. Technivex
              attributes spend to the outcomes that drive your business.
            </p>
            <Link
              href="/platform"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--teal)] px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--on-teal)] hover:bg-[var(--teal-dark)]"
            >
              See platform tour
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-col divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6">
              {accordionItems.map((item) => (
                <details key={item.q} className="group py-5" open={item.open}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--ink)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--primary)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <Container>
          <Reveal>
            <IconQuote className="mx-auto h-8 w-10 text-[var(--primary)]" />
            <p className="mx-auto mt-6 max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.5] tracking-tight text-[var(--ink)] md:text-3xl">
              Technivex has{" "}
              <span className="marker-solid">been a game changer</span> for
              managing the rapidly growing cost of our AI initiatives.
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--primary-soft)]" />
              <div className="text-left">
                <p className="text-sm text-[var(--ink)]">
                  VP Platform Engineering, design-partner team
                </p>
                <p className="text-xs text-[var(--fg-faint)]">
                  Early Technivex customer
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Pricing
            </p>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              One subscription. Everything included.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              No feature tiers to decode — every plan includes the full
              platform, scaled to the size of your cloud environment.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--primary)] hover:underline"
            >
              See pricing
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -left-3 top-6 bottom-6 w-3 rounded-l-full bg-[var(--primary)] sm:-left-5 sm:w-5" />
              <div className="absolute -right-3 top-6 bottom-6 w-3 rounded-r-full bg-[var(--primary)] sm:-right-5 sm:w-5" />
              <div className="relative rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 sm:px-12">
                <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)]">
                  FAQs
                </h2>
                <div className="mt-10 flex flex-col gap-4">
                  {faqs.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl border border-[var(--border)] px-5 py-4"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[var(--ink)]">
                        {item.q}
                        <span className="flex h-6 w-6 flex-none items-center justify-center text-lg text-[var(--primary)] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-[var(--border)] py-24">
        <div className="cube-field cube-field-left" aria-hidden />
        <div className="cube-field cube-field-right" aria-hidden />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              See your real cloud spend in minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Connect a billing account and get a first cost report before
              your coffee&apos;s done.
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

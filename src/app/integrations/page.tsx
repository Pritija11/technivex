import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";
import {
  IconCloud,
  IconServer,
  IconActivity,
  IconUsers,
  IconGlobe,
  IconLayers,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Technivex connects to every major cloud provider, AI platform, and SaaS billing source — read-only, scoped to billing and usage data.",
  alternates: {
    canonical: "/integrations",
  },
};

const categories = [
  {
    icon: IconCloud,
    name: "Cloud providers",
    items: ["AWS", "Google Cloud", "Microsoft Azure", "Oracle Cloud"],
  },
  {
    icon: IconLayers,
    name: "AI & model platforms",
    items: ["OpenAI", "Anthropic", "Google Vertex AI", "AWS Bedrock"],
  },
  {
    icon: IconServer,
    name: "Infrastructure",
    items: ["Kubernetes", "Snowflake", "Databricks", "MongoDB Atlas"],
  },
  {
    icon: IconActivity,
    name: "Observability",
    items: ["Datadog", "New Relic", "Grafana", "PagerDuty"],
  },
  {
    icon: IconUsers,
    name: "Finance & planning",
    items: ["NetSuite", "QuickBooks", "Workday Adaptive", "Anaplan"],
  },
  {
    icon: IconGlobe,
    name: "Notifications",
    items: ["Slack", "Microsoft Teams", "Email digests", "Webhooks"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Integrations
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              Reads your bills. Never touches your infrastructure.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup, we&apos;d rather ship a few connectors well than
              a long list half-maintained. Every connector is read-only and
              scoped to billing and usage data — Technivex builds a cost
              model from what you already generate, nothing more.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                  <c.icon className="h-5 w-5 text-[var(--ink)]" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  {c.name}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-[var(--fg-muted)]"
                    >
                      {item}
                      <span className="pill pill-teal">Read-only</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Don&apos;t see your stack listed?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We ship new connectors most sprints — tell us what you&apos;re
              running.
            </p>
            <div className="mt-8 flex justify-center">
              <InlineEmailCTA buttonLabel="Request integration" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

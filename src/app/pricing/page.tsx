import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Technivex pricing — a single subscription with every capability included, scaled to the size of your cloud and AI spend.",
  alternates: {
    canonical: "/pricing",
  },
};

const included = [
  "Unlimited cost sources",
  "Anomaly detection",
  "Unlimited users",
  "Cost allocation rules",
  "AI and model spend attribution",
  "Slack and email reports",
  "Custom dashboards",
  "API and data export",
];

const tiers = [
  {
    name: "Starter",
    range: "Up to $500K / year tracked spend",
    body: "Everything included, sized for a single engineering org finding its footing with cost visibility.",
  },
  {
    name: "Growth",
    range: "$500K – $5M / year tracked spend",
    body: "The same platform, with a dedicated onboarding engineer and a faster response SLA.",
  },
  {
    name: "Enterprise",
    range: "$5M+ / year tracked spend",
    body: "Custom data residency, SSO, and a named account team for complex multi-org environments.",
  },
];

const faqs = [
  {
    q: "Why is pricing based on tracked spend, not seats?",
    a: "Cost visibility is more valuable the more of your cloud bill it covers — pricing by seat would push teams to limit who gets access, which defeats the point.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan starts with a 14-day trial against your real billing data, not a sandboxed demo account.",
  },
  {
    q: "What counts as 'tracked spend'?",
    a: "The total annual cloud, AI, and infrastructure spend visible to Technivex across all connected billing sources.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Pricing
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              <span className="marker">Financial control plane</span> for
              cloud spend
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As an early-stage startup, Technivex offers a single
              subscription with all capabilities included, scaled to the
              size of your cloud environment.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Book a demo</Button>
              <Button href="/platform" variant="outline">
                Platform tour
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-t-3xl bg-[var(--primary)] px-8 pt-8 pb-16" />
              <div className="-mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_30px_70px_-30px_rgba(64,62,63,0.25)] md:p-12">
                <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
                  Included with your subscription
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                  {included.map((f) => (
                    <div
                      key={f}
                      className="flex items-center justify-between border-b border-[var(--border)] pb-4"
                    >
                      <span className="text-sm text-[var(--ink)]">{f}</span>
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--success)]">
                        <IconCheck className="h-3.5 w-3.5 text-white" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              Priced to the size of your cloud, not your headcount
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--ink)]">
                    {t.name}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[var(--primary)]">
                    {t.range}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              Pricing questions
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--ink)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

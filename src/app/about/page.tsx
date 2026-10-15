import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Technivex is an early-stage cloud cost intelligence startup based in Lalitpur, Nepal, building the financial control plane for cloud and AI spend.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "5", label: "People on the team" },
  { value: "Lalitpur", label: "Where we're based" },
];

const values = [
  {
    title: "Numbers finance can defend",
    body: "An allocation rule nobody can explain is worse than no allocation at all — every number traces back to a visible rule.",
  },
  {
    title: "Engineers see it too",
    body: "Cost tooling built only for finance gets ignored by the people who actually control spend. We design for both.",
  },
  {
    title: "Boring is a feature",
    body: "A cost platform that's exciting to use is usually one that's unreliable. We'd rather be dependable than flashy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                <span>Internal memo</span>
                <span>Lalitpur, Nepal</span>
              </div>

              <div className="mt-6 flex flex-col gap-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--fg-muted)]">
                <p>
                  <span className="text-[var(--fg-faint)]">To:</span>{" "}
                  Anyone asking why we started this
                </p>
                <p>
                  <span className="text-[var(--fg-faint)]">From:</span> The
                  Technivex founders
                </p>
                <p>
                  <span className="text-[var(--fg-faint)]">Re:</span> Why
                  cloud cost, why now
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 text-sm leading-7 text-[var(--fg-muted)]">
                <p>
                  We&apos;d each sat in the same meeting before: finance
                  asking why the cloud bill jumped 40% this quarter,
                  engineering shrugging because nobody could say which
                  service did it, and both sides working off numbers that
                  didn&apos;t agree.
                </p>
                <p>
                  The tools that existed stopped at the resource level —
                  useful for a cloud architect, useless for a CFO trying to
                  explain spend to a board. So we started building the
                  layer in between: a cost model both sides could actually
                  read.
                </p>
                <p>
                  We&apos;re a few months in, pre-seed, and still tuning the
                  allocation logic against real bills from our first design
                  partners. We don&apos;t have this fully figured out yet —
                  that&apos;s what building it with real finance and
                  engineering teams looks like.
                </p>
              </div>

              <p className="mt-8 font-[family-name:var(--font-display)] text-sm font-bold text-[var(--ink)]">
                — The Technivex team
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-12">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {snapshot.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              What we optimize for right now
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--ink)] md:text-4xl">
              Want to be a design partner?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re onboarding a small number of teams directly with
              the founders.
            </p>
            <div className="mt-8 flex justify-center">
              <InlineEmailCTA buttonLabel="Get in touch" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

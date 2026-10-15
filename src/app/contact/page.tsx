import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { InlineEmailCTA } from "@/components/InlineEmailCTA";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Technivex team about allocating, attributing, and cutting your cloud and AI spend.",
  alternates: {
    canonical: "/contact",
  },
};

const faqs = [
  {
    q: "What happens after I submit this form?",
    a: "As a small startup, someone on the team reviews it personally and replies directly, usually within a business day — there's no automated sales sequence.",
  },
  {
    q: "Can I just leave my email instead?",
    a: "Yes — the quick form above works too. We'll follow up to learn more rather than asking you to fill out a longer form first.",
  },
  {
    q: "Do you do live walkthroughs?",
    a: "Yes, a founder or engineer will walk through the platform live, ideally against a sandbox connected to your real billing data.",
  },
  {
    q: "Is there a free trial?",
    a: "Every plan starts with a 14-day trial against your real billing data — see our Pricing page for details.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-[var(--fg-faint)]">
              Contact
            </p>
            <h1 className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ink)] md:text-5xl">
              Let&apos;s look at your real cloud bill.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Leave your email and we&apos;ll reach out directly, or fill
              out the longer form below if you&apos;d rather give us more
              context up front.
            </p>
            <div className="mt-8 flex justify-center">
              <InlineEmailCTA buttonLabel="Request demo" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <IconMail className="h-4 w-4 flex-none text-[var(--primary)]" />
                  <a
                    href="mailto:hello@technivex.cloud"
                    className="text-sm text-[var(--ink)] hover:text-[var(--primary)]"
                  >
                    hello@technivex.cloud
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone className="h-4 w-4 flex-none text-[var(--primary)]" />
                  <a
                    href="tel:+9779852233445"
                    className="text-sm text-[var(--ink)] hover:text-[var(--primary)]"
                  >
                    +977 985-2233445
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <IconMapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                  <span className="text-sm text-[var(--ink)]">
                    Jawalakhel, Lalitpur 44700
                    <br />
                    Nepal
                  </span>
                </div>
              </div>

              <div className="flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
                {faqs.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[var(--ink)]">
                      {item.q}
                      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-xs text-[var(--fg-faint)] transition-transform group-open:rotate-45">
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
          </Reveal>
        </Container>
      </section>
    </>
  );
}

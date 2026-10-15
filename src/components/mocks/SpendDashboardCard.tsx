type Tone = "primary" | "teal" | "ink";

const toneBg: Record<Tone, string> = {
  primary: "bg-[var(--primary)]",
  teal: "bg-[var(--teal)]",
  ink: "bg-[var(--ink)]",
};

const bars = [40, 55, 48, 62, 58, 70, 66, 78, 74, 85, 80, 92];

export function SpendDashboardCard({
  tone = "primary",
  stat,
  label,
  sub,
}: {
  tone?: Tone;
  stat: string;
  label: string;
  sub: string;
}) {
  return (
    <div className={`rounded-2xl p-5 ${toneBg[tone]}`}>
      <div
        className="origin-top-left rounded-lg bg-[var(--surface)] p-4 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.35)]"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[var(--fg-faint)]">
            {label}
          </span>
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
          </span>
        </div>

        <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--ink)]">
          {stat}
        </p>
        <p className="mt-0.5 text-xs text-[var(--fg-muted)]">{sub}</p>

        <div className="mt-4 flex h-16 items-end gap-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  i >= bars.length - 3
                    ? "var(--primary)"
                    : "var(--border-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

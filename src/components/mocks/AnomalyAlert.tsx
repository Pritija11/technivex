import { IconAlertTriangle } from "../icons";

const spikes = [
  { service: "EC2 — us-east-1", change: "+142%", amount: "+$8,420/day" },
  { service: "OpenAI API usage", change: "+64%", amount: "+$2,110/day" },
  { service: "S3 data transfer", change: "+31%", amount: "+$740/day" },
];

export function AnomalyAlert() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(64,62,63,0.18)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Spend anomalies — today
        </span>
        <IconAlertTriangle className="h-4 w-4 text-[var(--primary)]" />
      </div>

      <div className="mt-5 flex flex-col divide-y divide-[var(--border)]">
        {spikes.map((s) => (
          <div
            key={s.service}
            className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
          >
            <div>
              <p className="text-sm text-[var(--ink)]">{s.service}</p>
              <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-[var(--fg-faint)]">
                {s.amount}
              </p>
            </div>
            <span className="pill pill-danger flex-none">{s.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

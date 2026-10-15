const rows = [
  { team: "Checkout", spend: "$184,200", share: 34 },
  { team: "Search & discovery", spend: "$126,400", share: 23 },
  { team: "ML inference", spend: "$98,700", share: 18 },
  { team: "Internal tools", spend: "$52,100", share: 10 },
  { team: "Everything else", spend: "$81,600", share: 15 },
];

export function CostAllocationTable() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(64,62,63,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Spend by team — this month
        </span>
        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--ink)]">
          $543,000
        </span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {rows.map((r) => (
          <div key={r.team} className="px-6 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--ink)]">{r.team}</span>
              <span className="font-[family-name:var(--font-mono)] text-[var(--fg-muted)]">
                {r.spend}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-tint)]">
              <div
                className="h-full rounded-full bg-[var(--primary)]"
                style={{ width: `${r.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

type Variant = "primary" | "teal" | "outline" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-dark)]",
  teal: "bg-[var(--teal)] text-[var(--on-teal)] hover:bg-[var(--teal-dark)]",
  outline:
    "border border-[var(--border-strong)] text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  dark: "bg-[var(--ink)] text-[var(--on-dark)] hover:bg-black",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

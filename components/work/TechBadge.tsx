import type { ReactNode } from "react";

interface TechBadgeProps {
  children: ReactNode;
}

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="glass-chip mono rounded-full px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--fg-subtle)]">
      {children}
    </span>
  );
}

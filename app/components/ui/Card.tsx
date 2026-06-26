import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius)] border border-border bg-card p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-foreground">{children}</h3>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-sm leading-6 text-muted">{children}</p>;
}

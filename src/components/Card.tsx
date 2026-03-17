import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-lg border border-border bg-panel p-5 shadow-soft ${className}`}
    >
      {title ? (
        <h2 className="mb-3 text-lg font-semibold text-heading">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}

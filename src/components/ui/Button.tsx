import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-text-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30",
  outline:
    "border border-ink/25 text-text-dark hover:border-ink hover:bg-ink hover:text-text-light",
  ghost:
    "border border-paper/40 text-text-light hover:border-paper hover:bg-paper/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

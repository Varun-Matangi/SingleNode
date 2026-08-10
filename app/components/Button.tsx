import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-ink hover:bg-white hover:shadow-[0_0_32px_-4px_var(--color-signal)] active:scale-[0.98]",
  secondary:
    "border border-white/15 text-paper bg-white/[0.02] backdrop-blur hover:border-white/30 hover:bg-white/[0.06] active:scale-[0.98]",
  ghost:
    "text-paper/80 hover:text-paper px-2 py-1",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export function LinkButton({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

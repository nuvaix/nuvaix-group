import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "neutral" | "accent" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-titanium-silver/15 text-titanium-silver",
  accent: "bg-champagne-gold/15 text-champagne-gold",
  outline: "border border-titanium-silver/40 text-off-white",
};

export function Badge({ variant = "neutral", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-small inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium tracking-wide",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

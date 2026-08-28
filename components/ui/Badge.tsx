import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  "default" | "subtle" | "outline" | "accent" | "success" | "warning" | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

// Every semantic variant follows the same recipe: a low-opacity tint of
// the color as the background, the full color as the text. Operational
// status (planned/live) is not a Badge variant: it stays exclusively in
// PlannedStatusBadge so that distinction can never drift or be reinvented
// ad hoc on a page.
const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-titanium-silver/15 text-titanium-silver",
  subtle: "bg-titanium-silver/8 text-muted-foreground",
  outline: "border border-titanium-silver/40 bg-transparent text-off-white",
  accent: "bg-champagne-gold/15 text-champagne-gold",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  error: "bg-error/15 text-error",
};

export function Badge({ variant = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-body-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium tracking-wide",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

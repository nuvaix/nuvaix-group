import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardTone = "surface" | "outline";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  children: ReactNode;
}

const toneStyles: Record<CardTone, string> = {
  surface: "bg-surface text-surface-foreground shadow-elevated",
  outline: "border border-border bg-transparent text-foreground",
};

export function Card({ tone = "surface", className, children, ...rest }: CardProps) {
  return (
    <div className={cn("rounded-xl p-6", toneStyles[tone], className)} {...rest}>
      {children}
    </div>
  );
}

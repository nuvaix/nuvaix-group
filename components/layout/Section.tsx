import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PageContainer } from "./PageContainer";

export type SectionTone = "black" | "sapphire" | "transparent";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  containerClassName?: string;
  children: ReactNode;
}

const toneStyles: Record<SectionTone, string> = {
  black: "bg-background text-foreground",
  sapphire: "bg-surface text-surface-foreground",
  transparent: "bg-transparent",
};

/**
 * Consistent section wrapper: brand-toned background, responsive vertical
 * rhythm (--spacing-section-y), and the shared PageContainer max-width.
 */
export function Section({
  tone = "transparent",
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn("py-section-y", toneStyles[tone], className)} {...rest}>
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}

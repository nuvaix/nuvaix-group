import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PageContainer, type ContainerWidth } from "./PageContainer";

export type SectionTone = "black" | "sapphire" | "light" | "transparent";
export type SectionSize = "compact" | "standard" | "large";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** black/sapphire are the two dark section tones, light is the deliberate
   * light-section option, transparent inherits whatever it sits inside. */
  tone?: SectionTone;
  /** compact/standard/large control vertical rhythm only. */
  size?: SectionSize;
  /** Content width passed to the inner PageContainer. */
  width?: ContainerWidth;
  /** Set to false to render children directly, with no PageContainer at
   * all, for genuine edge-to-edge full-bleed content (e.g. a hero image). */
  container?: boolean;
  containerClassName?: string;
  children: ReactNode;
}

const toneStyles: Record<SectionTone, string> = {
  black: "bg-background text-foreground",
  sapphire: "bg-background-elevated text-foreground",
  light: "bg-off-white text-deep-black",
  transparent: "bg-transparent",
};

const sizeStyles: Record<SectionSize, string> = {
  compact: "py-block",
  standard: "py-section-y",
  large: "py-page",
};

/**
 * Consistent section wrapper: brand-toned background, responsive vertical
 * rhythm, and the shared PageContainer width (or none, for full-bleed).
 */
export function Section({
  tone = "transparent",
  size = "standard",
  width,
  container = true,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn(sizeStyles[size], toneStyles[tone], className)} {...rest}>
      {container ? (
        <PageContainer width={width} className={containerClassName}>
          {children}
        </PageContainer>
      ) : (
        children
      )}
    </section>
  );
}

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeadingAlign = "left" | "center" | "right";
export type SectionHeadingWidth = "narrow" | "standard" | "wide";
export type SectionHeadingTheme = "dark" | "light";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Heading element to render, independent of visual size. Defaults to h2. */
  as?: ElementType;
  align?: SectionHeadingAlign;
  /** Caps the heading block's own line length, independent of the
   * section's container width. */
  width?: SectionHeadingWidth;
  /** Must match the Section tone it is placed in: "dark" for the black/
   * sapphire tones, "light" for Section tone="light". */
  theme?: SectionHeadingTheme;
  className?: string;
}

const alignStyles: Record<SectionHeadingAlign, string> = {
  left: "text-left",
  center: "mx-auto text-center",
  right: "ml-auto text-right",
};

const widthStyles: Record<SectionHeadingWidth, string> = {
  narrow: "max-w-xl",
  standard: "max-w-2xl",
  wide: "max-w-3xl",
};

const themeStyles = {
  dark: {
    eyebrow: "text-champagne-gold",
    title: "text-foreground",
    description: "text-muted-foreground",
  },
  light: {
    eyebrow: "text-midnight-sapphire",
    title: "text-deep-black",
    description: "text-deep-black/70",
  },
} satisfies Record<SectionHeadingTheme, Record<"eyebrow" | "title" | "description", string>>;

/**
 * The shared section header pattern: optional eyebrow label, heading and
 * optional supporting description. `as` keeps the document heading
 * hierarchy correct without changing the visual size, since a page may
 * need this pattern rendered as an h1 in one place and an h2 elsewhere.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  width = "standard",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  const colors = themeStyles[theme];

  return (
    <div className={cn(widthStyles[width], alignStyles[align], className)}>
      {eyebrow ? <p className={cn("label-eyebrow mb-3", colors.eyebrow)}>{eyebrow}</p> : null}
      <Heading className={cn("heading-h2", colors.title)}>{title}</Heading>
      {description ? (
        <p className={cn("copy-body-lg mt-4", colors.description)}>{description}</p>
      ) : null}
    </div>
  );
}

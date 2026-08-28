import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Heading element to render, independent of visual size. Defaults to h2. */
  as?: ElementType;
  align?: "left" | "center";
  className?: string;
}

/**
 * The shared section header pattern: optional eyebrow label, heading and
 * optional supporting description. The `as` prop keeps the document's
 * heading hierarchy correct without changing the visual size, since a
 * page may need this pattern rendered as an h1 in one place and an h2
 * elsewhere.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="label-eyebrow mb-3 text-champagne-gold">{eyebrow}</p> : null}
      <Heading className="heading-h2 text-foreground">{title}</Heading>
      {description ? (
        <p className="copy-body-lg mt-4 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

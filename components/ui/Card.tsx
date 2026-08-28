import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardTone = "standard" | "elevated" | "bordered" | "premium" | "interactive";

interface CommonProps {
  tone?: CardTone;
  /** Optional media (an ImageFrame, typically) rendered full-bleed above
   * the padded content, instead of a separate "image card" variant. */
  media?: ReactNode;
  className?: string;
  children: ReactNode;
}

type LinkCardProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

type DivCardProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { href?: undefined };

export type CardProps = LinkCardProps | DivCardProps;

// Radius stays uniform across every tone (see docs/18) so "premium" reads
// as more considered through material (border + shadow together) rather
// than a different geometry.
const toneStyles: Record<CardTone, string> = {
  standard: "surface-base",
  elevated: "surface-elevated",
  bordered: "surface-bordered",
  premium: "border border-border bg-surface text-surface-foreground shadow-elevated",
  interactive: "surface-interactive cursor-pointer",
};

/**
 * Card: consistent padding and radius regardless of tone. Only
 * tone="interactive" carries hover feedback, so static cards never look
 * like clickable elements they are not.
 */
export function Card({ tone = "standard", media, className, children, ...rest }: CardProps) {
  const classes = cn("overflow-hidden rounded-xl", toneStyles[tone], className);
  const body = (
    <>
      {media ? <div>{media}</div> : null}
      <div className="p-card">{children}</div>
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} {...linkProps} className={classes}>
        {body}
      </Link>
    );
  }

  return (
    <div {...rest} className={classes}>
      {body}
    </div>
  );
}

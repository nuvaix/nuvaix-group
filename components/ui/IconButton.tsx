import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Milestone 3 review: brought into consistency with Button (docs/18).
// "primary" was renamed "gold" so the name means the same solid-gold-fill
// treatment in both components; "secondary" now uses the same
// border/border-hover tokens as Button's "outline" instead of a
// hand-rolled titanium-silver opacity value. Height at each size still
// intentionally matches Button's height at that size (h-9/h-11/h-12) so a
// Button and an IconButton placed side by side always align. rounded-full
// (vs Button's rounded-md) is a deliberate, kept difference: icon-only
// controls read as circular, labeled controls read as rounded-rect.
export type IconButtonVariant = "ghost" | "secondary" | "gold";
export type IconButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  /** Presentational loading state: disables the control and shows a
   * spinner. No async logic lives here; see Button for the same pattern. */
  loading?: boolean;
  className?: string;
  children: ReactNode;
  /** Required: an icon-only control must always have an accessible name. */
  "aria-label": string;
}

type LinkIconButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

type NativeIconButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

export type IconButtonProps = LinkIconButtonProps | NativeIconButtonProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 transition-colors duration-(--duration-fast) ease-(--ease-standard)";

const variantStyles: Record<IconButtonVariant, string> = {
  ghost: "border border-transparent bg-transparent text-off-white hover:bg-titanium-silver/10",
  secondary: "border border-border bg-transparent text-off-white hover:border-border-hover",
  gold: "border border-transparent bg-champagne-gold text-deep-black hover:bg-accent-hover",
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

function IconButtonSpinner() {
  return (
    <span
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-current/30 border-t-current"
    />
  );
}

export function IconButton({
  variant = "ghost",
  size = "md",
  loading = false,
  className,
  children,
  ...rest
}: IconButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
  const content = loading ? <IconButtonSpinner /> : children;

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick, ...linkProps } = rest;
    const needsClickGuard = loading || Boolean(onClick);
    const handleClick = needsClickGuard
      ? (event: MouseEvent<HTMLAnchorElement>) => {
          if (loading) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }
      : undefined;

    return (
      <Link
        href={href}
        {...linkProps}
        aria-disabled={loading || undefined}
        aria-busy={loading || undefined}
        onClick={handleClick}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  const { disabled, onClick, type, ...buttonRest } = rest;

  return (
    <button
      {...buttonRest}
      type={type ?? "button"}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

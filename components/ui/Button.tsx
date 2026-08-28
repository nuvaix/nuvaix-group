import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  "primary" | "gold" | "secondary" | "outline" | "ghost" | "dark" | "light";
export type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Presentational loading state: disables the control and shows a
   * spinner. No async logic lives here; the forms milestone drives this
   * prop from real submission state. */
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseStyles =
  "label-button inline-flex items-center justify-center gap-2 rounded-md whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 transition-colors duration-(--duration-fast) ease-(--ease-standard)";

// Only "gold" is a solid gold fill, reserved for a single primary CTA per
// page. "primary" is the general-purpose default: a sapphire surface with
// a restrained gold edge, matching docs/04-design-system.md's "dark/
// sapphire surface + gold treatment" without tipping into excessive gold.
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-champagne-gold/50 bg-midnight-sapphire text-off-white hover:border-champagne-gold",
  gold: "border border-transparent bg-champagne-gold text-deep-black hover:bg-accent-hover",
  secondary:
    "border border-transparent bg-titanium-silver/10 text-off-white hover:bg-titanium-silver/15",
  outline: "border border-border bg-transparent text-off-white hover:border-border-hover",
  ghost: "border border-transparent bg-transparent text-off-white hover:bg-titanium-silver/10",
  dark: "border border-transparent bg-deep-black text-off-white hover:bg-deep-black/90",
  light: "border border-transparent bg-off-white text-deep-black hover:bg-off-white/90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-8",
};

function ButtonSpinner() {
  return (
    <span
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-current/30 border-t-current"
    />
  );
}

/**
 * Polymorphic Button: renders a Next.js Link when `href` is supplied,
 * otherwise a native <button>. Purely presentational, so it stays a
 * Server Component; interactivity (onClick) is supplied by whatever
 * client component uses it.
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick, ...linkProps } = rest;
    // Only attach a click handler when one is actually needed. Passing a
    // function prop to next/link (a Client Component) from a Server
    // Component tree is only safe when that prop is genuinely present;
    // most Button usages have no onClick at all and must stay onClick=undefined.
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
        {loading ? <ButtonSpinner /> : null}
        {children}
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
      {loading ? <ButtonSpinner /> : null}
      {children}
    </button>
  );
}

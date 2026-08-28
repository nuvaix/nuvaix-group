import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseStyles =
  "label-button inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border border-transparent bg-champagne-gold text-deep-black hover:bg-champagne-gold/90",
  secondary:
    "border border-titanium-silver/50 bg-transparent text-off-white hover:border-champagne-gold hover:text-champagne-gold",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-8",
};

/**
 * Polymorphic Button: renders a Next.js Link when `href` is supplied,
 * otherwise a native <button>. Purely presentational, so it stays a
 * Server Component; interactivity (onClick) is supplied by whatever
 * client component uses it.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={rest.type ?? "button"} {...rest} className={classes}>
      {children}
    </button>
  );
}

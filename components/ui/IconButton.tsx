import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type IconButtonVariant = "primary" | "secondary" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
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
  "inline-flex items-center justify-center rounded-full transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<IconButtonVariant, string> = {
  primary: "bg-champagne-gold text-deep-black hover:bg-champagne-gold/90",
  secondary:
    "border border-titanium-silver/50 text-off-white hover:border-champagne-gold hover:text-champagne-gold",
  ghost: "text-off-white hover:text-champagne-gold",
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

export function IconButton({
  variant = "ghost",
  size = "md",
  className,
  children,
  ...rest
}: IconButtonProps) {
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

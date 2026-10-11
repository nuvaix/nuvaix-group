import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoVariant = "mark" | "full";
export type LogoSize = "sm" | "md" | "lg";

interface LogoSource {
  src: string;
  alt: string;
}

/**
 * The two supplied logo raster files chosen for site use (see
 * ASSET_REFERENCE.md for the full inspection of every supplied
 * variant, including the ones deliberately excluded here). Both are
 * opaque square PNGs: a circular badge on a solid black field, not a
 * transparent cutout. That is why every current caller only places
 * this on near-black surfaces (bg-background / Section tone="black").
 * Do not use on the off-white or sapphire tones until a transparent or
 * light-background export is supplied.
 */
const LOGO_SOURCES: Record<LogoVariant, LogoSource> = {
  mark: {
    src: "/assets/brand/logo/Logo_whs4(3).png",
    alt: "NUVAIX GROUP",
  },
  full: {
    src: "/assets/brand/logo/Logo_whs(6).png",
    alt: "NUVAIX GROUP. Innovate, Build, Deliver, Grow.",
  },
};

const sizeStyles: Record<LogoSize, string> = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
};

// The actual rendered pixel size for each LogoSize, matching sizeStyles'
// Tailwind classes exactly (h-10/w-10 = 40px, h-16/w-16 = 64px, h-24/w-24 =
// 96px). Passed to next/image as width/height below so its automatic 1x/2x
// srcset is generated for the size the logo actually displays at, not the
// source file's full 1254x1254 intrinsic size. The source files stay
// untouched; only the requested output size changes, so next/image's own
// optimizer resizes down instead of serving a near-full-resolution PNG for
// a badge that never renders larger than 96px.
const sizePx: Record<LogoSize, number> = {
  sm: 40,
  md: 64,
  lg: 96,
};

export interface LogoProps {
  /** "mark": badge + NUVAIX wordmark only, for compact slots like the header.
   *  "full": badge + NUVAIX + GROUP + tagline, for spacious slots like the footer. */
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

/** The official NUVAIX GROUP brand mark. Renders the actual supplied
 * artwork via next/image; never redraws or recreates the logo. */
export function Logo({ variant = "mark", size = "md", className, priority }: LogoProps) {
  const source = LOGO_SOURCES[variant];
  const px = sizePx[size];
  return (
    <Image
      src={source.src}
      alt={source.alt}
      width={px}
      height={px}
      priority={priority}
      className={cn("object-contain", sizeStyles[size], className)}
    />
  );
}

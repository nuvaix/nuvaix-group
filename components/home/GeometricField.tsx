import { cn } from "@/lib/utils";

export type GeometricFieldTone = "silver" | "gold";

export interface GeometricFieldProps {
  /** silver is the default, neutral accent used everywhere. gold is
   * reserved for the Paint feature: champagne gold stays sparing and
   * never becomes the dominant color of a background treatment. */
  tone?: GeometricFieldTone;
  animated?: boolean;
  className?: string;
}

const toneStroke: Record<GeometricFieldTone, string> = {
  silver: "text-titanium-silver",
  gold: "text-champagne-gold",
};

/**
 * A purely decorative, abstract architectural composition: a sapphire-to-
 * black gradient wash with a handful of thin outlined shapes (no fills,
 * no photography). Stands in for real NUVAIX photography until it
 * exists; swapping this out for a Next Image later does not require
 * restructuring whatever section renders it, since it always fills its
 * positioned parent via `absolute inset-0`.
 */
export function GeometricField({
  tone = "silver",
  animated = true,
  className,
}: GeometricFieldProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden bg-deep-black", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-sapphire/55 via-deep-black to-deep-black" />
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        className={cn(
          "absolute inset-0 h-full w-full opacity-40",
          toneStroke[tone],
          animated && "animate-drift",
        )}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="0" y1="620" x2="800" y2="180" strokeOpacity="0.5" />
          <line x1="0" y1="740" x2="800" y2="320" strokeOpacity="0.3" />
          <line x1="120" y1="0" x2="640" y2="800" strokeOpacity="0.2" />
          <rect
            x="180"
            y="140"
            width="420"
            height="420"
            strokeOpacity="0.35"
            transform="rotate(8 390 350)"
          />
          <circle cx="620" cy="200" r="160" strokeOpacity="0.3" />
          <polygon points="560,620 760,700 680,780 480,760" strokeOpacity="0.25" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/5 to-transparent" />
    </div>
  );
}

import { cn } from "@/lib/utils";

export type PaintVisualPattern = "blocks" | "surface";

export interface PaintVisualProps {
  pattern?: PaintVisualPattern;
  className?: string;
}

/**
 * Abstract, paint-inspired decorative art (layered color-block chips /
 * coated surface bands) standing in for real product photography on
 * categories without a supplied concept render. Reuses GeometricField
 * and BusinessVisual's gradient-wash-plus-outline-art technique so the
 * Paint section still reads as the same NUVAIX visual language rather
 * than a separate look. Purely decorative: never a claim about an
 * actual finish or color (see Milestone 8, Paint Colors).
 */
export function PaintVisual({ pattern = "blocks", className }: PaintVisualProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden bg-deep-black", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-sapphire/60 via-deep-black to-deep-black" />
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        className="animate-drift text-titanium-silver absolute inset-0 h-full w-full opacity-40"
      >
        {pattern === "blocks" ? <BlockPattern /> : <SurfacePattern />}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/5 to-transparent" />
    </div>
  );
}

/** Layered rounded color-block chips, one carrying the restrained gold
 * accent (see docs/17: gold stays sparing, never the dominant color). */
function BlockPattern() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="140" y="160" width="200" height="200" rx="16" strokeOpacity="0.35" />
      <rect
        x="380"
        y="120"
        width="240"
        height="240"
        rx="16"
        strokeOpacity="0.3"
        className="text-champagne-gold"
      />
      <rect x="220" y="420" width="220" height="220" rx="16" strokeOpacity="0.3" />
      <rect x="500" y="440" width="160" height="160" rx="16" strokeOpacity="0.2" />
    </g>
  );
}

/** Horizontal bands suggesting a coated architectural surface. */
function SurfacePattern() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="0" y1="220" x2="800" y2="220" strokeOpacity="0.3" />
      <line x1="0" y1="380" x2="800" y2="380" strokeOpacity="0.25" />
      <line x1="0" y1="540" x2="800" y2="540" strokeOpacity="0.3" />
      <rect x="80" y="220" width="640" height="160" rx="8" strokeOpacity="0.2" />
    </g>
  );
}

import { cn } from "@/lib/utils";
import type { BusinessVisualPattern } from "@/data/businesses";

export interface BusinessVisualProps {
  pattern: BusinessVisualPattern;
  className?: string;
}

/**
 * Abstract, sector-flavored background art, reusing the same gradient
 * wash / fade-to-black / drift-animation technique as GeometricField
 * (components/home/GeometricField.tsx) but swapping the SVG content per
 * pattern, so each division reads as visually distinct without a new
 * visual language. Purely decorative: art direction only, never a
 * factual claim about the division (see docs/17, Milestone 6 notes).
 */
export function BusinessVisual({ pattern, className }: BusinessVisualProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden bg-deep-black", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-sapphire/55 via-deep-black to-deep-black" />
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        className="animate-drift text-titanium-silver absolute inset-0 h-full w-full opacity-40"
      >
        {pattern === "grid" ? <GridPattern /> : null}
        {pattern === "network" ? <NetworkPattern /> : null}
        {pattern === "flow" ? <FlowPattern /> : null}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/5 to-transparent" />
    </div>
  );
}

/** Architectural/structural: crossing lines and a rotated frame. Used for
 * construction, real estate, manufacturing and healthcare. */
function GridPattern() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="0" y1="150" x2="800" y2="150" strokeOpacity="0.25" />
      <line x1="0" y1="350" x2="800" y2="350" strokeOpacity="0.2" />
      <line x1="0" y1="550" x2="800" y2="550" strokeOpacity="0.25" />
      <line x1="200" y1="0" x2="200" y2="800" strokeOpacity="0.2" />
      <line x1="450" y1="0" x2="450" y2="800" strokeOpacity="0.25" />
      <line x1="650" y1="0" x2="650" y2="800" strokeOpacity="0.2" />
      <rect
        x="220"
        y="170"
        width="380"
        height="380"
        strokeOpacity="0.3"
        transform="rotate(4 410 360)"
      />
    </g>
  );
}

/** Digital/strategic: connected nodes. Used for technology, consultancy
 * and investments. */
function NetworkPattern() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="180" y1="220" x2="420" y2="150" strokeOpacity="0.3" />
      <line x1="420" y1="150" x2="620" y2="300" strokeOpacity="0.3" />
      <line x1="620" y1="300" x2="560" y2="560" strokeOpacity="0.25" />
      <line x1="300" y1="420" x2="560" y2="560" strokeOpacity="0.25" />
      <line x1="300" y1="420" x2="180" y2="220" strokeOpacity="0.3" />
      <line x1="150" y1="600" x2="300" y2="420" strokeOpacity="0.25" />
      <line x1="420" y1="150" x2="300" y2="420" strokeOpacity="0.2" />
      <circle cx="180" cy="220" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="420" cy="150" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="620" cy="300" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="300" cy="420" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="560" cy="560" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="150" cy="600" r="5" fill="currentColor" fillOpacity="0.5" stroke="none" />
    </g>
  );
}

/** Movement/logistics: flowing curves. Used for automobile, logistics
 * and retail and agriculture. */
function FlowPattern() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M -50 200 C 200 100, 400 350, 850 180" strokeOpacity="0.3" />
      <path d="M -50 420 C 250 320, 450 550, 850 400" strokeOpacity="0.25" />
      <path d="M -50 620 C 200 560, 500 700, 850 600" strokeOpacity="0.2" />
      <circle cx="620" cy="200" r="140" strokeOpacity="0.25" />
    </g>
  );
}

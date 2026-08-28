import type { SVGProps } from "react";

/**
 * Shared prop contract for every icon in components/icons. Icons are
 * plain inline SVG components (no icon library) so new, business-specific
 * icons can be added later by following this same pattern: a 24x24
 * viewBox, stroke driven by currentColor, and this prop shape.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon edge length in pixels. Defaults to 24. */
  size?: number;
  /** Accessible label. Omit for purely decorative icons (the default). */
  title?: string;
}

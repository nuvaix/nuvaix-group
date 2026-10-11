export interface PaintColor {
  slug: string;
  name: string;
  hex?: string;
  code?: string;
  category?: string;
  finish?: string;
  status?: "planned" | "live";
}

/**
 * No specific NUVAIX Paint colors have been confirmed or supplied (see
 * Milestone 8, Colors Page). Intentionally empty until real, verified
 * color data exists. /paint/colors renders an intentional color
 * experience introduction (components/paint/PaintColorExperience.tsx)
 * instead of a fabricated swatch grid while this stays empty, mirroring
 * data/training.ts's courses=[] pattern from Milestone 7.
 */
export const paintColors: PaintColor[] = [];

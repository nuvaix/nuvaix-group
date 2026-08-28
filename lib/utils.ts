import { clsx, type ClassValue } from "clsx";

/**
 * Combines conditional class names. Kept as a single shared helper so
 * variant logic in components stays consistent instead of each component
 * re-implementing its own conditional className merging.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

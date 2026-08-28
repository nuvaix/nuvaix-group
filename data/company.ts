import type { CompanyIdentity } from "@/types/company";

/**
 * Single source of truth for NUVAIX's verified corporate identity.
 * Source: docs/11-content-source-of-truth.md and CLAUDE.md.
 *
 * Import this wherever the legal or brand identity is needed (footer,
 * legal pages, metadata) instead of retyping these values.
 */
export const company: CompanyIdentity = {
  brandName: "NUVAIX GROUP",
  legalName: "NUVAIX SOLUTIONS LTD",
  rcNumber: "9597904",
  brandLine: "INNOVATE • BUILD • DELIVER • GROW",
  heroLines: ["Innovating today.", "Building tomorrow.", "Growing together."],
  valuePillars: [
    { word: "Innovate", description: "Create new ideas and solutions." },
    { word: "Build", description: "Turn strategy into practical outcomes." },
    { word: "Deliver", description: "Execute with quality and discipline." },
    { word: "Grow", description: "Build sustainable long-term value." },
  ],
};

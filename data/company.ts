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
    {
      word: "Innovate",
      description: "Create new ideas and solutions.",
      meaning: "A commitment to fresh thinking and better ways of solving problems.",
      application:
        "Applied across every division, from technology solutions to new business development.",
    },
    {
      word: "Build",
      description: "Turn strategy into practical outcomes.",
      meaning: "Turning ideas into practical, well-executed outcomes.",
      application:
        "Reflected in how NUVAIX GROUP approaches construction, technology delivery and new ventures alike.",
    },
    {
      word: "Deliver",
      description: "Execute with quality and discipline.",
      meaning: "A standard of quality and follow-through in everything undertaken.",
      application: "The basis for consistent execution across every business division.",
    },
    {
      word: "Grow",
      description: "Build sustainable long-term value.",
      meaning: "A focus on sustainable, long-term value over short-term gain.",
      application: "Guides how NUVAIX GROUP invests in new divisions, partnerships and capability.",
    },
  ],
};

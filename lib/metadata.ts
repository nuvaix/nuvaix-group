import type { Metadata, Viewport } from "next";
import { company } from "@/data/company";

/**
 * Metadata foundation. Centralizes the verified NUVAIX identity so every
 * future page's metadata (title, description) can build on the same
 * source instead of retyping company facts. Full SEO architecture
 * (Open Graph, canonical URLs, JSON-LD, sitemap) is implemented in a
 * later milestone; this only establishes the shared base.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Mirrors --color-deep-black in app/globals.css. Update both together.
const THEME_COLOR = "#030507";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.brandName,
    template: `%s | ${company.brandName}`,
  },
  description: `${company.brandName} (${company.legalName}, RC ${company.rcNumber}) is a diversified, technology-driven enterprise.`,
  applicationName: company.brandName,
};

export const baseViewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
};

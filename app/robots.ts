import type { MetadataRoute } from "next";

/**
 * Allows crawling of every public route. /design-system is excluded via
 * its own `robots: { index: false }` page-level metadata (a per-page
 * noindex, the correct tool for "don't index this one page") rather
 * than a Disallow rule here (which would block crawling entirely,
 * including the ability to see the noindex directive itself). No
 * /api/* rule is needed: no API route exists in this project (Server
 * Actions only, see lib/actions/enquiry.ts).
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

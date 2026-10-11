import type { MetadataRoute } from "next";
import { businesses } from "@/data/businesses";
import { paintProductCategories } from "@/data/paint-products";
import { courses } from "@/data/training";

/**
 * Data-driven sitemap (Milestone 16). Reuses the same site-URL strategy
 * already established in lib/metadata.ts rather than a second, separate
 * domain constant. Every dynamic segment is derived from its single
 * data source (data/businesses.ts, data/paint-products.ts,
 * data/training.ts), never a hand-typed slug list, so a route can never
 * silently drift out of sync with what actually exists.
 *
 * /design-system is intentionally excluded: it already carries
 * `robots: { index: false }` (see app/design-system/page.tsx) as a
 * development-only reference, not a public page. /projects, /insights,
 * /careers and /partnerships have no [slug] routes yet (their data
 * arrays are empty; see each milestone's Path B decision), so none are
 * listed here; /technology/training/[slug] is included only for
 * courses that actually exist, which today is none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const url = (path: string) => `${siteUrl}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), priority: 1 },
    { url: url("/about"), priority: 0.8 },
    { url: url("/about/mission"), priority: 0.6 },
    { url: url("/about/vision"), priority: 0.6 },
    { url: url("/about/values"), priority: 0.6 },
    { url: url("/about/leadership"), priority: 0.6 },
    { url: url("/businesses"), priority: 0.8 },
    { url: url("/technology"), priority: 0.8 },
    { url: url("/technology/solutions"), priority: 0.7 },
    { url: url("/technology/training"), priority: 0.7 },
    { url: url("/paint"), priority: 0.8 },
    { url: url("/paint/products"), priority: 0.7 },
    { url: url("/paint/colors"), priority: 0.6 },
    { url: url("/paint/bulk-orders"), priority: 0.6 },
    { url: url("/projects"), priority: 0.6 },
    { url: url("/insights"), priority: 0.6 },
    { url: url("/careers"), priority: 0.6 },
    { url: url("/partnerships"), priority: 0.6 },
    { url: url("/contact"), priority: 0.7 },
    { url: url("/privacy"), priority: 0.3 },
    { url: url("/terms"), priority: 0.3 },
  ];

  const businessRoutes: MetadataRoute.Sitemap = businesses.map((business) => ({
    url: url(`/businesses/${business.slug}`),
    priority: 0.7,
  }));

  const paintProductRoutes: MetadataRoute.Sitemap = paintProductCategories.map((product) => ({
    url: url(`/paint/products/${product.slug}`),
    priority: 0.6,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: url(`/technology/training/${course.slug}`),
    priority: 0.6,
  }));

  return [...staticRoutes, ...businessRoutes, ...paintProductRoutes, ...courseRoutes];
}

import Link from "next/link";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { PaintProductCard } from "./PaintProductCard";
import type { PaintProductCategory } from "@/data/paint-products";

export interface PaintProductGridProps {
  products: PaintProductCategory[];
}

/**
 * Editorial composition for the /paint page, echoing
 * TechnologyCapabilities' "one large featured item plus a structured
 * list" pattern (see Milestone 7) rather than a repeated card grid: the
 * one product with real concept artwork (chosen via the data-driven
 * `featured` flag, not hardcoded by slug) shown large, the remaining
 * categories as a compact linked list. Falls back to an even grid if no
 * category is marked featured. The full even-weight catalog grid lives
 * separately in PaintProductCatalog, used only on /paint/products.
 */
export function PaintProductGrid({ products }: PaintProductGridProps) {
  const featured = products.find((product) => product.featured);
  const rest = featured ? products.filter((product) => product.slug !== featured.slug) : [];

  if (!featured) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <PaintProductCard key={product.slug} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      <PaintProductCard product={featured} size="large" />
      <ul className="divide-border divide-y">
        {rest.map((product, index) => (
          <li key={product.slug}>
            <Link
              href={`/paint/products/${product.slug}`}
              className="hover:bg-surface-hover -mx-2 flex items-center gap-4 rounded-md px-2 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg flex-1 font-medium">{product.name}</span>
              <PlannedStatusBadge status={product.status} className="shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { PaintProductCard } from "./PaintProductCard";
import type { PaintProductCategory } from "@/data/paint-products";

export interface PaintProductCatalogProps {
  products: PaintProductCategory[];
}

/**
 * The full, even-weight Paint product catalog grid, used only on
 * /paint/products. The homepage and /paint page use the editorial
 * PaintProductGrid instead, so the same 5 categories are not presented
 * identically in two places (Milestone 8, avoid repetitive layouts).
 */
export function PaintProductCatalog({ products }: PaintProductCatalogProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <PaintProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

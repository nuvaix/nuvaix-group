import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { PaintVisual } from "./PaintVisual";
import type { PaintProductCategory } from "@/data/paint-products";

export interface PaintProductCardProps {
  product: PaintProductCategory;
  size?: "default" | "large";
}

/**
 * The single reusable Paint product card: the supplied concept render
 * where the product data links one (see conceptImage on
 * data/paint-products.ts), an abstract PaintVisual otherwise. Never
 * shows a fabricated attribute; only shortDescription and status render,
 * and only when present. Reused by PaintProductGrid (the /paint
 * editorial section), PaintProductCatalog (the /paint/products index),
 * and the "related products" section of the product detail page.
 */
export function PaintProductCard({ product, size = "default" }: PaintProductCardProps) {
  const isLarge = size === "large";

  return (
    <Card
      href={`/paint/products/${product.slug}`}
      tone="interactive"
      media={
        <ImageFrame aspect="square" radius="none">
          {product.conceptImage ? (
            <Image
              src={product.conceptImage.src}
              alt={product.conceptImage.alt}
              fill
              sizes={
                isLarge ? "(min-width: 1024px) 32rem, 90vw" : "(min-width: 1024px) 20rem, 45vw"
              }
              className={IMAGE_FILL_CLASSNAME}
            />
          ) : (
            <PaintVisual pattern={isLarge ? "blocks" : "surface"} />
          )}
        </ImageFrame>
      }
    >
      {product.conceptImage ? (
        <p className="copy-caption text-subtle-foreground">Concept visual, proposed packaging</p>
      ) : null}
      <div className={cn("flex flex-wrap items-center gap-3", product.conceptImage && "mt-3")}>
        <h3 className={isLarge ? "heading-h3" : "heading-h4"}>{product.name}</h3>
        <PlannedStatusBadge status={product.status} />
      </div>
      {product.shortDescription ? (
        <p className="copy-body-sm text-muted-foreground mt-2">{product.shortDescription}</p>
      ) : null}
    </Card>
  );
}

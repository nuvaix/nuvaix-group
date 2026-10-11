import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { GeometricField } from "@/components/home/GeometricField";
import type { Article } from "@/data/insights";

export interface InsightCardProps {
  article: Article;
  size?: "default" | "large";
}

/**
 * The single reusable article card. Uses article.image (real, verified
 * photography) when present; otherwise falls back to the established
 * abstract GeometricField, never a Paint concept render, a Technology
 * graphic repurposed as article photography, or generic stock imagery
 * (Milestone 11, sections 12, 31, 33). Only fields actually present on
 * the article render: no placeholder author or date.
 */
export function InsightCard({ article, size = "default" }: InsightCardProps) {
  const isLarge = size === "large";

  return (
    <Card
      href={`/insights/${article.slug}`}
      tone="interactive"
      media={
        <ImageFrame aspect={isLarge ? "landscape" : "square"} radius="none">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes={
                isLarge ? "(min-width: 1024px) 48rem, 90vw" : "(min-width: 1024px) 20rem, 45vw"
              }
              className={IMAGE_FILL_CLASSNAME}
            />
          ) : (
            <GeometricField tone="silver" />
          )}
        </ImageFrame>
      }
    >
      {article.category ? (
        <p className="copy-caption text-subtle-foreground">
          <Badge variant="outline">{article.category}</Badge>
        </p>
      ) : null}
      <h3 className={isLarge ? "heading-h3 mt-3" : "heading-h4 mt-3"}>{article.title}</h3>
      <p className="copy-body-sm text-muted-foreground mt-2">{article.excerpt}</p>
      {article.author || article.publishedAt ? (
        <p className="label-metadata text-subtle-foreground mt-3">
          {[article.author, article.publishedAt].filter(Boolean).join(", ")}
        </p>
      ) : null}
    </Card>
  );
}

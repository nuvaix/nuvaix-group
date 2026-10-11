import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { BusinessVisual } from "@/components/businesses/BusinessVisual";
import { businesses } from "@/data/businesses";
import type { Partner } from "@/data/partnerships";

export interface PartnerCardProps {
  partner: Partner;
  size?: "default" | "large";
}

/**
 * The single reusable partner card. Uses partner.logo only when a
 * verified logo file is actually associated with a real partner record
 * (never a NUVAIX asset or unrelated image standing in as a logo);
 * otherwise falls back to the related business division's own
 * BusinessVisual pattern via the partner's verified businessSlug
 * (Milestone 13, sections 9-10, 20-21: no logo-wall aesthetic, no
 * generic handshake imagery). Only fields actually present on the
 * partner render.
 */
export function PartnerCard({ partner, size = "default" }: PartnerCardProps) {
  const isLarge = size === "large";
  const relatedBusiness = partner.businessSlug
    ? businesses.find((item) => item.slug === partner.businessSlug)
    : undefined;

  return (
    <Card
      href={`/partnerships/${partner.slug}`}
      tone="interactive"
      media={
        <ImageFrame aspect={isLarge ? "landscape" : "square"} radius="none">
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              sizes={
                isLarge ? "(min-width: 1024px) 32rem, 90vw" : "(min-width: 1024px) 20rem, 45vw"
              }
              className={IMAGE_FILL_CLASSNAME}
            />
          ) : (
            <BusinessVisual pattern={relatedBusiness?.visualPattern ?? "grid"} />
          )}
        </ImageFrame>
      }
    >
      {partner.type ? <Badge variant="outline">{partner.type}</Badge> : null}
      <h3 className={isLarge ? "heading-h3 mt-3" : "heading-h4 mt-3"}>{partner.name}</h3>
      <p className="copy-body-sm text-muted-foreground mt-2">{partner.shortDescription}</p>
    </Card>
  );
}

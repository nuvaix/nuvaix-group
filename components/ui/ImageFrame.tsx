import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ImageAspect = "square" | "portrait" | "landscape" | "wide" | "video";
export type ImageRadius = "none" | "md" | "lg" | "xl";
export type ImageOverlay = "none" | "subtle" | "gradient";

export interface ImageFrameProps extends HTMLAttributes<HTMLDivElement> {
  aspect?: ImageAspect;
  radius?: ImageRadius;
  overlay?: ImageOverlay;
  children?: ReactNode;
}

const aspectStyles: Record<ImageAspect, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  video: "aspect-video",
};

const radiusStyles: Record<ImageRadius, string> = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-xl",
  xl: "rounded-2xl",
};

const overlayStyles: Record<ImageOverlay, string> = {
  none: "",
  subtle: "after:absolute after:inset-0 after:bg-deep-black/20",
  gradient:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-deep-black/70 after:via-deep-black/10 after:to-transparent",
};

/**
 * The cropping/rounding/overlay container for premium imagery. Place any
 * image inside using IMAGE_FILL_CLASSNAME (typically a Next.js <Image
 * fill />, once real photography exists). This one primitive composes
 * with Section (container={false} for full-bleed) and Card (via the
 * `media` prop) to cover every image treatment: standard, full-bleed,
 * image card, editorial, hero, or overlaid, without needing six separate
 * components.
 */
export function ImageFrame({
  aspect = "landscape",
  radius = "lg",
  overlay = "none",
  className,
  children,
  ...rest
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "surface-base relative isolate overflow-hidden",
        aspectStyles[aspect],
        radiusStyles[radius],
        overlayStyles[overlay],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Apply to the actual <img> / next/image element placed inside an ImageFrame. */
export const IMAGE_FILL_CLASSNAME = "h-full w-full object-cover object-center";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerWidth = "narrow" | "standard" | "wide" | "full";

export interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  /** Element to render as. Defaults to a plain div. */
  as?: ElementType;
  /**
   * narrow: reading-width copy (prevents excessively wide text lines).
   * standard: the default page grid width. wide: showcases/grids that
   * benefit from extra room. full: no max-width, edge-to-edge within its
   * own horizontal padding.
   */
  width?: ContainerWidth;
  children: ReactNode;
}

const widthStyles: Record<ContainerWidth, string> = {
  narrow: "max-w-narrow",
  standard: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-none",
};

/**
 * The shared content container. Use this instead of arbitrary width/padding
 * values so every page lines up on the same grid.
 */
export function PageContainer({
  as: Component = "div",
  width = "standard",
  className,
  children,
  ...rest
}: PageContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthStyles[width], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

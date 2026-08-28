import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  /** Element to render as. Defaults to a plain div. */
  as?: ElementType;
  children: ReactNode;
}

/**
 * The shared max-width content container. Use this instead of arbitrary
 * width/padding values so every page lines up on the same grid.
 */
export function PageContainer({
  as: Component = "div",
  className,
  children,
  ...rest
}: PageContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

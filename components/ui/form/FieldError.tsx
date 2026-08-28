import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FieldErrorProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

/**
 * Renders nothing when there is no error, so it is safe to always mount
 * next to a control and simply pass the (possibly undefined) message in
 * once real validation exists.
 */
export function FieldError({ className, children, ...rest }: FieldErrorProps) {
  if (!children) return null;

  return (
    <p role="alert" className={cn("copy-body-sm text-error", className)} {...rest}>
      {children}
    </p>
  );
}

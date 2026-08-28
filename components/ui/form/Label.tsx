import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Shows a required marker. The associated control must carry the real
   * `required` attribute separately; this is a visual indicator only. */
  required?: boolean;
  children: ReactNode;
}

export function Label({ required, className, children, ...rest }: LabelProps) {
  return (
    <label className={cn("label-nav text-foreground", className)} {...rest}>
      {children}
      {required ? (
        <span aria-hidden="true" className="text-error ml-1">
          *
        </span>
      ) : null}
    </label>
  );
}

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FieldDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function FieldDescription({ className, children, ...rest }: FieldDescriptionProps) {
  return (
    <p className={cn("copy-body-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}

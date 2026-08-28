import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";
import { controlBase, fieldStateBorder, type FieldState } from "./shared";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  state?: FieldState;
}

export function Select({ state = "default", className, children, ...rest }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          controlBase,
          "h-11 appearance-none pr-10 pl-4",
          fieldStateBorder[state],
          className,
        )}
        aria-invalid={state === "invalid" || undefined}
        {...rest}
      >
        {children}
      </select>
      <ChevronDownIcon
        size={18}
        aria-hidden="true"
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
      />
    </div>
  );
}

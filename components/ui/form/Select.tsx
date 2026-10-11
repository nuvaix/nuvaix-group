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
          // Unlike Input/Textarea (bg-transparent, since the closed
          // control just shows the page background through), Select
          // needs its own opaque, on-brand background: a native
          // <select>'s opened options popup is rendered by the browser
          // outside normal page layout and does not inherit a
          // transparent background the way the closed control does (see
          // the color-scheme: dark rule in app/globals.css for the other
          // half of this fix).
          "bg-surface h-11 appearance-none pr-10 pl-4",
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

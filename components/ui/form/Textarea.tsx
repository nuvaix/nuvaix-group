import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { controlBase, fieldStateBorder, type FieldState } from "./shared";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: FieldState;
}

export function Textarea({ state = "default", rows = 5, className, ...rest }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        controlBase,
        "bg-transparent min-h-32 resize-y px-4 py-3",
        fieldStateBorder[state],
        className,
      )}
      aria-invalid={state === "invalid" || undefined}
      {...rest}
    />
  );
}

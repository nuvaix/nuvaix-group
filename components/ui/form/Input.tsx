import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { controlBase, fieldStateBorder, type FieldState } from "./shared";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: FieldState;
}

export function Input({ state = "default", className, ...rest }: InputProps) {
  return (
    <input
      className={cn(controlBase, "h-11 px-4", fieldStateBorder[state], className)}
      aria-invalid={state === "invalid" || undefined}
      {...rest}
    />
  );
}

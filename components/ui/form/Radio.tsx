import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { FieldState } from "./shared";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  state?: FieldState;
}

const checkedBorder: Record<FieldState, string> = {
  default: "checked:border-accent",
  invalid: "checked:border-error",
  valid: "checked:border-success",
};

const dotFill: Record<FieldState, string> = {
  default: "bg-accent",
  invalid: "bg-error",
  valid: "bg-success",
};

/**
 * A real native radio input (full keyboard support, native group
 * semantics via a shared `name`) with the selected dot drawn as a sibling
 * shown via peer-checked, so no client JS is needed for the visual state.
 */
export function Radio({ state = "default", className, ...rest }: RadioProps) {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <input
        type="radio"
        className={cn(
          "peer border-border hover:border-border-hover h-5 w-5 shrink-0 appearance-none rounded-full border bg-transparent transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:cursor-not-allowed disabled:opacity-50",
          checkedBorder[state],
          className,
        )}
        aria-invalid={state === "invalid" || undefined}
        {...rest}
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute h-2.5 w-2.5 rounded-full opacity-0 peer-checked:opacity-100",
          dotFill[state],
        )}
      />
    </span>
  );
}

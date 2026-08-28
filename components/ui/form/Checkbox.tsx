import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons";
import type { FieldState } from "./shared";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  state?: FieldState;
}

const checkedFill: Record<FieldState, string> = {
  default: "checked:border-accent checked:bg-accent",
  invalid: "checked:border-error checked:bg-error",
  valid: "checked:border-success checked:bg-success",
};

/**
 * A real native checkbox (full keyboard support, screen reader semantics)
 * with the checkmark drawn as a sibling icon shown via peer-checked, so no
 * client JS is needed for the visual state.
 */
export function Checkbox({ state = "default", className, ...rest }: CheckboxProps) {
  return (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <input
        type="checkbox"
        className={cn(
          "peer border-border hover:border-border-hover h-5 w-5 shrink-0 appearance-none rounded-[0.3rem] border bg-transparent transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:cursor-not-allowed disabled:opacity-50",
          checkedFill[state],
          className,
        )}
        aria-invalid={state === "invalid" || undefined}
        {...rest}
      />
      <CheckIcon
        size={14}
        aria-hidden="true"
        className="text-deep-black pointer-events-none absolute opacity-0 peer-checked:opacity-100"
      />
    </span>
  );
}

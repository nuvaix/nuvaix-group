import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldError";

export interface FieldProps {
  label?: ReactNode;
  /** Must match the id of the control passed as children, so the label
   * stays associated. This wrapper only handles layout: wiring id,
   * aria-describedby and aria-invalid onto the actual control is the
   * consumer's responsibility (each form control accepts a `state` prop
   * for the error/valid styling half of that). */
  htmlFor?: string;
  required?: boolean;
  description?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Lays out a Label, a control, and its description/error message with
 * consistent spacing. Presentational only: no validation logic.
 *
 * The description/error each get a stable, predictable id derived from
 * `htmlFor` (`${htmlFor}-description` / `${htmlFor}-error`), so the
 * consumer can wire `aria-describedby` onto the actual control without
 * generating or passing ids separately (Milestone 14, Accessibility). */
export function Field({
  label,
  htmlFor,
  required,
  description,
  error,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label ? (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      ) : null}
      {children}
      {description ? (
        <FieldDescription id={htmlFor ? `${htmlFor}-description` : undefined}>
          {description}
        </FieldDescription>
      ) : null}
      <FieldError id={htmlFor ? `${htmlFor}-error` : undefined}>{error}</FieldError>
    </div>
  );
}

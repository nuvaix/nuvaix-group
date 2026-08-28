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
 * consistent spacing. Presentational only: no validation logic. */
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
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      <FieldError>{error}</FieldError>
    </div>
  );
}

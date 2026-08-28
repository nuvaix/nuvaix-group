/**
 * Internal styling shared by Input, Textarea and Select only. Not part of
 * the public component API: change the control's own props, not this file,
 * from outside components/ui/form.
 */

export type FieldState = "default" | "invalid" | "valid";

export const controlBase =
  "w-full rounded-md border bg-transparent text-body text-foreground placeholder:text-subtle-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:cursor-not-allowed disabled:opacity-50";

export const fieldStateBorder: Record<FieldState, string> = {
  default: "border-border hover:border-border-hover focus-visible:border-accent",
  invalid: "border-error focus-visible:border-error",
  valid: "border-success focus-visible:border-success",
};

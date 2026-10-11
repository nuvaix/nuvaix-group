/**
 * Internal styling shared by Input, Textarea and Select only. Not part of
 * the public component API: change the control's own props, not this file,
 * from outside components/ui/form.
 */

export type FieldState = "default" | "invalid" | "valid";

// Deliberately excludes a background color: Input and Textarea want
// bg-transparent (the surrounding Section shows through), Select needs
// its own opaque bg-surface instead (a native <select>'s opened options
// popup does not inherit a transparent background the way the closed
// control does). Each control sets its own background explicitly rather
// than relying on class-list order to override this shared string, since
// `cn` (clsx only, no Tailwind conflict resolution) does not guarantee a
// later class wins over an earlier one from the same string.
export const controlBase =
  "w-full rounded-md border text-body text-foreground placeholder:text-subtle-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:cursor-not-allowed disabled:opacity-50";

export const fieldStateBorder: Record<FieldState, string> = {
  default: "border-border hover:border-border-hover focus-visible:border-accent",
  invalid: "border-error focus-visible:border-error",
  valid: "border-success focus-visible:border-success",
};

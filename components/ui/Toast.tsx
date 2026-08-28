import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/icons";
import { IconButton } from "./IconButton";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  variant?: ToastVariant;
  title: string;
  description?: string;
  onDismiss?: () => void;
  className?: string;
}

const variantAccent: Record<ToastVariant, string> = {
  success: "border-l-success",
  error: "border-l-error",
  warning: "border-l-warning",
  info: "border-l-accent",
};

/**
 * The visual notification card. Not connected to any backend: rendering,
 * queueing and auto-dismiss timing live in ToastProvider.
 */
export function Toast({ variant = "info", title, description, onDismiss, className }: ToastProps) {
  const isUrgent = variant === "error";

  return (
    <div
      role={isUrgent ? "alert" : "status"}
      aria-live={isUrgent ? "assertive" : "polite"}
      className={cn(
        "surface-elevated flex items-start gap-3 rounded-lg border border-border border-l-4 p-4",
        variantAccent[variant],
        className,
      )}
    >
      <div className="flex-1">
        <p className="copy-body font-medium text-foreground">{title}</p>
        {description ? (
          <p className="copy-body-sm text-muted-foreground mt-1">{description}</p>
        ) : null}
      </div>
      {onDismiss ? (
        <IconButton variant="ghost" size="sm" aria-label="Dismiss notification" onClick={onDismiss}>
          <CloseIcon size={16} />
        </IconButton>
      ) : null}
    </div>
  );
}

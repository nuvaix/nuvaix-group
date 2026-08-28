"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/icons";
import { IconButton } from "./IconButton";

/**
 * Accessible Dialog built on the native <dialog> element via showModal(),
 * which gives real focus trapping, Escape-to-close and focus restoration
 * for free from the browser rather than hand-rolled JS. Entrance is a
 * subtle fade/scale (see globals.css); exit is intentionally instant to
 * keep the implementation simple and reliable.
 */
export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  className,
  children,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    // Fires for every close, whether triggered by Escape, the close
    // button, or a backdrop click, keeping React state in sync either way.
    const handleClose = () => onOpenChange(false);
    node.addEventListener("close", handleClose);
    return () => node.removeEventListener("close", handleClose);
  }, [onOpenChange]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onOpenChange(false);
        }
      }}
      className={cn(
        "m-auto w-full max-w-lg rounded-2xl border border-border bg-surface p-6 text-surface-foreground shadow-elevated",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id={titleId} className="heading-h4">
            {title}
          </h2>
          {description ? (
            <p id={descriptionId} className="copy-body text-muted-foreground mt-2">
              {description}
            </p>
          ) : null}
        </div>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Close dialog"
          onClick={() => onOpenChange(false)}
          className="shrink-0"
        >
          <CloseIcon size={18} />
        </IconButton>
      </div>
      <div className="mt-4">{children}</div>
    </dialog>
  );
}

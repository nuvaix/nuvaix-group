"use client";

import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import type { ToastVariant } from "@/components/ui/Toast";

const demoToasts: Record<ToastVariant, { title: string; description: string }> = {
  success: { title: "Enquiry sent", description: "Sample success message for the design system." },
  error: {
    title: "Something went wrong",
    description: "Sample error message for the design system.",
  },
  warning: {
    title: "Check the form",
    description: "Sample warning message for the design system.",
  },
  info: { title: "Heads up", description: "Sample informational message for the design system." },
};

export function ToastDemo() {
  const { showToast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      {(Object.keys(demoToasts) as ToastVariant[]).map((variant) => (
        <Button
          key={variant}
          variant="outline"
          size="sm"
          onClick={() => showToast({ variant, ...demoToasts[variant] })}
        >
          Show {variant}
        </Button>
      ))}
    </div>
  );
}

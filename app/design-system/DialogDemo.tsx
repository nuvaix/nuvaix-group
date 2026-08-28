"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";

export function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm enquiry"
        description="This is sample dialog copy for the design-system preview, not a real confirmation."
      >
        <p className="copy-body text-muted-foreground">
          Dialog content goes here. Focus is trapped inside while open, Escape and the backdrop both
          close it, and focus returns to the button that opened it.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="gold" size="sm" onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </div>
      </Dialog>
    </>
  );
}

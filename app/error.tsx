"use client";

import { useEffect } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section tone="black">
      <SectionHeading
        as="h1"
        eyebrow="Error"
        title="Something went wrong"
        description={
          error.digest
            ? `An unexpected error occurred. Reference: ${error.digest}`
            : "An unexpected error occurred. Please try again."
        }
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Return home
        </Button>
      </div>
    </Section>
  );
}

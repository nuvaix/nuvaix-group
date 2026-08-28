import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";

export interface RoutePlaceholderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * A minimal, visually-consistent stand-in for routes that exist for
 * navigation testing but have no real content yet. Used only by
 * Milestone 3 route placeholders; full page content is a later milestone.
 */
export function RoutePlaceholder({ eyebrow, title, description }: RoutePlaceholderProps) {
  return (
    <Section tone="black" size="large">
      <SectionHeading
        as="h1"
        eyebrow={eyebrow}
        title={title}
        description={description ?? "This page is scheduled for a later implementation milestone."}
      />
      <div className="mt-8">
        <Button href="/">Return home</Button>
      </div>
    </Section>
  );
}

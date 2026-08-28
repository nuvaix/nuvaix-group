import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

/** Concise, minimal conversion section immediately before the footer. */
export function ContactCTA() {
  return (
    <Section tone="sapphire" size="compact" width="narrow" className="text-center">
      <h2 className="heading-h2">Start a conversation.</h2>
      <p className="copy-body text-titanium-silver mx-auto mt-4 max-w-lg">
        Discuss a project, explore a partnership, or ask about our technology, Paint or training
        offerings.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact" variant="gold">
          Contact NUVAIX
        </Button>
      </div>
    </Section>
  );
}

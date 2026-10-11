import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export interface ContactCTAProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

/**
 * Concise, minimal conversion section immediately before the footer.
 * Reused as-is (no props) on the homepage and /about; other pages pass
 * contextual copy so the same one component covers every generic
 * "end of page, talk to us" moment instead of near-duplicate CTA
 * components per route (see Milestone 9, CTA audit).
 *
 * The default copy deliberately stays general-enquiry, not
 * partnership-flavored: on the homepage this section follows
 * PartnershipCTA, which already owns the partnership conversion moment,
 * so this one's job is everything else (see homepage CTA audit).
 */
export function ContactCTA({
  title = "Have a question or need to reach NUVAIX?",
  description = "Get in touch about our businesses, NUVAIX Paint, training, or any other enquiry.",
  ctaLabel = "Contact NUVAIX",
}: ContactCTAProps = {}) {
  return (
    <Section tone="sapphire" size="compact" width="narrow" className="text-center">
      <h2 className="heading-h2">{title}</h2>
      <p className="copy-body text-titanium-silver mx-auto mt-4 max-w-lg">{description}</p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact" variant="gold">
          {ctaLabel}
        </Button>
      </div>
    </Section>
  );
}

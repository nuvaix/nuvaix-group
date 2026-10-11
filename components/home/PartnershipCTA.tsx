import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Full-width, powerful close before the minimal Contact section: large
 * type, generous space, gold used only as an accent on the primary CTA.
 *
 * Deliberately a single, partnership-specific action (not a second
 * "Contact Us" button): the ContactCTA section immediately after this one
 * already owns the general "get in touch" conversion moment, so this
 * section only needs to carry visitors toward /partnerships, not
 * duplicate that path (see homepage CTA audit).
 */
export function PartnershipCTA() {
  return (
    <Section tone="black" size="large" width="narrow" className="text-center">
      <p className="label-eyebrow mb-4 text-champagne-gold">Partnerships</p>
      <h2 className="heading-display">Let&apos;s build what&apos;s next.</h2>
      <p className="copy-body-lg text-titanium-silver mx-auto mt-6 max-w-xl">
        Whether you are exploring construction and real estate opportunities, technology
        collaboration, or investment and venture partnerships, NUVAIX GROUP welcomes partners who
        share our commitment to innovation, discipline and long-term growth.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/partnerships" variant="gold" size="lg">
          Partner With NUVAIX
          <ArrowRightIcon size={18} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}

import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/ui/Divider";
import { company } from "@/data/company";

/**
 * A crisp, light-toned "letterhead" treatment, the one deliberate light
 * section in the About experience for visual contrast. The RC number is
 * intentionally the smallest, most muted line on the page.
 */
export function CorporateIdentity() {
  return (
    <Section tone="light">
      <div className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow mb-4 text-midnight-sapphire">Corporate Identity</p>
        <h2 className="heading-display text-deep-black">{company.brandName}</h2>
        <p className="label-eyebrow mt-4 text-deep-black/60">{company.brandLine}</p>
        <Divider className="my-10" />
        <p className="copy-body text-deep-black/70">{company.legalName}</p>
        <p className="copy-body-sm mt-1 text-deep-black/50">RC {company.rcNumber}</p>
      </div>
    </Section>
  );
}

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/**
 * Temporary foundation placeholder for the root route. This is not the
 * homepage: the real homepage (hero, business divisions, technology,
 * NUVAIX Paint, projects, leadership, partnerships, contact) is built in
 * a later milestone per docs/03-page-specifications.md.
 */
export default function Home() {
  return (
    <Section tone="black">
      <SectionHeading
        as="h1"
        eyebrow={company.brandName}
        title="Project foundation"
        description={`${company.legalName}, RC ${company.rcNumber}. The public site is under active construction. This placeholder will be replaced by the full homepage in a later milestone.`}
      />
      <div className="mt-8">
        <Button href="/design-system">View design system</Button>
      </div>
    </Section>
  );
}

import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { enquiryTypes } from "@/data/contact";

/**
 * Asymmetric editorial two-column layout, echoing
 * components/projects/ProjectsIntro.tsx and the other section intros.
 * Shows the verified enquiry-type taxonomy (docs/03-page-
 * specifications.md) as badges, reusing the exact same data the form's
 * Enquiry Type field is built from, so the two never drift apart.
 */
export function ContactIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Enquiry Areas</p>
          <h2 className="heading-h2">NUVAIX GROUP welcomes your enquiry.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            Use the form below to reach NUVAIX GROUP across any of the following areas.
          </p>
          <ul className="flex flex-wrap gap-2">
            {enquiryTypes.map((type) => (
              <li key={type.value}>
                <Badge variant="outline">{type.label}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

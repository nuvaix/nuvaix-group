import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";

// The same partnership framing already approved and shipped on the
// homepage (components/home/PartnershipCTA.tsx), not a new claim.
const partnershipAreas = [
  "Construction & Real Estate",
  "Technology Collaboration",
  "Investment & Venture Partnerships",
];

/**
 * Asymmetric editorial two-column layout, echoing
 * components/projects/ProjectsIntro.tsx, InsightsIntro.tsx and
 * CareersIntro.tsx's pattern. Reuses the exact partnership language
 * already approved on the homepage rather than writing a new claim.
 */
export function PartnershipsIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Partnership Areas</p>
          <h2 className="heading-h2">Let&apos;s build what&apos;s next.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            Whether you are exploring construction and real estate opportunities, technology
            collaboration, or investment and venture partnerships, NUVAIX GROUP welcomes the
            conversation.
          </p>
          <ul className="flex flex-wrap gap-2">
            {partnershipAreas.map((area) => (
              <li key={area}>
                <Badge variant="outline">{area}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

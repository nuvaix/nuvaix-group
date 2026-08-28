export interface TechnologyCapability {
  label: string;
}

/**
 * Verified technology capability areas, drawn from the approved source
 * material (docs/11-content-source-of-truth.md training material and the
 * Technology & IT Solutions MOA scope). Category labels only, no claims
 * about clients, projects or delivery volume.
 */
export const technologyCapabilities: TechnologyCapability[] = [
  { label: "Software Development" },
  { label: "IT Solutions" },
  { label: "Technology Consulting" },
  { label: "Systems & Infrastructure Support" },
  { label: "Digital Transformation" },
  { label: "Cybersecurity" },
  { label: "Technical Services" },
];

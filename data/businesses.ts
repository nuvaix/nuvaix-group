export type BusinessVisualPattern = "grid" | "network" | "flow";

export interface BusinessDivision {
  number: string;
  slug: string;
  name: string;
  /** A concise category label derived directly from the Memorandum of
   * Association scope in docs/11-content-source-of-truth.md, not
   * marketing copy: no verified descriptive text exists yet. */
  category: string;
  /** Short, MOA-derived capability fragments, not services copy: no
   * verified service catalogue exists yet. */
  capabilities: string[];
  /** Abstract art-direction pattern for BusinessVisual. A website
   * storytelling choice only, not a factual claim about the division
   * (see Milestone 6 instructions). */
  visualPattern: BusinessVisualPattern;
  /** Slugs of divisions to surface as "related" on this division's page.
   * A navigation relationship only, not a claim of formal partnership. */
  relatedSlugs: string[];
  /** Marks the division highlighted in directory/homepage compositions.
   * A website storytelling decision, not a claim of legal or
   * organizational precedence: exactly one division is featured today. */
  featured?: boolean;
}

/**
 * The 10 approved business divisions. Source: the Memorandum of
 * Association scope (docs/11-content-source-of-truth.md) and the
 * approved division list confirmed for Milestone 3. Slugs match
 * docs/02-site-map.md. NUVAIX Paint is intentionally not listed here:
 * it is a separate initiative under /paint, not an eleventh division.
 */
export const businesses: BusinessDivision[] = [
  {
    number: "01",
    slug: "construction-engineering",
    name: "Construction & Engineering",
    category: "Construction, engineering and project management",
    capabilities: ["Construction", "Engineering", "Project management"],
    visualPattern: "grid",
    relatedSlugs: ["real-estate", "manufacturing"],
  },
  {
    number: "02",
    slug: "real-estate",
    name: "Real Estate & Property",
    category: "Real estate and property services",
    capabilities: ["Real estate services", "Property services"],
    visualPattern: "grid",
    relatedSlugs: ["construction-engineering", "investments"],
  },
  {
    number: "03",
    slug: "technology-it-solutions",
    name: "Technology & IT Solutions",
    category: "Technology and IT solutions",
    capabilities: ["Technology solutions", "IT solutions"],
    visualPattern: "network",
    relatedSlugs: ["consultancy", "investments"],
    featured: true,
  },
  {
    number: "04",
    slug: "automobile",
    name: "Automobile Services",
    category: "Automobile services",
    capabilities: ["Automobile services"],
    visualPattern: "flow",
    relatedSlugs: ["manufacturing", "logistics"],
  },
  {
    number: "05",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    category: "Logistics and supply chain",
    capabilities: ["Logistics", "Transportation", "Import and export"],
    visualPattern: "flow",
    relatedSlugs: ["manufacturing", "retail-agriculture"],
  },
  {
    number: "06",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "Manufacturing and industrial operations",
    capabilities: ["Manufacturing", "Industrial operations"],
    visualPattern: "grid",
    relatedSlugs: ["logistics", "automobile"],
  },
  {
    number: "07",
    slug: "healthcare",
    name: "Healthcare Services",
    category: "Healthcare support services",
    capabilities: ["Healthcare support", "Pharmaceutical distribution", "Medical supply services"],
    visualPattern: "grid",
    relatedSlugs: ["retail-agriculture", "consultancy"],
  },
  {
    number: "08",
    slug: "retail-agriculture",
    name: "Retail & Agriculture",
    category: "Retail trading and agribusiness",
    capabilities: ["Retail trading", "Agriculture", "Agribusiness"],
    visualPattern: "flow",
    relatedSlugs: ["logistics", "healthcare"],
  },
  {
    number: "09",
    slug: "consultancy",
    name: "Consultancy Services",
    category: "Consultancy services",
    capabilities: ["Consultancy"],
    visualPattern: "network",
    relatedSlugs: ["technology-it-solutions", "investments"],
  },
  {
    number: "10",
    slug: "investments",
    name: "Investments & Venture Development",
    category: "Investment and venture development",
    capabilities: ["Investment", "Venture development"],
    visualPattern: "network",
    relatedSlugs: ["technology-it-solutions", "real-estate", "consultancy"],
  },
];

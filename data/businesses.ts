export interface BusinessDivision {
  number: string;
  slug: string;
  name: string;
  /** A concise category label derived directly from the Memorandum of
   * Association scope in docs/11-content-source-of-truth.md, not
   * marketing copy: no verified descriptive text exists yet. */
  category: string;
}

/**
 * The 10 approved business divisions. Source: the Memorandum of
 * Association scope (docs/11-content-source-of-truth.md) and the
 * approved division list confirmed for Milestone 3. Slugs match
 * docs/02-site-map.md.
 */
export const businesses: BusinessDivision[] = [
  {
    number: "01",
    slug: "construction-engineering",
    name: "Construction & Engineering",
    category: "Construction, engineering and project management",
  },
  {
    number: "02",
    slug: "real-estate",
    name: "Real Estate & Property",
    category: "Real estate and property services",
  },
  {
    number: "03",
    slug: "technology-it-solutions",
    name: "Technology & IT Solutions",
    category: "Technology and IT solutions",
  },
  {
    number: "04",
    slug: "automobile",
    name: "Automobile Services",
    category: "Automobile services",
  },
  {
    number: "05",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    category: "Logistics and supply chain",
  },
  {
    number: "06",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "Manufacturing and industrial operations",
  },
  {
    number: "07",
    slug: "healthcare",
    name: "Healthcare Services",
    category: "Healthcare support services",
  },
  {
    number: "08",
    slug: "retail-agriculture",
    name: "Retail & Agriculture",
    category: "Retail trading and agribusiness",
  },
  {
    number: "09",
    slug: "consultancy",
    name: "Consultancy Services",
    category: "Consultancy services",
  },
  {
    number: "10",
    slug: "investments",
    name: "Investments & Venture Development",
    category: "Investment and venture development",
  },
];

export type NavDropdownKey = "businesses" | "technology" | "paint";

export interface NavChildLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Present only for items with a desktop dropdown / mobile expandable
   * section. "businesses" renders the full mega menu from data/businesses.ts
   * instead of the `children` list. */
  dropdown?: NavDropdownKey;
  children?: NavChildLink[];
}

/** Primary header navigation, per docs/02-site-map.md. */
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses", dropdown: "businesses" },
  {
    label: "Technology",
    href: "/technology",
    dropdown: "technology",
    children: [
      { label: "Solutions", href: "/technology/solutions" },
      { label: "Training", href: "/technology/training" },
    ],
  },
  {
    label: "Paint",
    href: "/paint",
    dropdown: "paint",
    children: [
      { label: "Products", href: "/paint/products" },
      { label: "Colors", href: "/paint/colors" },
      { label: "Bulk Orders", href: "/paint/bulk-orders" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

/** The two header CTAs, right-aligned. */
export const headerCtas: NavChildLink[] = [
  { label: "Partner With Us", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export interface FooterColumn {
  title: string;
  links: NavChildLink[];
}

/** Footer navigation columns, per the approved Milestone 3 footer spec. */
export const footerNav: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/about/mission" },
      { label: "Vision", href: "/about/vision" },
      { label: "Values", href: "/about/values" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Businesses",
    links: [
      { label: "Construction", href: "/businesses/construction-engineering" },
      { label: "Real Estate", href: "/businesses/real-estate" },
      { label: "Technology", href: "/businesses/technology-it-solutions" },
      { label: "Automobile", href: "/businesses/automobile" },
      { label: "Logistics", href: "/businesses/logistics" },
      { label: "Manufacturing", href: "/businesses/manufacturing" },
      { label: "Healthcare", href: "/businesses/healthcare" },
      { label: "Retail & Agriculture", href: "/businesses/retail-agriculture" },
      { label: "Consultancy", href: "/businesses/consultancy" },
      { label: "Investments", href: "/businesses/investments" },
      { label: "NUVAIX Paint", href: "/paint" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Solutions", href: "/technology/solutions" },
      { label: "Training", href: "/technology/training" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Insights", href: "/insights" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

import { SectionSubnav } from "@/components/layout/SectionSubnav";

export type CorporateSection = "about" | "mission" | "vision" | "values" | "leadership";

const items = [
  { key: "about", label: "About", href: "/about" },
  { key: "mission", label: "Mission", href: "/about/mission" },
  { key: "vision", label: "Vision", href: "/about/vision" },
  { key: "values", label: "Values", href: "/about/values" },
  { key: "leadership", label: "Leadership", href: "/about/leadership" },
];

export interface CorporateSubnavProps {
  active: CorporateSection;
}

export function CorporateSubnav({ active }: CorporateSubnavProps) {
  return <SectionSubnav items={items} active={active} ariaLabel="About NUVAIX" />;
}

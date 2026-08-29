import { SectionSubnav } from "@/components/layout/SectionSubnav";

export type TechnologySection = "technology" | "solutions" | "training";

const items = [
  { key: "technology", label: "Technology", href: "/technology" },
  { key: "solutions", label: "Solutions", href: "/technology/solutions" },
  { key: "training", label: "Training", href: "/technology/training" },
];

export interface TechnologySubnavProps {
  active: TechnologySection;
}

export function TechnologySubnav({ active }: TechnologySubnavProps) {
  return <SectionSubnav items={items} active={active} ariaLabel="Technology" />;
}

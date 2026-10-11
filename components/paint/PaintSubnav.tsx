import { SectionSubnav } from "@/components/layout/SectionSubnav";

export type PaintSection = "paint" | "products" | "colors" | "bulk-orders";

const items = [
  { key: "paint", label: "Paint", href: "/paint" },
  { key: "products", label: "Products", href: "/paint/products" },
  { key: "colors", label: "Colors", href: "/paint/colors" },
  { key: "bulk-orders", label: "Bulk Orders", href: "/paint/bulk-orders" },
];

export interface PaintSubnavProps {
  active: PaintSection;
}

export function PaintSubnav({ active }: PaintSubnavProps) {
  return <SectionSubnav items={items} active={active} ariaLabel="NUVAIX Paint" />;
}

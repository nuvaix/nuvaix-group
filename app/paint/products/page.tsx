import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Products" };

export default function PaintProductsPage() {
  return <RoutePlaceholder eyebrow="NUVAIX Paint" title="Products" />;
}

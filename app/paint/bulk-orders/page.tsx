import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Bulk Orders" };

export default function PaintBulkOrdersPage() {
  return <RoutePlaceholder eyebrow="NUVAIX Paint" title="Bulk Orders" />;
}

import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Paint" };

export default function PaintPage() {
  return <RoutePlaceholder eyebrow="NUVAIX Paint" title="NUVAIX Paint" />;
}

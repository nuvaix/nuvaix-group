import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Colors" };

export default function PaintColorsPage() {
  return <RoutePlaceholder eyebrow="NUVAIX Paint" title="Colors" />;
}

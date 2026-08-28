import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Solutions" };

export default function TechnologySolutionsPage() {
  return <RoutePlaceholder eyebrow="Technology" title="Solutions" />;
}

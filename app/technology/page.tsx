import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return <RoutePlaceholder eyebrow="Technology" title="Technology" />;
}

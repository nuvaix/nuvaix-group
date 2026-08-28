import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Training" };

export default function TechnologyTrainingPage() {
  return <RoutePlaceholder eyebrow="Technology" title="Training" />;
}

import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return <RoutePlaceholder eyebrow="Insights" title="Insights" />;
}

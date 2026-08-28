import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Values" };

export default function ValuesPage() {
  return <RoutePlaceholder eyebrow="About" title="Values" />;
}

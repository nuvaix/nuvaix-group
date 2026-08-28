import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return <RoutePlaceholder eyebrow="Careers" title="Careers" />;
}

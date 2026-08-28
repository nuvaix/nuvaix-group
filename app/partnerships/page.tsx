import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Partnerships" };

export default function PartnershipsPage() {
  return <RoutePlaceholder eyebrow="Partnerships" title="Partner With Us" />;
}

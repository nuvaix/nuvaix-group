import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <RoutePlaceholder eyebrow="Legal" title="Terms of Use" />;
}

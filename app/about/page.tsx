import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <RoutePlaceholder eyebrow="About" title="About NUVAIX" />;
}

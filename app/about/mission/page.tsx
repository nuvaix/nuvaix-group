import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Mission" };

export default function MissionPage() {
  return <RoutePlaceholder eyebrow="About" title="Mission" />;
}

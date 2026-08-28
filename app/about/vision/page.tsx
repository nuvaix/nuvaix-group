import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Vision" };

export default function VisionPage() {
  return <RoutePlaceholder eyebrow="About" title="Vision" />;
}

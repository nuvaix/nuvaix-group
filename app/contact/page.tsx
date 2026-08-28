import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <RoutePlaceholder eyebrow="Contact" title="Contact NUVAIX" />;
}

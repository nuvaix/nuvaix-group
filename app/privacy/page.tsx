import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <RoutePlaceholder eyebrow="Legal" title="Privacy Policy" />;
}

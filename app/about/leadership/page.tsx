import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <RoutePlaceholder
      eyebrow="About"
      title="Leadership"
      description="Leadership profiles will be published once verified public titles are confirmed."
    />
  );
}

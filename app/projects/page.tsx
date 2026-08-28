import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <RoutePlaceholder
      eyebrow="Projects"
      title="Projects"
      description="A portfolio of genuine NUVAIX projects will be published here as they become available."
    />
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { BusinessVisual } from "@/components/businesses/BusinessVisual";
import { businesses } from "@/data/businesses";
import type { Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
  size?: "default" | "large";
}

/**
 * The single reusable project card. Uses project.image (real, verified
 * photography) when present; otherwise falls back to the related
 * business division's own BusinessVisual pattern (Milestone 10, section
 * 33: a decorative visual only, tied to the project's verified
 * businessSlug relationship rather than a generic Technology/Paint
 * graphic standing in for a photograph). Never shows a fabricated
 * attribute: only fields actually present on the project render.
 */
export function ProjectCard({ project, size = "default" }: ProjectCardProps) {
  const isLarge = size === "large";
  const relatedBusiness = project.businessSlug
    ? businesses.find((item) => item.slug === project.businessSlug)
    : undefined;

  return (
    <Card
      href={`/projects/${project.slug}`}
      tone="interactive"
      media={
        <ImageFrame aspect={isLarge ? "landscape" : "square"} radius="none">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={
                isLarge ? "(min-width: 1024px) 48rem, 90vw" : "(min-width: 1024px) 20rem, 45vw"
              }
              className={IMAGE_FILL_CLASSNAME}
            />
          ) : (
            <BusinessVisual pattern={relatedBusiness?.visualPattern ?? "grid"} />
          )}
        </ImageFrame>
      }
    >
      <p className="copy-caption text-subtle-foreground">{project.category}</p>
      <div className={cn("flex flex-wrap items-center gap-3", "mt-3")}>
        <h3 className={isLarge ? "heading-h3" : "heading-h4"}>{project.title}</h3>
        {project.status ? <PlannedStatusBadge status={project.status} /> : null}
      </div>
      <p className="copy-body-sm text-muted-foreground mt-2">
        {project.location}, {project.year}
      </p>
    </Card>
  );
}

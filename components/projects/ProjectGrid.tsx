import Link from "next/link";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

export interface ProjectGridProps {
  projects: Project[];
}

/**
 * Editorial composition for the /projects directory, echoing
 * PaintProductGrid and TechnologyCapabilities' "one large featured item
 * plus a structured list" pattern (Milestone 10, section 7: not a
 * repetitive generic card wall): the one project marked `featured`
 * (data-driven, not hardcoded) shown large with real imagery where
 * available, the remaining projects as a compact numbered list. Falls
 * back to an even grid if no project is marked featured. Renders
 * nothing today (data/projects.ts is empty); ready the moment verified
 * projects exist.
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const featured = projects.find((project) => project.featured);
  const rest = featured ? projects.filter((project) => project.slug !== featured.slug) : [];

  if (!featured) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <ProjectCard project={featured} size="large" />
      <ul className="divide-border divide-y">
        {rest.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="hover:bg-surface-hover -mx-2 flex items-center gap-4 rounded-md px-2 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg flex-1 font-medium">{project.title}</span>
              {project.status ? (
                <PlannedStatusBadge status={project.status} className="shrink-0" />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

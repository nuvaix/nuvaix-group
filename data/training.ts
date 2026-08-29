/**
 * Verified technology training subject areas, from the supplied
 * training material (docs/11-content-source-of-truth.md, Technology
 * training). Topic names only, not structured course records: no
 * verified duration, level or format exists per subject.
 */
export const trainingTopics: string[] = [
  "Python Programming",
  "Git & GitHub",
  "Linux Administration & Hardening",
  "Bash Scripting & Automation",
  "Computer Networking",
  "Frontend Web Development",
  "Backend/Django",
  "C Programming",
  "Cybersecurity",
  "Penetration Testing & Ethical Hacking",
];

export interface Course {
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string;
  level?: string;
  duration?: string;
  format?: string;
  topics?: string[];
  status?: "planned" | "live";
  featured?: boolean;
}

/**
 * Empty until individual courses (with a verified duration, level and
 * format, not just a subject name) are confirmed for public release.
 * Do not add fictional entries to populate the design (see Milestone 7
 * instructions). CourseGrid renders CourseEmptyState while this stays
 * empty, and /technology/training/[slug] is a bounded route
 * (generateStaticParams from this array, dynamicParams = false) ready
 * to serve real course pages the moment entries exist here, with no
 * redesign required.
 */
export const courses: Course[] = [];

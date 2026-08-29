import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "@/data/training";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { TechnologyCTA } from "@/components/technology/TechnologyCTA";

// Bounded per docs/17: generateStaticParams reflects data/training.ts's
// courses array exactly, which is empty today, so this route resolves to
// a true 404 for every slug until real, verified courses are added there.
// No fictional course pages are generated.
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return { title: "Course" };
  }

  const description =
    course.shortDescription ?? `${course.title}: a NUVAIX GROUP technology course.`;

  return {
    title: course.title,
    description,
    alternates: { canonical: `/technology/training/${course.slug}` },
    openGraph: { title: course.title, description, type: "website" },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Training" title={course.title} description={course.shortDescription} />

      {course.description || course.topics?.length ? (
        <Section tone="black">
          {course.description ? (
            <p className="copy-body-lg text-muted-foreground max-w-2xl">{course.description}</p>
          ) : null}
          {course.topics && course.topics.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {course.topics.map((topic) => (
                <li key={topic}>
                  <Badge variant="outline">{topic}</Badge>
                </li>
              ))}
            </ul>
          ) : null}
        </Section>
      ) : null}

      <TechnologyCTA
        title={`Interested in ${course.title}?`}
        description="Contact NUVAIX GROUP to enquire about this course."
        ctaLabel="Enquire About Training"
      />
    </>
  );
}

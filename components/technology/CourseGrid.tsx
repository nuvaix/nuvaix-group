import { Card } from "@/components/ui/Card";
import { CourseEmptyState } from "./CourseEmptyState";
import { courses } from "@/data/training";

/**
 * Renders real courses automatically once data/training.ts has entries;
 * until then (today, always) falls back to CourseEmptyState. No page
 * rewrite is required when courses are added.
 */
export function CourseGrid() {
  if (courses.length === 0) {
    return <CourseEmptyState />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.slug} tone="interactive" href={`/technology/training/${course.slug}`}>
          <h3 className="heading-h4">{course.title}</h3>
          {course.shortDescription ? (
            <p className="copy-body-sm text-muted-foreground mt-2">{course.shortDescription}</p>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

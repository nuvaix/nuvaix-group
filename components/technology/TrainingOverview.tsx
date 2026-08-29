import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { trainingTopics } from "@/data/training";

/** Overview statement plus the verified subject-area list, presented as
 * topic badges, not fabricated course cards. */
export function TrainingOverview() {
  return (
    <>
      <Section tone="black">
        <SectionHeading
          eyebrow="Training Overview"
          title="Practical technology training."
          description="NUVAIX GROUP's technology training is built around practical, hands-on subject areas spanning programming, systems administration, networking and cybersecurity."
        />
      </Section>

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Learning Areas"
          title="Technology subjects NUVAIX training covers."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {trainingTopics.map((topic) => (
            <li key={topic}>
              <Badge variant="outline">{topic}</Badge>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

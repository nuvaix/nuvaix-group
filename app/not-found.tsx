import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="black">
      <SectionHeading
        as="h1"
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist or may have moved."
      />
      <div className="mt-8">
        <Button href="/">Return home</Button>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/icons";

// Development preview only: keep it out of search results.
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colorSwatches = [
  { name: "Midnight Sapphire", hex: "#0A1D3D", className: "bg-midnight-sapphire" },
  { name: "Titanium Silver", hex: "#C0C6CF", className: "bg-titanium-silver" },
  { name: "Champagne Gold", hex: "#D4AF37", className: "bg-champagne-gold" },
  { name: "Deep Black", hex: "#030507", className: "bg-deep-black" },
  { name: "Off White", hex: "#F5F5F2", className: "bg-off-white" },
];

const typographySamples = [
  { label: "Display", className: "heading-display", sample: "NUVAIX GROUP" },
  { label: "H1", className: "heading-h1", sample: "Diversified. Technology-driven." },
  { label: "H2", className: "heading-h2", sample: "Section heading" },
  { label: "H3", className: "heading-h3", sample: "Subsection heading" },
  { label: "H4", className: "heading-h4", sample: "Card or list heading" },
  {
    label: "Body large",
    className: "copy-body-lg",
    sample: "Supporting copy that introduces a section.",
  },
  { label: "Body", className: "copy-body", sample: "Standard paragraph copy for general content." },
  { label: "Small", className: "copy-small", sample: "Fine print, captions and metadata." },
  { label: "Eyebrow", className: "label-eyebrow", sample: "Section label" },
  { label: "Navigation", className: "label-nav", sample: "Navigation item" },
  { label: "Button", className: "label-button", sample: "Button label" },
];

export default function DesignSystemPage() {
  return (
    <>
      <Section tone="black">
        <SectionHeading
          as="h1"
          eyebrow="Internal preview"
          title="NUVAIX design system"
          description="A development-only preview of the foundation design tokens and base components. Not part of the public site."
        />
      </Section>

      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">Color</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {colorSwatches.map((swatch) => (
            <div key={swatch.name} className="overflow-hidden rounded-lg border border-border">
              <div className={`h-24 w-full ${swatch.className}`} />
              <div className="bg-background p-3">
                <p className="copy-small font-medium">{swatch.name}</p>
                <p className="copy-small text-muted-foreground">{swatch.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="black">
        <h2 className="heading-h3 mb-8">Typography</h2>
        <div className="space-y-6">
          {typographySamples.map((item) => (
            <div key={item.label} className="border-b border-border pb-6 last:border-none">
              <p className="copy-small mb-2 text-muted-foreground">{item.label}</p>
              <p className={item.className}>{item.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">Buttons and icon buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary">
            With icon <ArrowRightIcon size={16} />
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <IconButton variant="primary" aria-label="Example primary icon button">
            <ArrowRightIcon size={18} />
          </IconButton>
          <IconButton variant="secondary" aria-label="Close">
            <CloseIcon size={18} />
          </IconButton>
          <IconButton variant="ghost" aria-label="Menu">
            <MenuIcon size={18} />
          </IconButton>
        </div>
        <p className="copy-small mt-4 text-muted-foreground">
          Tab to the controls above to see the focus state.
        </p>
      </Section>

      <Section tone="black">
        <h2 className="heading-h3 mb-8">Cards and badges</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card tone="surface">
            <h3 className="heading-h4 mb-2">Surface card</h3>
            <p className="copy-body text-muted-foreground">
              Sample supporting copy for a surface-tone card.
            </p>
          </Card>
          <Card tone="outline">
            <h3 className="heading-h4 mb-2">Outline card</h3>
            <p className="copy-body text-muted-foreground">
              Sample supporting copy for an outline-tone card.
            </p>
          </Card>
          <Card tone="surface">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <PlannedStatusBadge status="planned" />
              <PlannedStatusBadge status="live" />
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="sapphire">
        <h2 className="heading-h3 mb-6">Spacing and divider</h2>
        <p className="copy-body mb-6 text-muted-foreground">
          Sections use a consistent, responsive vertical rhythm and a shared max-width container.
        </p>
        <Divider />
      </Section>
    </>
  );
}

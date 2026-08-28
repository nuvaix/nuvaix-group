import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Tabs, TabList, TabPanel, TabTrigger } from "@/components/ui/Tabs";
import { Field, Input, Textarea, Select, Checkbox, Radio, Label } from "@/components/ui/form";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
} from "@/components/icons";
import { DialogDemo } from "./DialogDemo";
import { ToastDemo } from "./ToastDemo";
import { cn } from "@/lib/utils";

// Development preview only: keep it out of search results.
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

function SwatchLabel({ name, token }: { name: string; token: string }) {
  return (
    <div className="bg-background p-3">
      <p className="copy-body-sm font-medium">{name}</p>
      <p className="copy-caption text-muted-foreground">{token}</p>
    </div>
  );
}

const brandSwatches = [
  { name: "Midnight Sapphire", token: "#0A1D3D", className: "bg-midnight-sapphire" },
  { name: "Titanium Silver", token: "#C0C6CF", className: "bg-titanium-silver" },
  { name: "Champagne Gold", token: "#D4AF37", className: "bg-champagne-gold" },
  { name: "Deep Black", token: "#030507", className: "bg-deep-black" },
  { name: "Off White", token: "#F5F5F2", className: "bg-off-white" },
];

type SwatchKind = "fill" | "text" | "border";

const semanticSwatches: { name: string; token: string; kind: SwatchKind; className: string }[] = [
  { name: "Background", token: "--color-background", kind: "fill", className: "bg-background" },
  {
    name: "Background elevated",
    token: "--color-background-elevated",
    kind: "fill",
    className: "bg-background-elevated",
  },
  { name: "Surface", token: "--color-surface", kind: "fill", className: "bg-surface" },
  {
    name: "Surface hover",
    token: "--color-surface-hover",
    kind: "fill",
    className: "bg-surface-hover",
  },
  { name: "Foreground", token: "--color-foreground", kind: "text", className: "text-foreground" },
  {
    name: "Muted foreground",
    token: "--color-muted-foreground",
    kind: "text",
    className: "text-muted-foreground",
  },
  {
    name: "Subtle foreground",
    token: "--color-subtle-foreground",
    kind: "text",
    className: "text-subtle-foreground",
  },
  { name: "Border", token: "--color-border", kind: "border", className: "border-border" },
  {
    name: "Border hover",
    token: "--color-border-hover",
    kind: "border",
    className: "border-border-hover",
  },
  { name: "Accent", token: "--color-accent", kind: "fill", className: "bg-accent" },
  {
    name: "Accent hover",
    token: "--color-accent-hover",
    kind: "fill",
    className: "bg-accent-hover",
  },
  {
    name: "Focus ring",
    token: "--color-focus-ring",
    kind: "border",
    className: "border-focus-ring",
  },
  { name: "Success", token: "--color-success", kind: "fill", className: "bg-success" },
  { name: "Warning", token: "--color-warning", kind: "fill", className: "bg-warning" },
  { name: "Error", token: "--color-error", kind: "fill", className: "bg-error" },
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
  {
    label: "Body small",
    className: "copy-body-sm",
    sample: "Secondary copy, form hints and fine print.",
  },
  { label: "Caption", className: "copy-caption", sample: "Image caption or supplementary note." },
  { label: "Eyebrow", className: "label-eyebrow", sample: "Section label" },
  { label: "Metadata", className: "label-metadata", sample: "March 2026, Insights" },
  { label: "Navigation", className: "label-nav", sample: "Navigation item" },
  { label: "Button", className: "label-button", sample: "Button label" },
];

const iconSamples = [
  { name: "Arrow", Icon: ArrowRightIcon },
  { name: "Chevron", Icon: ChevronDownIcon },
  { name: "Check", Icon: CheckIcon },
  { name: "Close", Icon: CloseIcon },
  { name: "Menu", Icon: MenuIcon },
];

export default function DesignSystemPage() {
  return (
    <>
      <Section tone="black">
        <SectionHeading
          as="h1"
          eyebrow="Internal preview"
          title="NUVAIX design system"
          description="A development-only reference for the foundation design tokens and reusable UI primitives. Not part of the public site, and not a source of NUVAIX business facts."
        />
      </Section>

      {/* 1. Brand colors */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">1. Brand colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brandSwatches.map((swatch) => (
            <div key={swatch.name} className="border-border overflow-hidden rounded-lg border">
              <div className={cn("h-24 w-full", swatch.className)} />
              <SwatchLabel name={swatch.name} token={swatch.token} />
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Semantic colors */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">2. Semantic colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {semanticSwatches.map((swatch) => (
            <div key={swatch.name} className="border-border overflow-hidden rounded-lg border">
              {swatch.kind === "fill" ? (
                <div className={cn("h-24 w-full", swatch.className)} />
              ) : null}
              {swatch.kind === "text" ? (
                <div className="bg-surface flex h-24 w-full items-center justify-center">
                  <span className={cn("text-2xl font-semibold", swatch.className)}>Aa</span>
                </div>
              ) : null}
              {swatch.kind === "border" ? (
                <div className="bg-surface flex h-24 w-full items-center justify-center p-4">
                  <div className={cn("h-full w-full rounded-md border-2", swatch.className)} />
                </div>
              ) : null}
              <SwatchLabel name={swatch.name} token={swatch.token} />
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Typography */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">3. Typography</h2>
        <div className="space-y-6">
          {typographySamples.map((item) => (
            <div key={item.label} className="border-border border-b pb-6 last:border-none">
              <p className="copy-body-sm text-muted-foreground mb-2">{item.label}</p>
              <p className={item.className}>{item.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Buttons */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">4. Buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Explore our businesses</Button>
          <Button variant="gold">Partner with us</Button>
          <Button variant="secondary">Contact NUVAIX</Button>
          <Button variant="outline">View details</Button>
          <Button variant="ghost">Learn more</Button>
        </div>
        <div className="bg-background-elevated mt-6 flex flex-wrap items-center gap-4 rounded-lg p-6">
          <Button variant="dark">Dark on light</Button>
          <Button variant="light">Light on dark</Button>
        </div>
        <p className="copy-body-sm text-muted-foreground mt-6 mb-3">Sizes</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
        <p className="copy-body-sm text-muted-foreground mt-6 mb-3">States</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="gold">
            Submit enquiry <ArrowRightIcon size={16} />
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Submitting
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <IconButton variant="gold" aria-label="Example gold icon button">
            <ArrowRightIcon size={18} />
          </IconButton>
          <IconButton variant="secondary" aria-label="Close">
            <CloseIcon size={18} />
          </IconButton>
          <IconButton variant="ghost" aria-label="Menu">
            <MenuIcon size={18} />
          </IconButton>
        </div>
        <p className="copy-body-sm text-muted-foreground mt-4">
          Tab to any control above to see the shared focus-visible ring.
        </p>
      </Section>

      {/* 5. Cards */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">5. Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card tone="standard">
            <h3 className="heading-h4 mb-2">Standard</h3>
            <p className="copy-body text-muted-foreground">Default surface, no shadow or border.</p>
          </Card>
          <Card tone="elevated">
            <h3 className="heading-h4 mb-2">Elevated</h3>
            <p className="copy-body text-muted-foreground">Surface plus a restrained shadow.</p>
          </Card>
          <Card tone="bordered">
            <h3 className="heading-h4 mb-2">Bordered</h3>
            <p className="copy-body text-muted-foreground">
              Transparent fill, defined by a border only.
            </p>
          </Card>
          <Card tone="premium">
            <h3 className="heading-h4 mb-2">Premium</h3>
            <p className="copy-body text-muted-foreground">
              Border and shadow together, still restrained.
            </p>
          </Card>
          <Card tone="interactive" href="#">
            <h3 className="heading-h4 mb-2">Interactive</h3>
            <p className="copy-body text-muted-foreground">
              Renders as a link; hover and focus are live.
            </p>
          </Card>
          <Card tone="standard" media={<ImageFrame aspect="landscape" radius="none" />}>
            <h3 className="heading-h4 mb-2">With media</h3>
            <p className="copy-body text-muted-foreground">
              The `media` slot, not a separate tone.
            </p>
          </Card>
        </div>
      </Section>

      {/* 6. Badges */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">6. Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="subtle">Subtle</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
        <p className="copy-body-sm text-muted-foreground mt-6 mb-3">
          Operational status uses PlannedStatusBadge exclusively, never a raw Badge variant.
        </p>
        <div className="flex flex-wrap gap-2">
          <PlannedStatusBadge status="planned" />
          <PlannedStatusBadge status="live" />
        </div>
      </Section>

      {/* 7. Form controls */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">7. Form controls</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Field
              label="Full name"
              htmlFor="ds-name"
              description="As it should appear on correspondence."
            >
              <Input id="ds-name" name="name" placeholder="Jordan Whitfield" />
            </Field>
            <Field
              label="Work email"
              htmlFor="ds-email"
              required
              error="Enter a valid email address."
            >
              <Input
                id="ds-email"
                name="email"
                type="email"
                state="invalid"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Company" htmlFor="ds-company">
              <Input id="ds-company" name="company" state="valid" defaultValue="NUVAIX Group" />
            </Field>
            <Field label="Disabled field" htmlFor="ds-disabled">
              <Input id="ds-disabled" name="disabled" disabled placeholder="Not editable" />
            </Field>
          </div>
          <div className="space-y-6">
            <Field label="Enquiry type" htmlFor="ds-select">
              <Select id="ds-select" name="type" defaultValue="general">
                <option value="general">General</option>
                <option value="partnership">Partnership</option>
                <option value="technology">Technology</option>
              </Select>
            </Field>
            <Field
              label="Message"
              htmlFor="ds-message"
              description="Sample field, not a working form yet."
            >
              <Textarea id="ds-message" name="message" placeholder="Write your message" />
            </Field>
            <div className="flex items-center gap-3">
              <Checkbox id="ds-consent" name="consent" defaultChecked />
              <Label htmlFor="ds-consent">I agree to be contacted</Label>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Radio id="ds-radio-a" name="ds-radio" defaultChecked />
                <Label htmlFor="ds-radio-a">Option A</Label>
              </div>
              <div className="flex items-center gap-3">
                <Radio id="ds-radio-b" name="ds-radio" />
                <Label htmlFor="ds-radio-b">Option B</Label>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Accordion */}
      <Section tone="black" width="narrow">
        <h2 className="heading-h3 mb-8">8. Accordion</h2>
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this accordion used for?</AccordionTrigger>
            <AccordionContent>
              Sample content for the design-system preview: later, FAQs, course curricula, service
              information and Paint product information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. Each trigger is a real button with aria-expanded and aria-controls, and the
              closed panel is inert so it cannot receive focus while hidden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Does it respect reduced motion?</AccordionTrigger>
            <AccordionContent>
              Yes, via the same global prefers-reduced-motion rule every other primitive on this
              page uses.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* 9. Tabs */}
      <Section tone="sapphire" width="narrow">
        <h2 className="heading-h3 mb-8">9. Tabs</h2>
        <Tabs defaultValue="overview">
          <TabList aria-label="Sample tabs">
            <TabTrigger value="overview">Overview</TabTrigger>
            <TabTrigger value="details">Details</TabTrigger>
            <TabTrigger value="disabled" disabled>
              Disabled
            </TabTrigger>
          </TabList>
          <TabPanel value="overview">
            <p className="copy-body text-muted-foreground">
              Sample overview panel. Arrow keys move between tabs; only the active tab is tabbable.
            </p>
          </TabPanel>
          <TabPanel value="details">
            <p className="copy-body text-muted-foreground">
              Sample details panel, for later use with business categories, Paint products, project
              filtering and training information.
            </p>
          </TabPanel>
          <TabPanel value="disabled">
            <p className="copy-body text-muted-foreground">Not reachable: this tab is disabled.</p>
          </TabPanel>
        </Tabs>
      </Section>

      {/* 10. Dialog */}
      <Section tone="black">
        <h2 className="heading-h3 mb-4">10. Dialog</h2>
        <p className="copy-body text-muted-foreground mb-6">
          Built on the native dialog element: real focus trapping, Escape to close and focus
          restoration, with no hand-rolled focus-management code.
        </p>
        <DialogDemo />
      </Section>

      {/* 11. Toast */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-4">11. Toast</h2>
        <p className="copy-body text-muted-foreground mb-6">
          Not connected to a backend. A future form submission will call the same showToast function
          with a real result.
        </p>
        <ToastDemo />
      </Section>

      {/* 12. Icons */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">12. Icons</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          {iconSamples.map(({ name, Icon }) => (
            <div
              key={name}
              className="border-border flex flex-col items-center gap-3 rounded-lg border p-6"
            >
              <Icon size={24} />
              <span className="copy-body-sm text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
        <p className="copy-body-sm text-muted-foreground mt-6">
          Custom inline SVG only, no icon library. New icons follow the same IconProps contract in
          components/icons.
        </p>
      </Section>

      {/* 13. Sections */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-8">13. Sections</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="border-border overflow-hidden rounded-lg border">
            <Section tone="black" size="compact" containerClassName="text-center">
              <p className="copy-body-sm">tone=&quot;black&quot;</p>
            </Section>
          </div>
          <div className="border-border overflow-hidden rounded-lg border">
            <Section tone="sapphire" size="compact" containerClassName="text-center">
              <p className="copy-body-sm">tone=&quot;sapphire&quot;</p>
            </Section>
          </div>
          <div className="border-border overflow-hidden rounded-lg border">
            <Section tone="light" size="compact" containerClassName="text-center">
              <p className="copy-body-sm">tone=&quot;light&quot;</p>
            </Section>
          </div>
        </div>
        <p className="copy-body-sm text-muted-foreground mt-6">
          size controls vertical rhythm only (compact / standard / large); width controls narrow /
          standard / wide / full; container=&#123;false&#125; renders true edge-to-edge content.
        </p>
      </Section>

      {/* 14. Image treatments */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">14. Image treatments</h2>
        <p className="copy-body-sm text-muted-foreground mb-6">
          No real or placeholder corporate photography: these are empty ImageFrame containers
          demonstrating the cropping, radius and overlay system only.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <ImageFrame aspect="square" radius="md" />
            <p className="copy-caption text-muted-foreground mt-2">Square, medium radius</p>
          </div>
          <div>
            <ImageFrame aspect="portrait" radius="lg" />
            <p className="copy-caption text-muted-foreground mt-2">Portrait, large radius</p>
          </div>
          <div>
            <ImageFrame aspect="wide" radius="xl" overlay="subtle" />
            <p className="copy-caption text-muted-foreground mt-2">Wide, subtle overlay</p>
          </div>
          <div>
            <ImageFrame aspect="video" radius="none" overlay="gradient">
              <div className="relative flex h-full items-end p-4">
                <span className="label-eyebrow text-off-white relative">Editorial overlay</span>
              </div>
            </ImageFrame>
            <p className="copy-caption text-muted-foreground mt-2">Full bleed, gradient overlay</p>
          </div>
        </div>
      </Section>

      {/* 15. Responsive examples */}
      <Section tone="sapphire">
        <h2 className="heading-h3 mb-4">15. Responsive examples</h2>
        <p className="copy-body-sm text-muted-foreground mb-2">
          Current breakpoint (resize the window to check):
        </p>
        <p className="label-eyebrow text-champagne-gold mb-6">
          <span className="sm:hidden">Base (&lt; 640px)</span>
          <span className="hidden sm:inline md:hidden">sm (640px+)</span>
          <span className="hidden md:inline lg:hidden">md (768px+)</span>
          <span className="hidden lg:inline xl:hidden">lg (1024px+)</span>
          <span className="hidden xl:inline">xl+ (1280px+)</span>
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["One", "Two", "Three", "Four"].map((label) => (
            <Card key={label} tone="bordered">
              <p className="copy-body-sm">{label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 16. Accessibility states */}
      <Section tone="black">
        <h2 className="heading-h3 mb-8">16. Accessibility states</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="copy-body-sm text-muted-foreground mb-3">Disabled controls</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>
                Disabled button
              </Button>
              <Checkbox disabled defaultChecked aria-label="Disabled checkbox" />
              <Radio disabled aria-label="Disabled radio" />
            </div>
          </div>
          <div>
            <p className="copy-body-sm text-muted-foreground mb-3">Error and success states</p>
            <div className="flex flex-wrap items-center gap-4">
              <Input state="invalid" defaultValue="invalid@" aria-label="Invalid example" />
              <Input state="valid" defaultValue="valid@nuvaix.com" aria-label="Valid example" />
            </div>
          </div>
        </div>
        <Divider className="my-8" />
        <ul className="copy-body-sm text-muted-foreground list-disc space-y-2 pl-5">
          <li>
            Every interactive primitive on this page is reachable and operable by keyboard alone.
          </li>
          <li>Focus is always visible via the shared gold focus-visible ring, never suppressed.</li>
          <li>Accordion panels are inert while closed; Dialog uses native focus trapping.</li>
          <li>Tabs follow the WAI-ARIA roving-tabindex pattern with arrow-key navigation.</li>
          <li>All motion respects prefers-reduced-motion, including the dialog and backdrop.</li>
          <li>Color is never the only signal: status also carries a text label or icon.</li>
        </ul>
      </Section>
    </>
  );
}

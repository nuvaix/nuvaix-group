import Link from "next/link";
import { Section } from "./Section";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";

/** Pure presentational: no interactivity, so this stays a Server Component. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <Section tone="black" size="large" containerClassName="space-y-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" className="heading-h2 inline-block text-foreground">
              NUVAIX <span className="text-champagne-gold">GROUP</span>
            </Link>
            <p className="label-eyebrow text-muted-foreground mt-4">{company.brandLine}</p>
          </div>
          <p className="copy-body-sm text-subtle-foreground">
            {company.legalName}
            <br />
            RC {company.rcNumber}
          </p>
        </div>

        <Divider />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerNav.map((column) => (
            <div key={column.title}>
              <p className="label-eyebrow text-muted-foreground mb-5">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="copy-body-sm hover:text-champagne-gold text-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard)"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="heading-h4 max-w-xl">
            Partner with a diversified, technology-driven enterprise.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/partnerships" variant="outline">
              Partner With Us
            </Button>
            <Button href="/contact" variant="gold">
              Contact NUVAIX
            </Button>
          </div>
        </div>

        <Divider />

        <p className="copy-caption text-subtle-foreground">
          &copy; {year} {company.legalName}. All rights reserved.
        </p>
      </Section>
    </footer>
  );
}

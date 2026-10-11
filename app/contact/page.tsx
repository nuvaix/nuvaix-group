import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { isEnquiryType } from "@/data/contact";
import { company } from "@/data/company";

const description = "Reach NUVAIX GROUP across its enquiry areas.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description, type: "website" },
};

interface ContactPageProps {
  // Read server-side so the Enquiry Type field's prefill (e.g. a
  // "Discuss a Bulk Order" link using /contact?type=paint) is already
  // correct in the first render, no client fixup needed. Only ever
  // used to preselect a field value; never trusted for anything else.
  searchParams: Promise<{ type?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { type } = await searchParams;
  const defaultType = isEnquiryType(type) ? type : undefined;

  return (
    <>
      <PageHero eyebrow="Contact" title="Contact NUVAIX" description={description} />
      <ContactIntro />

      <Section tone="sapphire">
        <div className="mx-auto max-w-2xl">
          <EnquiryForm defaultType={defaultType} />
        </div>
      </Section>

      <Section tone="black">
        <div className="mx-auto max-w-2xl text-center">
          <p className="copy-caption text-subtle-foreground">NUVAIX GROUP</p>
          <p className="copy-body text-muted-foreground mt-2">
            {company.legalName}, RC {company.rcNumber}
          </p>
          {company.publicEmail ? (
            <p className="copy-body mt-4">
              <a
                href={`mailto:${company.publicEmail}`}
                className="text-champagne-gold hover:text-champagne-gold/80"
              >
                {company.publicEmail}
              </a>
            </p>
          ) : null}
          <div className="mt-6 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </Section>
    </>
  );
}

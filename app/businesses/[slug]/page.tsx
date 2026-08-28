import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businesses } from "@/data/businesses";
import { BusinessHero } from "@/components/businesses/BusinessHero";
import { BusinessOverview } from "@/components/businesses/BusinessOverview";
import { BusinessCapabilities } from "@/components/businesses/BusinessCapabilities";
import { RelatedBusinesses } from "@/components/businesses/RelatedBusinesses";
import { BusinessCTA } from "@/components/businesses/BusinessCTA";

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

// Only the 10 slugs above are valid: any other slug is a true 404, not a
// dynamically server-rendered page.
export const dynamicParams = false;

interface BusinessPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);

  if (!business) {
    return { title: "Business division" };
  }

  const description = `${business.name}: ${business.category}. Part of NUVAIX GROUP's diversified business ecosystem.`;

  return {
    title: business.name,
    description,
    alternates: { canonical: `/businesses/${business.slug}` },
    openGraph: {
      title: business.name,
      description,
      type: "website",
    },
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  return (
    <>
      <BusinessHero business={business} />
      <BusinessOverview business={business} />
      <BusinessCapabilities business={business} />
      <RelatedBusinesses business={business} />
      <BusinessCTA business={business} />
    </>
  );
}

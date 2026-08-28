import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businesses } from "@/data/businesses";
import { RoutePlaceholder } from "@/components/dev/RoutePlaceholder";

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

interface BusinessPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);
  return { title: business?.name ?? "Business division" };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = businesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  return (
    <RoutePlaceholder
      eyebrow={`Businesses / ${business.number}`}
      title={business.name}
      description={`${business.category}. The full division page is scheduled for a later implementation milestone.`}
    />
  );
}

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { InsightCard } from "./InsightCard";
import type { Article } from "@/data/insights";

export interface InsightGridProps {
  articles: Article[];
}

/**
 * Editorial composition for the /insights directory, echoing
 * ProjectGrid and PaintProductGrid's "one large featured item plus a
 * structured list" pattern (Milestone 11, section 9: avoid a generic
 * blog grid): the one article marked `featured` (data-driven, never
 * chosen by inventing editorial importance) shown large with real
 * imagery where available, the remaining articles as a compact list
 * with category metadata. Falls back to an even grid if no article is
 * marked featured. Renders nothing today (data/insights.ts is empty);
 * ready the moment verified articles exist.
 */
export function InsightGrid({ articles }: InsightGridProps) {
  const featured = articles.find((article) => article.featured);
  const rest = featured ? articles.filter((article) => article.slug !== featured.slug) : [];

  if (!featured) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <InsightCard key={article.slug} article={article} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <InsightCard article={featured} size="large" />
      <ul className="divide-border divide-y">
        {rest.map((article, index) => (
          <li key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="hover:bg-surface-hover -mx-2 flex items-center gap-4 rounded-md px-2 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg flex-1 font-medium">{article.title}</span>
              {article.category ? (
                <Badge variant="outline" className="shrink-0">
                  {article.category}
                </Badge>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The site's planned editorial category scope
 * (docs/03-page-specifications.md: "Corporate news, technology,
 * business, innovation, industry, projects, training, sustainability").
 * A structural/information-architecture list, not a claim that content
 * currently exists in each category.
 */
export const insightCategories: string[] = [
  "Corporate News",
  "Technology",
  "Business",
  "Innovation",
  "Industry",
  "Projects",
  "Training",
  "Sustainability",
];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  /** Only set once a real, named, verified author is confirmed for
   * public attribution. Never a placeholder name. */
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  content?: string;
  image?: string;
  /** Slugs of related articles. Only meaningful once 2+ real articles
   * exist; the detail template omits the related-articles section
   * below that (Milestone 11, Related Content). */
  relatedSlugs?: string[];
  /** Marks the article presented large in the editorial directory (see
   * components/insights/InsightGrid.tsx). A website storytelling
   * decision, not a claim of editorial importance invented on
   * NUVAIX's behalf (Milestone 11, Featured Content). */
  featured?: boolean;
}

/**
 * Empty until genuine, verified NUVAIX articles exist (Milestone 11,
 * Path B: no verified article content is currently available in
 * docs/11-content-source-of-truth.md or elsewhere). Do not add
 * fictional entries to populate the design. The /insights directory
 * (components/insights/InsightGrid.tsx) renders real entries
 * automatically once they exist here, and shows an intentional
 * editorial empty state while this stays empty. /insights/[slug] is
 * intentionally not implemented yet: Milestone 11 gates the dynamic
 * detail route on verified articles actually existing (Path A).
 */
export const articles: Article[] = [];

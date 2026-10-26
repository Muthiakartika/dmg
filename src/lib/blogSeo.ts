export interface BlogSeoOverride {
  title: string;
  /** Falls back to the post's excerpt when left out. */
  description?: string;
}

/**
 * Search-optimised title/description per blog slug.
 *
 * Blog posts live in the CMS, where the editorial title and excerpt are written
 * for readers on the page rather than for a search result. When a slug is listed
 * here these values are used for the page metadata instead; every other post
 * falls back to its CMS title and excerpt.
 */
export const blogSeoOverrides: Record<string, BlogSeoOverride> = {
  "building-a-brick-pizza-oven-materials-costs-what-makes-one-last": {
    title: "Building a Brick Pizza Oven in Calgary: Materials & Costs",
  },
  "natural-vs-manufactured-stone-veneer-what-s-the-difference-for-calgary-homes": {
    title: "Natural vs Manufactured Stone Veneer for Calgary Homes",
    description:
      "Natural or manufactured stone veneer? How they compare on cost, weight, looks and Calgary weather, and which suits your exterior or fireplace.",
  },
  "how-to-seal-a-masonry-patio-a-diy-guide": {
    title: "How to Properly Seal a Masonry Patio Before Winter",
    description:
      "This guide walks through the tools, timing and steps needed to protect a stone or brick patio from moisture, staining and long term winter freeze damage.",
  },
  "maintaining-a-100-year-old-chimney-in-calgary": {
    title: "Caring for a Century Old Chimney in Your Calgary Home",
    description:
      "Older chimneys face unique problems that newer builds do not. Here is what to expect during an inspection and how a full masonry restoration typically works.",
  },
  "signs-of-foundation-masonry-failure-causes-solutions": {
    title: "Signs Your Foundation Masonry Needs Help Right Away",
    description:
      "From hairline cracks to shifting walls, here are the early warning signs of foundation masonry failure and the common causes and issues behind each one.",
  },
};

export function getBlogSeoOverride(slug: string) {
  return blogSeoOverrides[slug];
}

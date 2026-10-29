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
    title: "Brick Pizza Oven in Calgary: Cost, Materials, Curing & vs Ooni | DMG",
    description:
      "What a brick pizza oven costs in Calgary, which materials survive freeze-thaw, the five-fire curing schedule, and how a built-in oven compares with an Ooni.",
  },
  "natural-vs-manufactured-stone-veneer-what-s-the-difference-for-calgary-homes": {
    title: "Natural vs Manufactured Stone Veneer for Calgary Homes | DMG Masonry",
    description:
      "Natural veneer is quarried stone sawn thin; manufactured veneer is cast concrete. How they compare on cost, weight, colour, salt and Calgary freeze-thaw.",
  },
  "how-to-seal-a-masonry-patio-a-diy-guide": {
    title: "How to Seal a Paver or Stone Patio in Calgary: DIY Guide | DMG",
    description:
      "How to seal a paver, brick or stone patio in Calgary: timing, which sealer survives freeze-thaw and salt, cure times, reseal intervals, and when to call a pro.",
  },
  "maintaining-a-100-year-old-chimney-in-calgary": {
    title: "Maintaining a 100-Year-Old Chimney in Calgary: Repairs & Costs | DMG",
    description:
      "How to maintain a 100-year-old brick chimney in Calgary: common problems, lime mortar repointing, inspections, repair vs rebuild, and typical costs.",
  },
  "signs-of-foundation-masonry-failure-causes-solutions": {
    title: "Foundation Cracks in Calgary: Normal or Serious? Signs & Repairs | DMG",
    description:
      "Are foundation cracks normal? How to read crack direction and width, what Calgary soil and freeze-thaw do, parging repair, and typical Calgary repair costs.",
  },
};

/**
 * Named author shown in the byline and in the BlogPosting schema. Leave null
 * until DMG confirms a real person and role; posts then credit the business.
 */
export const blogAuthor: { name: string; jobTitle: string } | null = null;

export function getBlogSeoOverride(slug: string) {
  return blogSeoOverrides[slug];
}

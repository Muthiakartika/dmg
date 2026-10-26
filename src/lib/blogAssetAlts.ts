// Alt text for the images inside blog posts and on the blog list, keyed by the
// asset id in /api/blog-assets/<id>. Post bodies live in the CMS, so the alt is
// applied when a post is rendered (see applyBlogAssetAlts below).
export const blogAssetAlts: Record<string, string> = {
  "e130e5c1-2672-4447-b09c-6d41c3d00bce": "Installer fitting stone veneer to a house gable from scaffolding",
  "666ddb5e-dd09-4cbb-be14-a57a47856bb8": "Wood fire burning inside a brick-arched outdoor pizza oven with a stone base",
  "babb4402-0cc3-4461-8461-1f5fefefacd3": "Natural stone patio with a curved stone bench in a garden",
  "06ec10a8-c9e3-4ed1-a67c-4f9f8bd40836": "Crumbling stone foundation walls exposed in an excavation",
  "11876fb7-c4f9-46fa-8bd8-57e2ea597461": "Worker on a ladder inspecting the brick chimney of an older brick house",
};

const ASSET_URL = /\/api\/blog-assets\/([0-9a-f-]{36})/;

/** Alt text for a blog image URL; `fallback` when the asset has none listed. */
export function blogImageAlt(src: string, fallback: string): string {
  const id = src.match(ASSET_URL)?.[1];
  return (id && blogAssetAlts[id]) || fallback;
}

/** Sets the listed alt text on the known images inside a post body. */
export function applyBlogAssetAlts(html: string): string {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = tag.match(/\bsrc="([^"]*)"/)?.[1];
    const alt = src ? blogImageAlt(src, "") : "";
    if (!alt) return tag;
    return tag.replace(/\salt="[^"]*"/, "").replace(/<img\b/, `<img alt="${alt}"`);
  });
}

import fs from "node:fs";
import path from "node:path";

import { sanitizeContentHtml, type CmsBlog } from "./cmsBlogs";

/**
 * Development-only preview of revised post bodies. When `.blog-drafts/<slug>.html`
 * exists, the post renders that HTML instead of the database copy, so edits can
 * be reviewed on localhost without touching the live database. Any [[placeholder]]
 * is highlighted. Never active in a production build.
 */
export function withDraftPreview(post: CmsBlog): CmsBlog {
  if (process.env.NODE_ENV === "production") return post;

  const file = path.join(process.cwd(), ".blog-drafts", `${post.slug}.html`);
  if (!fs.existsSync(file)) return post;

  const html = sanitizeContentHtml(fs.readFileSync(file, "utf8")).replace(
    /\[\[[^\]]*\]\]/g,
    (token) => `<mark style="background:#ffe14d;color:#000;padding:0 3px">${token}</mark>`,
  );

  return { ...post, contentHtml: html };
}

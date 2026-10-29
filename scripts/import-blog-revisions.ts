/**
 * Converts the revised blog drafts (Markdown, one file per post) to CMS HTML and
 * optionally writes them to the `blogs` table.
 *
 *   npx tsx scripts/import-blog-revisions.ts <drafts-dir> <out-dir>            dry run
 *   npx tsx scripts/import-blog-revisions.ts <drafts-dir> <out-dir> --apply    write to the database
 *
 * A draft that still contains a [[placeholder]] is never written: fill it in
 * first. The Markdown file's title, front matter, author box and schema block
 * are not part of the article body and are dropped.
 */
import fs from "node:fs";
import path from "node:path";

import { loadEnvConfig } from "@next/env";

const PLACEHOLDER = /\[\[[^\]]*\]\]/g;

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(text: string) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function tableCells(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let paragraph: string[] = [];
  let index = 0;

  const flush = () => {
    if (paragraph.length) html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      flush();
      index += 1;
    } else if (/^#{2,3}\s/.test(trimmed)) {
      flush();
      const level = trimmed.startsWith("###") ? 3 : 2;
      html.push(`<h${level}>${inline(trimmed.replace(/^#+\s*/, ""))}</h${level}>`);
      index += 1;
    } else if (/^[-*]\s/.test(trimmed)) {
      flush();
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s/.test(lines[index].trim())) {
        items.push(`<li>${inline(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
    } else if (/^\d+\.\s/.test(trimmed)) {
      flush();
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(`<li>${inline(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
    } else if (trimmed.startsWith("|")) {
      flush();
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const cells = tableCells(lines[index]);
        if (!cells.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(cells);
        index += 1;
      }
      const [head, ...body] = rows;
      const th = head.map((cell) => `<th>${inline(cell)}</th>`).join("");
      const trs = body
        .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`)
        .join("");
      html.push(`<table><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table>`);
    } else {
      paragraph.push(trimmed);
      index += 1;
    }
  }

  flush();
  return html.join("");
}

/** Article body of a draft: no front matter, h1, author box, schema or comments. */
export function draftBody(markdown: string) {
  const withoutFrontMatter = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
  const withoutComments = withoutFrontMatter.replace(/<!--[\s\S]*?-->/g, "");
  const withoutTitle = withoutComments.replace(/^\s*#\s.*\r?\n/, "");
  const authorBox = withoutTitle.search(/\r?\n---\r?\n+\*\*About the author\.\*\*/);
  return (authorBox === -1 ? withoutTitle : withoutTitle.slice(0, authorBox)).trim();
}

/** Optional clauses that hold a placeholder: cut out, leaving the sentence whole. */
const CLAUSE_CUTS: [string, string][] = [
  [" These are DMG Masonry's typical Calgary ranges for [[2026]], before GST:", ""],
  [" DMG Masonry's custom brick ovens start at [[$X]] before GST.", ""],
  [", including in [[Mission, Sunnyside and Bridgeland]]", ""],
  ["[[, including Rundle stone, if true]]", ""],
  [" from [[brands or suppliers you use]]", ""],
  [
    "refractory mortar, insulate the dome, and [[confirm: e.g. give you the curing schedule at handover]].",
    "refractory mortar, and insulate the dome.",
  ],
];

/** FAQ entries whose whole answer is a DMG price. */
const FAQ_PRICE_QUESTIONS = new Set([
  "How much does chimney repair cost in Calgary?",
  "How much does foundation crack repair cost?",
  "How much does a brick pizza oven cost?",
]);

/** Left without its price table, this line no longer makes sense. */
const ORPHANED = ["These are ranges, not quotes."];

/**
 * Removes everything that still needs DMG's input: placeholder sections, table
 * rows, paragraphs and price FAQs. Links whose URL is a placeholder keep their text.
 */
export function dropPlaceholders(body: string) {
  let text = body;
  for (const [find, replace] of CLAUSE_CUTS) text = text.split(find).join(replace);
  text = text.replace(/\[([^\]]+)\]\(\[\[[^\]]*\]\]\)/g, "$1");

  const kept: string[] = [];
  let skipping: "section" | "faq" | null = null;

  for (const chunk of text.split(/\r?\n\s*\r?\n/)) {
    const heading = /^(#{2,3})\s+(.*)$/.exec(chunk.trim());

    if (heading) {
      const level = heading[1].length;
      const title = heading[2].trim();
      const drops = new RegExp(PLACEHOLDER.source).test(title);
      const dropsFaq = level === 3 && FAQ_PRICE_QUESTIONS.has(title);

      if (drops && level === 2) skipping = "section";
      else if (dropsFaq) skipping = "faq";
      else if (skipping === "faq" || (skipping === "section" && level === 2)) skipping = null;
      if (!skipping && !drops) kept.push(chunk);
      continue;
    }

    if (skipping) continue;

    if (chunk.trim().startsWith("|")) {
      const rows = chunk.split(/\r?\n/).filter((row) => !new RegExp(PLACEHOLDER.source).test(row));
      const dataRows = rows.filter((row) => !/^\|?\s*:?-{3,}/.test(row.trim()));
      if (dataRows.length > 1) kept.push(rows.join("\n"));
    } else if (
      !new RegExp(PLACEHOLDER.source).test(chunk) &&
      !ORPHANED.some((line) => chunk.trim().startsWith(line))
    ) {
      kept.push(chunk);
    }
  }

  const result = kept.join("\n\n");
  const left = result.match(PLACEHOLDER);
  if (left) throw new Error(`Placeholders left after stripping: ${left.join(", ")}`);
  return result;
}

function slugOf(markdown: string) {
  const url = /^url:\s*(\S+)/m.exec(markdown)?.[1] ?? "";
  return url.replace(/\/+$/, "").split("/").pop() ?? "";
}

async function main() {
  const [draftsDir, outDir] = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
  const apply = process.argv.includes("--apply");

  if (!draftsDir || !outDir) {
    throw new Error("Usage: import-blog-revisions.ts <drafts-dir> <out-dir> [--apply]");
  }

  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(draftsDir).filter((file) => /^\d.*\.md$/.test(file)).sort();
  const drafts = files
    .map((file) => ({ file, markdown: fs.readFileSync(path.join(draftsDir, file), "utf8") }))
    .filter(({ markdown }) => /^url:\s*\S*\/blogs\//m.test(markdown))
    .map(({ file, markdown }) => {
    const body = dropPlaceholders(draftBody(markdown));
    return {
      file,
      slug: slugOf(markdown),
      body,
      html: markdownToHtml(body),
      placeholders: body.split(/\r?\n/).flatMap((line, i) =>
        (line.match(PLACEHOLDER) ?? []).map((token) => `${token} (line ${i + 1})`),
      ),
    };
  });

  let blocked = 0;
  for (const draft of drafts) {
    fs.writeFileSync(path.join(outDir, `${draft.slug}.html`), draft.html);
    console.log(`${draft.file}: ${draft.html.length} chars, ${draft.placeholders.length} placeholders`);
    if (draft.placeholders.length) blocked += 1;
  }

  if (!apply) return;
  if (blocked) {
    throw new Error(`${blocked} draft(s) still contain [[placeholders]]; nothing was written.`);
  }

  loadEnvConfig(process.cwd());
  const { getAllBlogs, updateBlog } = await import("../src/lib/cmsBlogs");
  const blogs = await getAllBlogs();

  for (const draft of drafts) {
    const blog = blogs.find((item) => item.slug === draft.slug);
    if (!blog) throw new Error(`No blog with slug ${draft.slug}`);
    await updateBlog(blog.id, {
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      coverImage: blog.coverImage,
      contentHtml: draft.html,
      status: blog.status,
    });
    console.log(`updated ${draft.slug}`);
  }
}

if (process.argv[1]?.endsWith("import-blog-revisions.ts")) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}

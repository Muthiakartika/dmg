import type { CmsBlog } from "./cmsBlogs";
import { getBlogDisplayDate } from "./blogDate";
import { siteConfig } from "./site";

const organizationId = `${siteConfig.url}/#organization`;

const FAQ_HEADING = /^frequently asked questions$/i;

function htmlToText(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Reads the question/answer pairs from the post's own "Frequently Asked
 * Questions" section (h3 = question, following paragraphs = answer), so the
 * FAQPage markup always matches the visible text word for word.
 */
export function extractBlogFaqs(contentHtml: string) {
  const sections = contentHtml.split(/(?=<h2[\s>])/i);
  const faqSection = sections.find((section) => {
    const heading = /^<h2[^>]*>([\s\S]*?)<\/h2>/i.exec(section);
    return heading ? FAQ_HEADING.test(htmlToText(heading[1])) : false;
  });

  if (!faqSection) return [];

  return faqSection
    .split(/(?=<h3[\s>])/i)
    .slice(1)
    .map((block) => {
      const question = /^<h3[^>]*>([\s\S]*?)<\/h3>/i.exec(block);
      const answers = Array.from(block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).map((match) =>
        htmlToText(match[1]),
      );
      return {
        question: question ? htmlToText(question[1]) : "",
        answer: answers.filter(Boolean).join(" "),
      };
    })
    .filter((faq) => faq.question && faq.answer);
}

export interface BlogAuthor {
  name: string;
  jobTitle: string;
}

/** True when the post was edited meaningfully after it went live. */
export function getBlogUpdatedDate(post: Pick<CmsBlog, "publishedAt" | "createdAt" | "updatedAt">) {
  const published = new Date(getBlogDisplayDate(post)).getTime();
  const updated = new Date(post.updatedAt).getTime();
  return updated - published > 24 * 60 * 60 * 1000 ? post.updatedAt : null;
}

export function blogPostingSchema(post: CmsBlog, description: string, author: BlogAuthor | null) {
  const url = `${siteConfig.url}/blogs/${post.slug}/`;
  const faqs = extractBlogFaqs(post.contentHtml);
  const image = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage}`;

  const article = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description,
    image,
    datePublished: getBlogDisplayDate(post),
    dateModified: post.updatedAt,
    articleSection: post.category,
    inLanguage: "en-CA",
    mainEntityOfPage: url,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.jobTitle,
          url: `${siteConfig.url}/about-us/`,
          worksFor: { "@id": organizationId },
        }
      : { "@id": organizationId },
    publisher: { "@id": organizationId },
  };

  const graph: object[] = [article];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

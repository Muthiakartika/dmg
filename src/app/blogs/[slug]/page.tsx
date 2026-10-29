import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import PageTitle from "@/components/Sections/PageTitle";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/lib/cmsBlogs";
import { withDraftPreview } from "@/lib/blogDraftPreview";
import { blogPostingSchema } from "@/lib/blogSchema";
import { blogAuthor, getBlogSeoOverride } from "@/lib/blogSeo";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface BlogDetailsPageProps {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const post = await getPublishedBlogBySlug(params.slug);

  if (!post) {
    return {};
  }

  const seo = getBlogSeoOverride(post.slug);

  return buildMetadata({
    title: seo?.title ?? `${post.title} | DMG Masonry`,
    description: seo?.description ?? post.excerpt,
    path: `/blogs/${post.slug}/`,
    image: post.coverImage || undefined,
  });
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const [publishedPost, posts] = await Promise.all([
    getPublishedBlogBySlug(params.slug),
    getPublishedBlogs(),
  ]);

  if (!publishedPost) {
    notFound();
  }

  const post = withDraftPreview(publishedPost);

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <>
      <JsonLd
        data={blogPostingSchema(
          post,
          getBlogSeoOverride(post.slug)?.description ?? post.excerpt,
          blogAuthor,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs/" },
          { name: post.title, path: `/blogs/${post.slug}/` },
        ])}
      />

      <Navbar />

      <PageTitle title="Blog Details" homeText="Blogs" homeUrl="/blogs/" />

      <BlogDetailsContent
        post={post}
        previousPost={previousPost}
        nextPost={nextPost}
      />

      <Footer />
    </>
  );
}

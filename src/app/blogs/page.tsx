import BlogsCollection from "@/components/Blog/BlogsCollection";
import PageTitle from "@/components/Sections/PageTitle";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { getPublishedBlogsPage } from "@/lib/cmsBlogs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Masonry Know How From Our Professional Calgary Masons",
  description:
    "Browse our collection of masonry tips covering chimney care, patio sealing, foundation issues and more, written for Calgary homeowners like you and your family.",
  path: "/blogs/",
});

export const dynamic = "force-dynamic";

interface BlogsPageProps {
  searchParams: { page?: string | string[] };
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const pageParam = Array.isArray(searchParams.page)
    ? searchParams.page[0]
    : searchParams.page;
  const requestedPage = Number.parseInt(pageParam ?? "1", 10);
  const result = await getPublishedBlogsPage(requestedPage, 6);

  return (
    <>
      <Navbar />

      <PageTitle
        title="Blogs"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <BlogsCollection
        posts={result.posts}
        page={result.page}
        totalPages={result.totalPages}
      />

      <Footer />
    </>
  );
}

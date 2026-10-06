import QuoteSection from "@/components/Contact/QuoteSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Masonry Estimate From Our Calgary Team Now",
  description:
    "Tell us about your project and we will provide clear, upfront pricing for repairs, patios, fireplaces or any other masonry work across the Calgary area.",
  path: "/request-quote/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="Request a Quote" homeText="Home" homeUrl="/" titleAsHeading />
      <QuoteSection />
      <Footer />
    </>
  );
}

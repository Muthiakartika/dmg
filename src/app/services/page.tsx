import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import ServicesGrid from "@/components/Services/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Masonry Services Calgary – Repair, Chimney & Outdoor – DMG",
  description:
    "All DMG Masonry services in Calgary: masonry and chimney repair, stone veneer, patios, fireplaces, fire pits and outdoor kitchens. Request a quote.",
  path: "/services/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="Masonry Services in Calgary" homeText="Home" homeUrl="/" titleAsHeading />
      <ServicesGrid />

      {/* The partner logo strip is left out until there are real partners to show:
          the template's placeholder brands would otherwise be indexed as our own.
          Component kept at src/components/Sections/Partners.tsx. */}

      <div className="pb-100">
        <ContactSection title="Request a Quote for Your Masonry Project in Calgary" />
      </div>

      <Footer />
    </>
  );
}

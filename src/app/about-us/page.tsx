import AboutContent from "@/components/About/AboutContent";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About DMG Masonry – Calgary Masonry Contractors",
  description:
    "Learn about our company, a Calgary based team specializing in brick and stone craftsmanship, historic restorations and custom outdoor living builds for homes.",
  path: "/about-us/",
  // The page's own banner (a mason laying brick), rather than the homepage
  // house photo every page without a banner shares.
  image: "/images/about/new/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="About DMG Masonry: Calgary Masonry Contractors" homeText="Home" homeUrl="/" titleAsHeading />
      <AboutContent />

      {/* The statement band ("We Help Every Client Create Functional and
          Long-Lasting Masonry Spaces...") is left out: it repeated the section
          above (Oct 2026 copy rewrite). Component kept at
          src/components/About/QuoteText.tsx. */}

      {/* The team section is left out until there are real staff photos and names:
          the template's invented people would otherwise be indexed as our team.
          Component kept at src/components/About/TeamSection.tsx. */}

      <div className="pb-100 pt-100">
        <ContactSection
          image="/images/about/new/3.webp"
          description="Tell us what you need and we'll get back to you. Call 1-403-619-8727 or send a message."
        />
      </div>

      <Footer />
    </>
  );
}

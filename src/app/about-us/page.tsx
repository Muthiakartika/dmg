import AboutContent from "@/components/About/AboutContent";
import QuoteText from "@/components/About/QuoteText";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import TestimonialCarousel from "@/components/Sections/TestimonialCarousel";
import type { Testimonial } from "@/components/Sections/TestimonialSlider";
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

const feedbacks: Testimonial[] = [
  {
    feedbackText:
      "I reached out to a few contractors before deciding, and I'm glad I chose DMG Masonry. They were easy to deal with, explained everything clearly, and the work turned out just the way we wanted.",
    name: "Mark H.",
  },
  {
    feedbackText:
      "You can tell they care about doing things properly. We're really happy with how everything came together.",
    name: "Laura P.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="About DMG Masonry: Calgary Masonry Contractors" homeText="Home" homeUrl="/" titleAsHeading />
      <AboutContent />
      <QuoteText />

      <div className="ptb-100">
        <TestimonialCarousel feedbacks={feedbacks} />
      </div>

      {/* The team section is left out until there are real staff photos and names:
          the template's invented people would otherwise be indexed as our team.
          Component kept at src/components/About/TeamSection.tsx. */}

      <div className="pb-100 pt-100">
        <ContactSection image="/images/about/new/3.webp" />
      </div>

      <Footer />
    </>
  );
}

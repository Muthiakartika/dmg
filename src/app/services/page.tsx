import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import Partners from "@/components/Sections/Partners";
import ServicesGrid from "@/components/Services/ServicesGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Explore Our Full Range of Special Masonry Services",
  description:
    "From repairs to custom outdoor builds, our masonry contractor team handles every project across Calgary with skilled, reliable craftsmanship every time.",
  path: "/services/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="Services" homeText="Home" homeUrl="/" titleAsHeading />
      <ServicesGrid />
      <Partners />

      <div className="pb-100">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}

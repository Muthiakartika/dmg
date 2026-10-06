import ContactSection from "@/components/Contact/ContactSection";
import GoogleMap from "@/components/Contact/GoogleMap";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get in Touch With Our Friendly Calgary Masonry Team",
  description:
    "Reach out to discuss your next project. Our team is ready to answer questions, offer guidance and schedule an onsite consultation at a time that suits you.",
  path: "/contact-us/",
});

export default function Page() {
  return (
    <>
      <Navbar />
      <PageTitle title="Contact Us" homeText="Home" homeUrl="/" titleAsHeading />

      <div className="ptb-100">
        <ContactSection priorityImage />
      </div>

      <div className="pb-100">
        <GoogleMap />
      </div>

      <Footer />
    </>
  );
}

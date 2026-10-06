import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import TermsConditionsContent from "@/components/Legal/TermsConditionsContent";
import Footer from "@/components/Layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Please Review Our Terms and Conditions Before You Begin",
  description:
    "Review the rules that apply when you use our website, request a quote or hire our team for masonry work anywhere in the greater Calgary region.",
  path: "/terms-conditions/",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle 
        title="Terms & Conditions"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <TermsConditionsContent />
 
      <Footer />
    </>
  )
}

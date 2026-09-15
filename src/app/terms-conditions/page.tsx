import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
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
      <NavbarStyleTwo />

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

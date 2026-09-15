import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "@/components/Layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Read Our Full Privacy Policy for Every Website Visitor",
  description:
    "Read how we collect, use, and protect your personal information when you visit our website, call our team, or request a quote for any service.",
  path: "/privacy-policy/",
});

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Privacy Policy"
        homeText="Home"
        homeUrl="/"
        titleAsHeading
      />

      <PrivacyPolicyContent />
 
      <Footer />
    </>
  )
}

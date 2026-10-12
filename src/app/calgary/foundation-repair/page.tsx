import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceGallery from "@/components/Services/ServiceGallery";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import FaqSection from "@/components/Sections/FaqSection";
import TestimonialSlider from "@/components/Sections/TestimonialSlider";
import MaterialsSection from "@/components/Services/MaterialsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Foundation Repair Calgary – Cracks & Waterproofing – DMG",
  description:
    "Foundation repair in Calgary: crack injection, waterproofing and parging. Request an assessment or call 1-403-619-8727.",
  path: "/calgary/foundation-repair/",
  image: "/images/services/service/foundation_repair/1.webp",
});

// Data FAQ khusus untuk halaman Foundation Repair
const foundationFaqs = [
  {
    uuid: "faq-foundation-1",
    question: "What are the common signs of foundation damage?",
    answers: [
      "Cracks in walls or floors, uneven surfaces, sticking doors or windows, and damp near the building. Catching them early helps prevent bigger problems.",
    ],
  },
  {
    uuid: "faq-foundation-2",
    question:
      "Do you provide foundation repair for both residential and commercial properties?",
    answers: [
      "Yes. We repair foundations on homes and commercial buildings, and plan the work around the condition and size of the structure.",
    ],
  },
  {
    uuid: "faq-foundation-3",
    question:
      "Can foundation problems become worse if repairs are delayed?",
    answers: [
      "Yes. Damage can spread: larger cracks, more movement and more water getting in. Alberta's freeze-thaw cycles can speed that up.",
    ],
  },
  {
    uuid: "faq-foundation-4",
    question:
      "How do you determine the appropriate foundation repair solution?",
    answers: [
      "We assess the foundation first: the type, location and severity of the damage. Then we recommend the repair that fits the cause.",
    ],
  },
  {
    uuid: "faq-foundation-5",
    question:
      "Will foundation repair affect daily activities on the property?",
    answers: [
      "It depends on the size and location of the work. We plan jobs to keep disruption to a minimum.",
    ],
  },
];

// Metode perbaikan foundation - section tanya-jawab baru (AEO)
const foundationRepairMethods = [
  {
    title: "Crack injection",
    text: "Non-structural cracks are commonly sealed by injecting epoxy or polyurethane into the full depth of the crack from the inside. It seals the water path and can be done without excavation.",
  },
  {
    title: "Exterior excavation and waterproofing",
    text: "Where water is getting in over a larger area, the affected section is excavated to the footing, the wall cleaned and repaired, and a waterproof membrane and drainage applied before backfilling. It is the more involved option and the more durable one where water is the problem.",
  },
  {
    title: "Parging and surface repair",
    text: "Deteriorated exterior surfaces on the exposed part of a foundation are cleaned back and re-parged. This is cosmetic and protective rather than structural, but it stops further surface loss.",
  },
  {
    title: "Structural reinforcement",
    text: "Where a wall has moved, reinforcement addresses the movement itself rather than the crack. The right method depends on the wall type, the direction of movement and how far it has gone, which is why it follows an assessment rather than preceding it.",
  },
  {
    title: "How do you decide which method to use?",
    text: "By what is causing it. A crack from curing shrinkage, a crack from settlement and a wall bowing under soil pressure look similar from the inside and need entirely different work. The assessment is what determines the repair.",
  },
];

// Tahapan proses spesifik untuk Foundation Repair
const foundationProcessSteps = [
  {
    image: "/images/services/service/foundation_repair/2.webp",
    title: "Inspect the Foundation",
    text: "We check for movement, cracks and the overall condition.",
  },
  {
    image: "/images/services/service/foundation_repair/3.webp",
    title: "Plan the Repair",
    text: "We decide on the right repair for the structure and how serious the damage is.",
  },
  {
    image: "/images/services/service/foundation_repair/4.webp",
    title: "Complete the Repairs",
    text: "We reinforce and repair the affected areas.",
  },
  {
    image: "/images/services/service/foundation_repair/5.webp",
    title: "Ensure Long-Term Stability",
    text: "We check the finished repair for strength and performance.",
  },
];

// Overview spesifik untuk Foundation Repair
const foundationOverviewItems = [
  {
    image: "/images/services/service/foundation_repair/6.webp",
    titleNormal: "Basement Crack",
    titleHighlight: "Injection",
  },
  {
    image: "/images/services/service/foundation_repair/7.webp",
    titleNormal: "Exterior Concrete",
    titleHighlight: "Waterproofing",
  },
];

// Testimonial klien spesifik untuk Foundation Repair
const foundationFeedbacks = [
  {
    feedbackText:
      "I appreciated that they answered all of our questions before starting the work. It made us feel a lot more comfortable moving forward with the repairs.",
    name: "Karen L.",
  },
  {
    feedbackText:
      "The whole process was well organized from the inspection through the repairs. Once everything was finished, the work area was left clean and the repairs blended in nicely.",
    name: "Jennifer W.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Foundation Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/foundation_repair/1.webp"
        title="Foundation Repair Calgary: Structural & Masonry Foundation Repairs"
        description="DMG Masonry repairs foundations in Calgary. A foundation problem affects the safety and condition of the whole building, so it's worth dealing with early. We repair cracks, reinforce weak areas and fix the cause."
        paragraphsHeading="Signs of Foundation Damage in Calgary Homes"
        paragraphs={[
          "Cracked foundation walls, uneven floors, sticking doors and visible movement can all point to a foundation problem. They can come from soil settling, moisture or shifting loads over time. We inspect the foundation to find the cause, then recommend a repair that fits.",
          "Fixing foundation damage early helps limit further damage. It also keeps water out and stops ongoing movement from affecting the rest of the property.",
        ]}
        benefits={[
          "Foundation reinforcement",
          "Homes and commercial buildings",
          "Foundation crack repairs",
          "Structural stability",
        ]}
        extraParagraphsHeading="What does foundation repair involve?"
        extraParagraphs={[
          "Before we repair anything, we work out how the structure has been affected and why. We look at settlement patterns, moisture and how the building is behaving, then choose the repair.",
          "A repair should fix the cause, not just cover up the damage. That can mean sealing a crack, reinforcing weak brick or block, or waterproofing the outside of the wall.",
          "We do foundation repair across Calgary and Alberta, for homes and commercial buildings.",
        ]}
      />

      <ProcessSteps
        title="How Does Our Foundation Repair Process Work?"
        steps={foundationProcessSteps}
      />

      <ServiceGallery items={foundationOverviewItems} />

      <MaterialsSection
        subtitle="REPAIR METHODS"
        title="Foundation Crack Repair Methods: Injection, Waterproofing & Parging"
        items={foundationRepairMethods}
      />

      <TestimonialSlider
        titleNormal="Calgary Foundation"
        titleHighlight="Repair Reviews"
        feedbacks={foundationFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/foundation_repair/8.webp"
        title="Why Choose DMG Masonry For Foundation Repair In Calgary?"
        description="A damaged foundation can affect a building's safety if it isn't repaired properly. We repair foundations in Calgary and look at the cause first, so the repair does its job."
        listItems={[
          "Foundation assessment",
          "Repairs based on the condition of the foundation",
          "Durable structural support",
          "Homes and commercial buildings",
          "Calgary and surrounding Alberta communities",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={foundationFaqs}
        title="Foundation Repair Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/foundation_repair/9.webp"
          title="Request a Foundation Repair Assessment in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us what you've noticed and we'll arrange an assessment. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

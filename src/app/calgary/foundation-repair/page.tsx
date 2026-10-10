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
      "Foundation issues can appear in several ways, including wall or floor cracks, uneven surfaces, sticking doors or windows, and signs of moisture near the structure. Identifying these issues early can help prevent more extensive structural problems over time.",
    ],
  },
  {
    uuid: "faq-foundation-2",
    question:
      "Do you provide foundation repair for both residential and commercial properties?",
    answers: [
      "Yes. We handle foundation repair projects in Calgary for both residential and commercial structures, with repair approaches planned according to the condition, size, and structural requirements of each property.",
    ],
  },
  {
    uuid: "faq-foundation-3",
    question:
      "Can foundation problems become worse if repairs are delayed?",
    answers: [
      "Yes. Foundation damage can gradually progress over time, leading to larger cracks, structural movement, moisture intrusion, and increased repair complexity if left unaddressed. Alberta's freeze-thaw cycles can accelerate that process.",
    ],
  },
  {
    uuid: "faq-foundation-4",
    question:
      "How do you determine the appropriate foundation repair solution?",
    answers: [
      "Our process begins with a detailed assessment of the foundation condition, including the type, location, and severity of the damage. Based on our findings, we recommend repair methods that best support long-term structural stability and performance.",
    ],
  },
  {
    uuid: "faq-foundation-5",
    question:
      "Will foundation repair affect daily activities on the property?",
    answers: [
      "The level of disruption depends on the scope and location of the repair work. Our team plans projects carefully to maintain safe and efficient workflows while helping minimize interruptions throughout the repair process.",
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
    text: "We assess structural movement, cracks, and foundation conditions.",
  },
  {
    image: "/images/services/service/foundation_repair/3.webp",
    title: "Plan the Repair",
    text: "We determine the right foundation repair solution for the structure and damage level.",
  },
  {
    image: "/images/services/service/foundation_repair/4.webp",
    title: "Complete the Repairs",
    text: "Foundation areas are reinforced using reliable repair methods and materials.",
  },
  {
    image: "/images/services/service/foundation_repair/5.webp",
    title: "Ensure Long-Term Stability",
    text: "Final work is completed with focus on strength, durability, and performance.",
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
        description="DMG Masonry is a masonry and foundation repair contractor in Calgary, Alberta. Foundation problems can affect the safety and condition of a property if left unresolved. We provide foundation repair services to correct structural issues and reinforce weakened areas."
        paragraphsHeading="Signs of Foundation Damage in Calgary Homes"
        paragraphs={[
          "Cracked foundation walls, uneven floors, sticking doors, and visible structural movement are often signs of underlying foundation issues. These problems can result from soil settlement, moisture exposure, or shifting structural loads over time. Our team carefully inspects the condition of the foundation to determine the cause and recommend repairs suited to the structure's specific needs.",
          "Repairing foundation damage early can help limit further deterioration and reduce the risk of additional structural complications. Proper repair work also helps improve the overall reliability of the building while protecting against moisture intrusion and ongoing movement that may impact surrounding areas of the property.",
        ]}
        benefits={[
          "Foundation Reinforcement",
          "Residential & Commercial Work",
          "Foundation Crack Repairs",
          "Structural Stability",
        ]}
        extraParagraphsHeading="What does foundation repair involve?"
        extraParagraphs={[
          "Before beginning any foundation repair work, our team takes time to understand how the structure has been affected and what factors may be contributing to the issue. Settlement patterns, moisture exposure, and overall structural behavior are carefully reviewed to determine the most appropriate repair approach for the property.",
          "Foundation repairs should do more than temporarily cover visible damage. Our goal is to correct underlying structural concerns while improving the overall stability of the building. From repairing foundation cracks to reinforcing weakened brick and block sections, every solution is carried out with long-term durability and dependable performance in mind.",
          "A properly repaired foundation plays an important role in protecting the condition and value of a property over time. With experienced workmanship and careful construction practices, DMG Masonry delivers foundation repair across Calgary and Alberta designed to help structures remain secure, stable, and structurally reliable for years ahead.",
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
        description="Foundation damage can affect the safety and performance of a building if not repaired properly. As masonry contractors in Calgary, we provide foundation repair services focused on structural stability."
        listItems={[
          "Foundation Issue Assessment",
          "Condition-Based Repairs",
          "Durable Structural Support",
          "Residential & Commercial Solutions",
          "Serving Calgary and surrounding Alberta communities",
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
        />
      </div>

      <Footer />
    </>
  );
}

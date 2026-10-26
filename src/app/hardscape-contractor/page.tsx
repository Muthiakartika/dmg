import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
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
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Hardscape Contractor
const hardscapeFaqs = [
  {
    uuid: "faq-hardscape-1",
    question: "What hardscape services do you provide?",
    answers: [
      "Patios, walkways, retaining walls, driveways, outdoor kitchens and other outdoor stone features. We also repair and upgrade existing hardscape.",
    ],
  },
  {
    uuid: "faq-hardscape-2",
    question: "What's the difference between hardscaping and landscaping?",
    answers: [
      "Hardscaping is the built part of an outdoor space: patios, walkways, retaining walls, steps and stone features. Landscaping usually means the planted part: lawn, beds, trees and shrubs. Most yards need both; we build the hardscape, so the planting has a solid, well-drained structure around it.",
    ],
  },
  {
    uuid: "faq-hardscape-3",
    question: "What materials are used for hardscape construction?",
    answers: [
      "Natural stone, stone veneer, concrete pavers and other masonry products. We choose based on performance, appearance and how well they handle Calgary's climate.",
    ],
  },
  {
    uuid: "faq-hardscape-4",
    question: "Do you repair existing hardscape structures?",
    answers: [
      "Yes. We look at existing patios, pathways and retaining walls, find the problem and recommend a repair or upgrade. That can include small brick or stone patch repairs.",
    ],
  },
  {
    uuid: "faq-hardscape-5",
    question: "How long does a hardscape project usually take?",
    answers: [
      "It depends on size, how complex the design is and the site conditions. We give you a clear schedule from the start so you know what to expect.",
    ],
  },
  {
    uuid: "faq-hardscape-6",
    question: "Do you build outdoor kitchens or BBQ areas as part of your hardscape services?",
    answers: [
      "Yes. We can design an outdoor kitchen or BBQ area alongside your patio and seating, so it all works as one outdoor space.",
    ],
  },
  {
    uuid: "faq-hardscape-7",
    question: "Can you help seal or maintain an existing patio?",
    answers: [
      "Yes. We can look at an existing patio and recommend the right sealing, repair or maintenance to protect it from Calgary's freeze-thaw winters.",
    ],
  },
  {
    uuid: "faq-hardscape-8",
    question: "How long does it take to build a retaining wall in Calgary?",
    answers: [
      "Most retaining walls in Calgary take one to a few weeks, depending on length, height and site conditions. We'll give you a more specific estimate once we've seen your property. See our [retaining wall construction](/calgary/retaining-wall-construction/) page for more.",
    ],
  },
];

// Material hardscape - section tanya-jawab baru (AEO)
const hardscapeMaterials = [
  {
    title: "Concrete pavers",
    text: "Interlocking pavers are the most common hardscape surface in Calgary. They flex slightly with ground movement instead of cracking, and individual units can be lifted and reset if a section settles.",
  },
  {
    title: "Natural stone",
    text: "Flagstone and quarried stone give a less uniform, more organic surface. Every piece is different, so it takes longer to lay, but the result does not repeat the way a manufactured pattern does.",
  },
  {
    title: "Segmental retaining wall block",
    text: "Engineered block systems are used for most retaining walls. They lock together, allow drainage through the wall, and can be stepped or curved to follow a slope.",
  },
  {
    title: "Stone veneer over block",
    text: "Where a wall or outdoor kitchen base needs to match the house, we build in block and clad the face in stone veneer. It is the usual way to get a natural stone appearance on a structural element.",
  },
  {
    title: "How do you choose between them?",
    text: "Material choice comes down to how the space is used, how much ground movement the site has, what the house is finished in, and budget. We walk through options against your actual property rather than recommending one material for every job.",
  },
];

const hardscapeFeatures = [
  {
    icon: "flaticon-houses",
    title: "Patios",
    text: "[A well-built patio](/patio-stone-installation/) is a durable, low-maintenance place to spend time outside, finished in materials chosen for Calgary's climate.",
  },
  {
    icon: "flaticon-facade",
    title: "Retaining Walls",
    text: "[Retaining walls](/calgary/retaining-wall-construction/) manage changes in ground level and support sloped areas, and they can look natural as well as hold the soil. We also build walkways, driveways and other stone features as part of a complete plan for your property.",
  },
];

// Tahapan proses spesifik untuk Hardscape Contractor
const hardscapeProcessSteps = [
  {
    image: "/images/services/service/hardscape_constructor/2.webp",
    title: "Evaluate The Project Area",
    text: "We look at the site conditions and the layout.",
  },
  {
    image: "/images/services/service/hardscape_constructor/3.webp",
    title: "Prepare The Base",
    text: "Grading and base preparation make the surface stable for the long term.",
  },
  {
    image: "/images/services/service/hardscape_constructor/4.webp",
    title: "Install The Features",
    text: "We build the surfaces and structures in durable masonry.",
  },
  {
    image: "/images/services/service/hardscape_constructor/5.webp",
    title: "Refine The Final Result",
    text: "We finish the details so it works well and looks good.",
  },
];

// Overview spesifik untuk Hardscape Contractor
const hardscapeOverviewItems = [
  {
    image: "/images/services/service/hardscape_constructor/6.webp",
    titleNormal: "Custom Stone",
    titleHighlight: "Patios",
  },
  {
    image: "/images/services/service/hardscape_constructor/7.webp",
    titleNormal: "Structural",
    titleHighlight: "Retaining Walls",
  }
];

// Testimonial klien spesifik untuk Hardscape Contractor
const hardscapeFeedbacks = [
  {
    feedbackText:
      "One of the things I noticed right away was how much care went into the details. The lines are straight, everything feels solid, and nothing looks rushed.",
    name: "Adam P.",
  },
  {
    feedbackText:
      "DMG Masonry helped us figure out a layout that made better use of the space. It turned out much more functional.",
    name: "Jennifer L.",
  },
];


export const metadata = buildMetadata({
  title: "Hardscape Contractor Calgary – Patios & Retaining Walls",
  description:
    "Calgary hardscape contractor for stone patios, pavers and retaining walls. Request a quote or call 1-403-619-8727.",
  path: "/hardscape-contractor/",
  image: "/images/services/service/hardscape_constructor/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/hardscape-contractor/")} />

      <Navbar />

      <PageTitle title="Hardscape Contractor" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/hardscape_constructor/1.webp"
        mainImageFocus="60%"
        title="Hardscape Contractor in Calgary: Patios, Retaining Walls & Pavers"
        description="DMG Masonry is a hardscape contractor in Calgary. We build patios, retaining walls, walkways and other outdoor surfaces, planned and finished to stand up to Calgary weather."
        paragraphsHeading="What Is Hardscaping? Patios, Walls and Walkways"
        paragraphs={[
          "Hardscaping covers the built parts of an outdoor space: patios, retaining walls, walkways, driveways and [outdoor kitchens](/outdoor-kitchen-contractor/). They deal with weather, moisture, ground movement and daily use, so they have to be built properly.",
          "A well-planned hardscape makes a yard easier to use and adds to the property. Good layout and clean finishing mean it stays practical and needs little upkeep.",
        ]}
        benefits={[
          "Custom outdoor design",
          "Durable surface construction",
          "Long-term outdoor performance",
          "Functional hardscape solutions",
          "Outdoor kitchen and BBQ area construction",
          "Natural stone and stone veneer finishes",
        ]}
        extraParagraphsHeading="What a Calgary Hardscape Project Involves"
        extraParagraphs={[
          "Planning comes first. We look at the site layout, drainage, materials and how you'll use the space before any building starts.",
          "From patios and retaining walls to walkways and outdoor kitchens, we build with practical methods and close attention to detail, so each feature fits the property.",
          "Done well, hardscape stays level, stable and tidy through Calgary's freeze-thaw winters.",
        ]}
      />

      <MaterialsSection
        subtitle="HARDSCAPE FEATURES"
        title="Hardscape Services We Offer in Calgary"
        description="Most hardscape projects combine more than one feature. These are the ones we build most."
        items={hardscapeFeatures}
      />

      <ProcessSteps
        title="How Does Our Hardscape Construction Process Work?"
        steps={hardscapeProcessSteps}
      />

      <ServiceGallery items={hardscapeOverviewItems} />

      <MaterialsSection
        subtitle="MATERIALS"
        title="What Materials Are Used In Hardscape Construction?"
        items={hardscapeMaterials}
      />

      <TestimonialSlider
        titleNormal="Calgary Hardscape"
        titleHighlight="Contractor Reviews"
        feedbacks={hardscapeFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/hardscape_constructor/8.webp"
        title="Why Choose DMG Masonry For Hardscape Construction In Calgary?"
        description="A well-planned hardscape gives you outdoor space that's practical, durable and good to look at. We plan carefully and build properly so it lasts."
        listItems={[
          "Careful planning",
          "Stable, durable construction",
          "Practical for everyday use",
          "Patios, walkways and driveways",
          "Retaining walls",
        ]}
        buttonText="Discuss Your Project"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={hardscapeFaqs}
        title="Hardscape Contractor Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/hardscape_constructor/9.webp"
          title="Request a Hardscape Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us what you'd like to build. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

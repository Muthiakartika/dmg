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

// Data FAQ khusus untuk halaman Hardscape Contractor
const hardscapeFaqs = [
  {
    uuid: "faq-hardscape-1",
    question: "What hardscape services do you provide?",
    answers: [
      "We provide full hardscape construction services in Calgary, including patios, walkways, retaining walls, driveways, outdoor kitchens, and other outdoor stone features. We also handle repairs and upgrades to improve the functionality and long-term performance of existing outdoor spaces.",
    ],
  },
  {
    uuid: "faq-hardscape-2",
    question: "Can hardscape designs be customized to my property?",
    answers: [
      "Yes. Every hardscape project is planned based on your property layout, intended use, and design preferences. Our goal is to create outdoor spaces that feel practical, visually balanced, and suited to long-term everyday use.",
    ],
  },
  {
    uuid: "faq-hardscape-3",
    question: "What materials are used for hardscape construction?",
    answers: [
      "We work with durable materials such as natural stone, stone veneer, concrete pavers, and other masonry products depending on the project requirements. Material selection is based on performance, appearance, and long-term outdoor durability in Calgary's climate.",
    ],
  },
  {
    uuid: "faq-hardscape-4",
    question: "Do you repair existing hardscape structures?",
    answers: [
      "Yes. We assess existing patios, pathways, and retaining walls to identify issues and provide suitable repair or upgrade solutions, using materials needed for small brick or stone patch repairs where applicable. The focus is on restoring stability, functionality, and overall appearance.",
    ],
  },
  {
    uuid: "faq-hardscape-5",
    question: "How long does a hardscape project usually take?",
    answers: [
      "Project timelines vary depending on size, design complexity, and site conditions, including projects like retaining walls or larger patio installations. We provide clear scheduling from the beginning so the construction process remains organized and expectations stay transparent throughout the project.",
    ],
  },
  {
    uuid: "faq-hardscape-6",
    question: "Do you build outdoor kitchens or BBQ areas as part of your hardscape services?",
    answers: [
      "Yes. Outdoor kitchens and outdoor BBQ areas in Calgary are a natural extension of our hardscape construction services, and we can design them alongside patios, seating areas, and other outdoor features to create a complete outdoor living space.",
    ],
  },
  {
    uuid: "faq-hardscape-7",
    question: "Can you help seal or maintain an existing patio?",
    answers: [
      "Yes. In addition to new construction, we can assess an existing patio and recommend the right sealing, repair, or maintenance approach to help protect it from Calgary's freeze-thaw climate.",
    ],
  },
  {
    uuid: "faq-hardscape-8",
    question: "How long does it take to build a retaining wall in Calgary?",
    answers: [
      "Timelines for a retaining wall depend on the length, height, and site conditions, but most retaining wall projects in Calgary can be completed within one to a few weeks. We'll provide a more specific estimate once we've reviewed your property.",
    ],
  },
  {
    uuid: "faq-hardscape-9",
    question: "What is the typical deposit required to start a hardscape project?",
    answers: [
      "Most hardscape projects require an upfront deposit to secure materials and scheduling, with the remaining balance due as the project progresses or upon completion.",
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
    text: "A well-built patio creates a durable, low-maintenance space for everyday outdoor living, finished with materials chosen to hold up to Calgary's climate.",
  },
  {
    icon: "flaticon-facade",
    title: "Retaining Walls",
    text: "Retaining walls in Calgary manage grade changes and support sloped areas of a property, combining structural performance with a finished, natural appearance. We also build walkways, driveways, and other outdoor stone features as part of a complete hardscape plan tailored to your property.",
  },
];

// Tahapan proses spesifik untuk Hardscape Contractor
const hardscapeProcessSteps = [
  {
    image: "/images/services/service/hardscape_constructor/2.webp",
    title: "Evaluate The Project Area",
    text: "We review site conditions and outdoor layout before construction begins.",
  },
  {
    image: "/images/services/service/hardscape_constructor/3.webp",
    title: "Prepare The Base",
    text: "Grading and foundation preparation help support long-term stability.",
  },
  {
    image: "/images/services/service/hardscape_constructor/4.webp",
    title: "Install The Features",
    text: "Outdoor surfaces and structures are built with durable masonry materials.",
  },
  {
    image: "/images/services/service/hardscape_constructor/5.webp",
    title: "Refine The Final Result",
    text: "Finishing details improve functionality, appearance, and long-term durability.",
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
  title: "Hardscape Contractors Pro Serving All in Calgary",
  description:
    "We provide hardscape services and hardscape construction across Calgary, from patios to retaining walls, all built to last through many years of weather.",
  path: "/hardscape-contractor/",
  image: "/images/services/service/hardscape_constructor/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Hardscape Contractor" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/hardscape_constructor/1.webp"
        title="Hardscape Construction Calgary: Patios, Retaining Walls & Outdoor Surfaces"
        description="DMG Masonry is a hardscape contractor in Calgary, Alberta. We handle hardscape construction including patios, retaining walls, pathways, and outdoor surfaces built for long-term performance and a timeless, well-finished appearance."
        paragraphsHeading="What is hardscape construction?"
        paragraphs={[
          "Hardscape construction covers the built, non-planted parts of an outdoor space: patios, retaining walls, walkways, driveways, and outdoor kitchens. These features are constantly exposed to weather changes, moisture, ground movement, and everyday use. Using durable materials and reliable hardscape construction methods, we build outdoor surfaces designed to maintain their structure, stability, and visual quality for years to come.",
          "Thoughtful hardscape construction also improves the usability and overall value of a property. Carefully planned layouts, clean finishing, and practical design choices help outdoor spaces remain visually balanced, low-maintenance, and functional for years, creating a more cohesive and comfortable outdoor environment.",
        ]}
        benefits={[
          "Custom Outdoor Design",
          "Durable Surface Construction",
          "Long-Term Outdoor Performance",
          "Functional Hardscape Solutions",
          "Retaining Walls Calgary Homeowners Trust",
          "Outdoor Kitchen & BBQ Area Construction",
          "Natural Stone & Stone Veneer Finishes",
        ]}
        extraParagraphsHeading="What does a hardscape project involve?"
        extraParagraphs={[
          "Every hardscape project requires careful planning before construction begins. Site layout, drainage conditions, material selection, and intended use all play an important role in creating outdoor spaces that perform reliably over time while maintaining proper functionality, stability, and visual balance.",
          "From patios and retaining walls to walkways and outdoor kitchens, our team approaches each hardscape construction project with attention to detail and practical building methods. The goal is to create outdoor features that complement the property while supporting everyday functionality, long-term durability, and a clean, cohesive appearance.",
          "Strong hardscape construction depends on experienced workmanship, durable materials, and careful execution throughout every stage of the project. Through reliable installation practices and timeless outdoor design, we help Calgary properties keep hardscape spaces that remain stable, functional, and visually lasting for years to come.",
        ]}
      />

      <MaterialsSection
        subtitle="HARDSCAPE FEATURES"
        title="What Hardscape Features Do We Build?"
        description="Hardscape construction covers a wide range of outdoor features, and most projects combine more than one. Here's a look at what we build most often in Calgary."
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
        titleNormal="Hear From Our Happy"
        titleHighlight="Hardscape Clients"
        feedbacks={hardscapeFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/hardscape_constructor/8.webp"
        title="Why Choose DMG Masonry For Hardscape Construction In Calgary?"
        description="Well-planned hardscape construction creates outdoor spaces that are functional, durable, and visually balanced. We use careful planning and quality installation practices to support long-term usability for every hardscape project."
        listItems={[
          "Thoughtful outdoor planning",
          "Stable and durable construction",
          "Functional everyday use",
          "Timeless outdoor appearance",
          "Retaining walls Calgary homeowners rely on",
          "Patio, walkway & driveway construction",
          "Trusted Calgary hardscape contractor",
        ]}
        buttonText="Discuss Your Project"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={hardscapeFaqs}
        title="Hardscape Construction Calgary: Frequently Asked Questions"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/hardscape_constructor/9.webp"
          title="Upgrade Your Outdoor Living Space"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}

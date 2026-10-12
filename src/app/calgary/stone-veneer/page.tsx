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

// Data FAQ khusus untuk halaman Stone Veneer
const stoneVeneerFaqs = [
  {
    uuid: "faq-veneer-1",
    question: "What is the difference between stone veneer and full stone masonry?",
    answers: [
      "Veneer is a thinner, lighter layer of stone that gives you the look of full stone without the weight. It's quicker to install and still durable."
    ]
  },
  {
    uuid: "faq-veneer-2",
    question: "Where can stone veneer be installed?",
    answers: [
      "Inside and out: fireplaces, feature walls, exterior facades, entryways and accent areas, on homes and commercial buildings."
    ]
  },
  {
    uuid: "faq-veneer-3",
    question: "Is stone veneer suitable for Calgary's climate?",
    answers: [
      "Yes, when it's installed properly. We use suitable methods and durable materials so the veneer handles moisture and Calgary's temperature swings."
    ]
  },
  {
    uuid: "faq-veneer-4",
    question: "Do you provide custom stone veneer design guidance?",
    answers: [
      "Yes. We help you choose stone textures, colours and layouts that suit your house."
    ]
  },
  {
    uuid: "faq-veneer-5",
    question: "Can damaged stone veneer be repaired instead of replaced?",
    answers: [
      "Often, yes. Damaged or aging veneer can usually be repaired rather than replaced. We check the surface and tell you what it needs."
    ]
  }
];

// Tahapan proses spesifik untuk Stone Veneer
const stoneVeneerProcessSteps = [
  {
    image: "/images/services/service/stone_veneer/2.webp",
    title: "Evaluate The Project",
    text: "We look at the space and the surface we'll be working on.",
  },
  {
    image: "/images/services/service/stone_veneer/3.webp",
    title: "Prepare Materials & Layout",
    text: "We choose the stone, plan the layout pattern and prepare the details.",
  },
  {
    image: "/images/services/service/stone_veneer/4.webp",
    title: "Apply The Stone Veneer",
    text: "We install each section carefully so it's secure and neat.",
  },
  {
    image: "/images/services/service/stone_veneer/5.webp",
    title: "Complete The Final Finish",
    text: "We finish the joints and details for a clean look.",
  },
];

// Overview spesifik untuk Stone Veneer
const stoneVeneerOverviewItems = [
  {
    image: "/images/services/service/stone_veneer/6.webp",
    titleNormal: "Natural Thin",
    titleHighlight: "Stone Veneer",
  },
  {
    image: "/images/services/service/stone_veneer/7.webp",
    titleNormal: "Manufactured",
    titleHighlight: "Cultured Stone",
  }
];

// Lokasi pemasangan stone veneer - section tanya-jawab baru (AEO)
const stoneVeneerApplications = [
  {
    title: "Exterior facades and accent walls",
    text: "Stone veneer is most often used on the front elevation, around entryways, and on columns or wainscot bands to break up siding. It is light enough to apply over most prepared exterior surfaces.",
  },
  {
    title: "Interior feature walls and fireplace surrounds",
    text: "Indoors, stone veneer is used on fireplace surrounds, feature walls and basement bars. Interior installs avoid the freeze-thaw exposure of exterior work, so material choice is driven mainly by appearance.",
  },
  {
    title: "Outdoor kitchens, fire pits and retaining walls",
    text: "Stone veneer is frequently used to clad outdoor kitchen bases, fire pit surrounds and the face of block retaining walls, which is how a hardscape project ends up looking like one connected design rather than separate builds.",
  },
  {
    title: "Can stone veneer go over existing brick or concrete?",
    text: "In many cases yes, provided the substrate is sound and properly prepared. We assess the existing surface first, because veneer applied over a wall that is already failing will fail with it.",
  },
];

// Testimonial klien spesifik untuk Stone Veneer
const stoneVeneerFeedbacks = [
  {
    feedbackText:
      "We had stone veneer installed around our fireplace and it completely changed the space. The installation was neat and everything lined up nicely.",
    name: "Olivia S.",
  },
  {
    feedbackText:
      "DMG Masonry helped us choose a stone that suited the style of our home instead of just picking what looked good on its own. Really happy with the result.",
    name: "Melissa K.",
  },
  {
    feedbackText:
      "Our old fireplace looked pretty dated, so we decided to update it with stone veneer. The room feels much warmer and more inviting now.",
    name: "Brian T.",
  },
  {
    feedbackText:
      "I liked that they took the time to explain the different options before we made a decision. It made choosing the right finish a lot easier than we expected.",
    name: "Ashley M.",
  },
];


export const metadata = buildMetadata({
  title: "Stone Veneer Calgary – Installation & Design – DMG Masonry",
  description:
    "Natural and cultured stone veneer installed on Calgary homes, from siding to fireplace surrounds. Request a quote or call 1-403-619-8727.",
  path: "/calgary/stone-veneer/",
  image: "/images/services/service/stone_veneer/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Stone Veneer" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/stone_veneer/1.webp"
        mainImageFocus="20%"
        title="Stone Veneer Installation in Calgary: Natural & Cultured Stone"
        description="Stone veneer is a thin layer of natural or manufactured stone applied to a wall. You get the look of full stone without the weight. DMG Masonry installs stone veneer in Calgary, inside and out."
        paragraphsHeading="What Is Stone Veneer and Why Use It?"
        paragraphs={[
          "Veneer is a flexible way to get a natural stone look without the weight and cost of full stone construction. We use it on feature walls, exterior facades, fireplaces and other surfaces.",
          "Installed properly, it handles Calgary's weather, needs very little upkeep, and adds value to homes and commercial spaces."
        ]}
        benefits={[
          "Full Stone Veneer Installation",
          "Design Consultation",
          "Repairs & Maintenance",
          "Interior & Exterior Applications",
        ]}
        extraParagraphsHeading="Stone Veneer Installer in Calgary: How Proper Installation Works"
        extraParagraphs={[
          "Installation is where veneer succeeds or fails. We prepare the surface, apply the stone and finish the joints so it stays firmly attached and looks clean, indoors or out.",
          "We also help you choose. We'll go through stone styles and colours with you, so the finish suits your house and how you use the space.",
          "If you already have veneer that's loose, cracked or worn, we repair that too. We match the stone as closely as we can so the repair blends in."
        ]}
      />

      <ProcessSteps
        title="How Does Our Stone Veneer Installation Work?"
        steps={stoneVeneerProcessSteps}
      />

      <ServiceGallery
        items={stoneVeneerOverviewItems}
      />

      <MaterialsSection
        subtitle="APPLICATIONS"
        title="Where Can Stone Veneer Be Installed?"
        items={stoneVeneerApplications}
      />

      <TestimonialSlider
        titleNormal="Calgary Stone"
        titleHighlight="Veneer Reviews"
        feedbacks={stoneVeneerFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/stone_veneer/8.webp"
        title="Why Do Calgary Property Owners Choose Stone Veneer?"
        description="Veneer gives you the look of natural stone in a lighter, quicker-to-install form. We focus on clean installation and durable materials, so it looks good and lasts."
        listItems={[
          "Custom styles and finishes",
          "Clean, precise installation",
          "Holds up in Calgary's climate",
          "A natural stone look"
        ]}
        buttonText="Find Out More"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={stoneVeneerFaqs}
        title="Stone Veneer Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/stone_veneer/9.webp"
          title="Request a Stone Veneer Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us about the wall or fireplace you have in mind. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

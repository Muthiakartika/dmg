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
import MaterialsSection from "@/components/Services/MaterialsSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Fireplace Installation
const fireplaceFaqs = [
  {
    uuid: "faq-fireplace-1",
    question: "Can an outdoor fireplace work in a smaller backyard?",
    answers: [
      "Yes. Outdoor fireplaces come in compact and larger sizes. We plan the layout, size and position to fit your space and still leave room to gather.",
    ],
  },
  {
    uuid: "faq-fireplace-2",
    question: "What types of outdoor fireplaces do you install?",
    answers: [
      "Wood-burning, gas and electric, in a range of styles. We also build indoor fireplaces into living spaces.",
    ],
  },
  {
    uuid: "faq-fireplace-3",
    question: "Wood-burning or gas outdoor fireplace: which is better?",
    answers: [
      "Wood gives you the crackle, smell and look of a real fire, but you need to manage firewood and ash. Gas lights at the push of a button, burns cleanly and needs less upkeep, but needs a gas line. Many Calgary homeowners choose gas for weeknights and convenience, wood for atmosphere.",
    ],
  },
  {
    uuid: "faq-fireplace-4",
    question: "Do I need a permit for a fireplace in Calgary?",
    answers: [
      "Gas fireplaces need a gas permit and a licensed gas fitter, and a new wood-burning fireplace or chimney may need a building permit. Rules depend on the type and location of the fireplace, so we'll tell you what your project needs before work starts.",
    ],
  },
  {
    uuid: "faq-fireplace-5",
    question: "How much does an outdoor fireplace cost in Calgary?",
    answers: [
      "It depends on the size, the fuel (wood or gas), the finish (natural stone, stone veneer or brick) and features such as built-in seating or wood storage. We quote after we've seen the space and agreed a design.",
    ],
  },
  {
    uuid: "faq-fireplace-6",
    question: "How long does mortar need to cure before a new fireplace can be used?",
    answers: [
      "Typically several days. We'll tell you how long to wait before the first fire.",
    ],
  },
  {
    uuid: "faq-fireplace-7",
    question: "Can a fireplace be finished with natural stone or stone veneer?",
    answers: [
      "Yes. We can finish a fireplace in natural stone, stone veneer, brick or tile, depending on the look you want and how it fits your property. We'll go through the options at the design stage.",
    ],
  },
  {
    uuid: "faq-fireplace-8",
    question: "Should I choose an indoor or outdoor fireplace?",
    answers: [
      "It depends on how you'll use the space. An indoor fireplace works all year as a feature of the room. An outdoor one extends your time on the patio.",
    ],
  },
];

const fireplaceOptions = [
  {
    icon: "flaticon-houses",
    title: "Indoor Luxury Fireplaces",
    text: "An indoor fireplace can be the feature that anchors a living space. We choose materials and finishes to suit traditional or contemporary interiors. If your existing chimney needs work first, see [chimney repair](/calgary/chimney-repair/).",
  },
  {
    icon: "flaticon-fireplace",
    title: "Patio Outdoor Fireplace",
    text: "A patio fireplace extends your outdoor season and gives your backyard, deck or garden somewhere to gather. Prefer an open fire at ground level? See our [custom fire pits](/calgary/custom-fire-pits/).",
  },
];

// Tahapan proses spesifik untuk Fireplace Installation
const fireplaceProcessSteps = [
  {
    image: "/images/services/service/fireplace_installation/2.webp",
    title: "Assess the Outdoor Space",
    text: "We look at the layout, nearby features and what you want from the fireplace.",
  },
  {
    image: "/images/services/service/fireplace_installation/3.webp",
    title: "Plan the Installation",
    text: "We plan a setup that works, is safe and fits the space.",
  },
  {
    image: "/images/services/service/fireplace_installation/4.webp",
    title: "Build the Fireplace",
    text: "We build with durable materials and proper construction.",
  },
  {
    image: "/images/services/service/fireplace_installation/5.webp",
    title: "Complete the Finish",
    text: "We finish the details for a clean look.",
  },
];

// Overview spesifik untuk Fireplace Installation
const fireplaceOverviewItems = [
  {
    image: "/images/services/service/fireplace_installation/6.webp",
    titleNormal: "Indoor Fireplace",
    titleHighlight: "Builds",
  },
  {
    image: "/images/services/service/fireplace_installation/7.webp",
    titleNormal: "Patio Fireplace",
    titleHighlight: "Builds",
  },
];

export const metadata = buildMetadata({
  title: "Outdoor Fireplaces Calgary – Design & Installation – DMG",
  description:
    "Custom outdoor fireplaces and indoor fireplace installation in Calgary. Request a quote or call 1-403-619-8727.",
  path: "/calgary/fireplace-installation/",
  image: "/images/services/service/fireplace_installation/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/fireplace-installation/")} />

      <Navbar />

      <PageTitle
        title="Fireplace Installation"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/fireplace_installation/1.webp"
        mainImageFocus="85%"
        title="Outdoor Fireplace Builders in Calgary: Design & Installation"
        description="DMG Masonry designs and builds fireplaces for homes and commercial properties in Calgary, indoors and out. A fireplace adds warmth and gives people somewhere to gather."
        paragraphs={[
          "An outdoor fireplace lets you use your patio or backyard through more of the year. Indoors, a fireplace becomes a feature of the room. We build gas, electric and wood-burning fireplaces, with finishes chosen to suit traditional and contemporary interiors.",
          "Before we build, we plan the layout, ventilation and finishing details so the fireplace suits the space and meets the practical requirements. We work in natural stone, [stone veneer](/calgary/stone-veneer/), brick and tile, whichever fits the style of your property.",
        ]}
        benefits={[
          "Indoor and outdoor fireplaces",
          "Custom design and material options",
          "Gas, electric and wood-burning",
          "Natural stone and stone veneer finishes",
          "Built to last",
        ]}
        extraParagraphs={[]}
      />

      <MaterialsSection
        subtitle="FIREPLACE OPTIONS"
        title="Indoor & Outdoor Fireplace Options in Calgary"
        description="The right fireplace depends on where and how you want to use it. We build two main kinds."
        items={fireplaceOptions}
      />

      <ProcessSteps
        title="Our Fireplace Design & Installation Process"
        steps={fireplaceProcessSteps}
      />

      <ServiceGallery items={fireplaceOverviewItems} />

      <WhyChooseUs
        image="/images/services/service/fireplace_installation/8.webp"
        title="Outdoor Fireplaces Built for Calgary's Four Seasons"
        description="We build custom outdoor fireplaces in Calgary that add warmth to your outdoor space and are made to be used through the seasons. We match the style to your property."
        listItems={[
          "Made for outdoor use",
          "Warm and inviting",
          "A natural gathering spot",
          "Built to last",
          "Indoor and outdoor options",
          "Natural stone and stone veneer finishes",
        ]}
        buttonText="Plan Your Project"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={fireplaceFaqs}
        title="Outdoor Fireplace Calgary FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/fireplace_installation/9.webp"
          title="Let's Build Your Ideal Outdoor Fireplace"
          subtitle="REQUEST A QUOTE"
          description="Tell us where you'd like the fireplace and how you'd like to use it. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

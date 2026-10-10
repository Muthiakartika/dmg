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

// Data FAQ khusus untuk halaman Custom Pizza Oven
const pizzaOvenFaqs = [
  {
    uuid: "faq-oven-1",
    question: "Can custom pizza ovens be built for smaller outdoor spaces?",
    answers: [
      "Yes. We design pizza ovens in a range of sizes to suit different property layouts, including compact backyard spaces. The layout is planned carefully to maintain both functionality and comfortable outdoor flow.",
    ],
  },
  {
    uuid: "faq-oven-2",
    question: "Do you install pizza ovens for commercial applications?",
    answers: [
      "Absolutely. Our team handles both residential and commercial pizza oven installations, including larger-scale ovens designed for restaurants, hospitality spaces, and outdoor entertainment areas.",
    ],
  },
  {
    uuid: "faq-oven-3",
    question:
      "Can a pizza oven be combined with an outdoor kitchen or BBQ area?",
    answers: [
      "Yes. Many of our projects include integrated outdoor cooking features such as BBQ stations, countertops, prep areas, and outdoor kitchens to create a more complete cooking and gathering space.",
    ],
  },
  {
    uuid: "faq-oven-4",
    question: "How do you ensure consistent cooking performance?",
    answers: [
      "Consistent performance comes from proper construction, heat-resistant materials, and effective heat retention design. We build each oven to support stable cooking temperatures and reliable long-term use.",
    ],
  },
  {
    uuid: "faq-oven-5",
    question: "Can the pizza oven design be customized?",
    answers: [
      "Yes. At DMG Masonry, every pizza oven is tailored to the project, including the size, shape, finish, and overall style to ensure it fits naturally within the outdoor environment and cooking needs.",
    ],
  },
  {
    uuid: "faq-oven-6",
    question: "How long before I can use my new pizza oven after installation?",
    answers: [
      "A newly built pizza oven needs time for the masonry and mortar to cure properly, and it's important to follow a gradual first-fire process to avoid cracking. We'll provide you with a recommended curing and first-use schedule specific to your oven once construction is complete.",
    ],
  },
  {
    uuid: "faq-oven-7",
    question: "How long does it take to build a custom pizza oven?",
    answers: [
      "Most pizza oven builds take one to a few weeks to complete, depending on the size, design, and materials chosen. We'll give you a more precise timeline after reviewing your specific project.",
    ],
  },
  {
    uuid: "faq-oven-8",
    question: "Is brick or natural stone better for a pizza oven?",
    answers: [
      "Both stone perform well for pizza ovens, though the choice often comes down to style and how the oven fits into your outdoor space. We typically recommend heat-resistant materials suited to high-temperature cooking, and can guide you through the best option for your design during planning.",
    ],
  },
  {
    uuid: "faq-oven-9",
    question:
      "What should I ask a contractor before starting my pizza oven project?",
    answers: [
      "It's a good idea to ask about experience building pizza ovens specifically, expected construction timelines, material options, and how heat performance and durability are handled. We're happy to answer all of this during your initial consultation.",
    ],
  },
  {
    uuid: "faq-oven-10",
    question: "Are there eco-friendly material options for a custom pizza oven?",
    answers: [
      "Yes, there are eco-friendly and sustainably sourced masonry material options available for pizza oven builds. We can discuss material choices that align with your sustainability preferences during the design phase.",
    ],
  },
];

// Section MATERIALS baru (lihat sheet "CUSTOM PIZZA OVEN" baris 10-19)
const pizzaOvenMaterials = [
  {
    icon: "flaticon-mansory",
    title: "Heat-Resistant Brick",
    text: "Firebrick and heat-resistant brick are the traditional choice for pizza oven interiors, prized for how efficiently they retain and radiate heat for consistent cooking results.",
  },
  {
    icon: "flaticon-cube",
    title: "Natural Stone",
    text: "Natural stone is often used for the oven's exterior and surrounding structure, giving it a durable, textured finish that holds up well outdoors while complementing the rest of your backyard.",
  },
  {
    icon: "flaticon-facade",
    title: "Stone Veneer & Brick Finishes",
    text: "For homeowners who want the visual character of stone or brick without the added weight, veneer finishes are a practical option that still delivers a strong, long-lasting exterior for your oven.",
  },
  {
    icon: "flaticon-houses",
    title: "Eco-Friendly Material Options",
    text: "We're able to source eco-friendly and sustainably produced masonry materials for pizza oven builds, so you can choose a construction approach that aligns with your environmental priorities without sacrificing performance.",
  },
];

// Tahapan proses spesifik untuk Custom Pizza Oven
const pizzaOvenProcessSteps = [
  {
    image: "/images/services/service/custome_pizza/2.webp",
    title: "Assess the Space",
    text: "We review your layout and cooking needs.",
  },
  {
    image: "/images/services/service/custome_pizza/3.webp",
    title: "Plan the Installation",
    text: "We create a tailored setup based on your space and requirements.",
  },
  {
    image: "/images/services/service/custome_pizza/4.webp",
    title: "Build the Custom Pizza Oven",
    text: "We build with focus on structure, heat performance, and durability.",
  },
  {
    image: "/images/services/service/custome_pizza/5.webp",
    title: "Final Finish",
    text: "We ensure a clean and long-lasting result ready for outdoor use.",
  },
];

// Overview spesifik untuk Custom Pizza Oven
const pizzaOvenOverviewItems = [
  {
    image: "/images/services/service/custome_pizza/6.webp",
    titleNormal: "Wood-Fired",
    titleHighlight: "Pizza Ovens",
  },
  {
    image: "/images/services/service/custome_pizza/7.webp",
    titleNormal: "Custom Masonry",
    titleHighlight: "Oven Builds",
  },
];

// Testimonial klien spesifik untuk Custom Pizza Oven
const pizzaOvenFeedbacks = [
  {
    feedbackText:
      "I'd wanted a wood-fired pizza oven for a long time, but never knew where to start. DMG Masonry helped us come up with a design that fit our backyard without taking over the whole space.",
    name: "Matt R.",
  },
  {
    feedbackText:
      "The finished pizza oven looks really clean and fits the space perfectly.",
    name: "Hannah M.",
  },
];


export const metadata = buildMetadata({
  title: "Outdoor Pizza Ovens Calgary – Custom Wood-Fired Builds – DMG",
  description:
    "Custom wood-fired outdoor pizza ovens built in Calgary, for homes and commercial projects. Request a quote or call 1-403-619-8727.",
  path: "/calgary/custom-pizza-oven/",
  image: "/images/services/service/custome_pizza/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Custom Pizza Oven" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custome_pizza/1.webp"
        title="Custom Outdoor Pizza Ovens in Calgary"
        description="Outdoor pizza ovens bring a different rhythm to outdoor living in Calgary, where cooking, heat, and gathering come together in one space. We design and build custom outdoor pizza ovens that are made to perform reliably while fitting naturally into any outdoor environment."
        paragraphs={[
          "Built for high-temperature cooking and year-round exposure, each outdoor pizza oven requires careful material selection and precise construction. We use durable masonry systems designed to retain heat efficiently, handle repeated use, and maintain structural stability through Calgary's changing weather conditions, ensuring consistent performance.",
          "A well-designed pizza oven often becomes more than a cooking feature. It naturally becomes a social focal point in the outdoor space, influencing how people gather, cook, and spend time together in a more engaging setting, while adding both function and atmosphere to the overall outdoor experience.",
        ]}
        benefits={[
          "Custom Pizza Oven Design & Build",
          "Built-In Outdoor Cooking Systems",
          "Residential & Commercial Pizza Oven Builds",
          "Durable Heat-Resistant Masonry",
        ]}
        extraParagraphs={[
          "Every build begins with a clear understanding of how the space will be lived in and experienced, from cooking habits and frequency of use to the available layout and flow of the outdoor area. This approach allows us to design a pizza oven that feels naturally integrated into its surroundings, rather than appearing as a standalone structure that simply occupies space.",
          "Construction is carried out with careful consideration of heat distribution, structural integrity, and how each material responds under sustained high temperatures. Every layer and connection is planned with precision to support consistent performance, while also achieving a clean, cohesive finish that holds up well in demanding outdoor conditions over time.",
          "At DMG Masonry, the defining focus of our work is precision in execution combined with a strong understanding of material behavior. This commitment ensures each outdoor pizza oven is not only visually well-resolved, but also stable, efficient, and reliable for long-term use in Calgary outdoor environments where durability truly matters.",
        ]}
      />

      <MaterialsSection
        title="Materials for Wood-Fired Pizza Ovens"
        description="Because pizza ovens operate at high, sustained temperatures, material choice matters even more than it does for most outdoor structures. Here's what we typically work with."
        items={pizzaOvenMaterials}
      />

      <ProcessSteps
        title="How We Build Your Outdoor Pizza Oven in Calgary"
        steps={pizzaOvenProcessSteps}
      />

      <ServiceGallery items={pizzaOvenOverviewItems} />

      <TestimonialSlider
        titleNormal="Calgary Pizza Oven"
        titleHighlight="Reviews"
        feedbacks={pizzaOvenFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/custome_pizza/8.webp"
        title="Outdoor Pizza Ovens for North & South Calgary Backyards"
        description="A wood-fired outdoor pizza oven adds warmth, character, and functionality to any outdoor space in Calgary. We create custom-built pizza ovens designed for reliable cooking performance while complementing the overall style of your backyard area."
        listItems={[
          "Custom-built pizza oven designs",
          "Reliable heat for consistent cooking",
          "Traditional wood-fired cooking experience",
          "Designed for outdoor gatherings",
          "Professional pizza oven installation in Calgary",
          "Built with durable, heat-resistant masonry materials",
          "Trusted by Calgary homeowners for outdoor living projects",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        questionsAsHeadings
        faqs={pizzaOvenFaqs}
        title="Pizza Oven Calgary FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/custome_pizza/9.webp"
          title="Build Your Ideal Outdoor Pizza Oven in Calgary"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}

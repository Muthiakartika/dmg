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
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Chimney Repair
const chimneyRepairFaqs = [
  {
    uuid: "faq-chimney-1",
    question: "How do I know if my chimney needs repair?",
    answers: [
      "Look for cracked or crumbling mortar, loose bricks, brick faces flaking off (spalling), water stains or leaks near the fireplace, and a fireplace that doesn't draw as well as it used to. If you see any of these, we'll inspect the chimney and tell you what needs doing.",
    ],
  },
  {
    uuid: "faq-chimney-2",
    question: "Can chimney damage become a safety concern?",
    answers: [
      "Yes. A damaged chimney can become unstable, let water into the house and cause ventilation problems. The earlier it's fixed, the less likely it is to turn into a bigger repair.",
    ],
  },
  {
    uuid: "faq-chimney-3",
    question: "Can chimney leaks affect other areas of the property?",
    answers: [
      "Yes. Water coming in through a chimney can damage the brick around it and show up as stains on nearby ceilings and walls. Fixing the leak early stops the damage spreading.",
    ],
  },
  {
    uuid: "faq-chimney-4",
    question: "Do chimney repairs need to follow local building standards?",
    answers: [
      "Yes. Chimney repairs have to meet the applicable building and safety requirements, and we do our work to those standards.",
    ],
  },
  {
    uuid: "faq-chimney-5",
    question: "How often should a chimney be inspected?",
    answers: [
      "We recommend at least once a year, especially if you use the fireplace a lot. A yearly check catches small problems before they grow.",
    ],
  },
];

// Tahapan proses spesifik untuk Chimney Repair
const chimneyProcessSteps = [
  {
    image: "/images/services/service/chimney_repair/2.webp",
    title: "Inspect The Chimney",
    text: "We check for cracks, spalling brick and the overall condition.",
  },
  {
    image: "/images/services/service/chimney_repair/3.webp",
    title: "Plan The Repair",
    text: "We put together a repair plan based on the damage we find.",
  },
  {
    image: "/images/services/service/chimney_repair/4.webp",
    title: "Strengthen The Structure",
    text: "Spalled brick is replaced and damaged mortar is repaired.",
  },
  {
    image: "/images/services/service/chimney_repair/5.webp",
    title: "Seal & Protect",
    text: "We seal the repair to keep water out and protect the chimney through winter.",
  },
];

// Overview spesifik untuk Chimney Repair
const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Cap/Crown",
    titleHighlight: "Pouring",
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
  }
];

// Testimonial klien spesifik untuk Chimney Repair
const chimneyFeedbacks = [
  {
    feedbackText:
      "After a heavy rain, we started seeing signs of moisture around the fireplace. DMG Masonry found the problem with the chimney and repaired it before it turned into something bigger. It's been holding up well ever since.",
    name: "Allison P.",
  },
  {
    feedbackText:
      "The finished work blends in really well, and it doesn't stand out like a patch job.",
    name: "Trevor L.",
  },
];


export const metadata = buildMetadata({
  title: "Chimney Repair Calgary – Leaks, Cracks, Caps & Crowns – DMG",
  description:
    "Chimney repair in Calgary for cracks, leaks, failing caps and crowns. Request an estimate before winter or call 1-403-619-8727.",
  path: "/calgary/chimney-repair/",
  image: "/images/services/service/chimney_repair/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Chimney Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/chimney_repair/1.webp"
        mainImageFocus="20%"
        title="Chimney Repair in Calgary: Leaks, Cracks, Caps & Crowns"
        description="Water is the main enemy of any chimney. It gets into the brick and mortar, freezes and thaws through the winter, and slowly breaks the masonry down. If you've noticed cracked mortar, loose bricks or a leak near your fireplace, call us before it gets worse."
        paragraphs={[
          "We repair chimneys in Calgary and the surrounding area. After an inspection, we replace damaged brick, repoint worn mortar, and repair the crown and cap, using materials that match the rest of the chimney.",
          "Fixing a small problem early is simpler than waiting for water to reach your walls and ceiling.",
        ]}
        benefits={[
          "Stops leaks",
          "Fixes the mortar",
          "Replaces damaged brick",
          "Matches your chimney",
        ]}
        extraParagraphs={[
          "Every chimney is different. Age, exposure and the condition of the brick all change what it needs, so we inspect first: the brick, the mortar joints, the crown and cap, and the masonry around the chimney. Then we recommend a repair.",
          "The work can include repointing worn mortar joints, replacing spalled brick, and repairing parts damaged by weather. We keep the finish clean so the repair doesn't look like a patch.",
        ]}
      />

      <ProcessSteps
        title="How Our Calgary Chimney Repair Process Works"
        steps={chimneyProcessSteps}
      />

      <ServiceGallery items={chimneyOverviewItems} />

      <TestimonialSlider
        titleNormal="Calgary Chimney"
        titleHighlight="Repair Reviews"
        feedbacks={chimneyFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/chimney_repair/8.webp"
        title="Brick Chimney Repair Built to Last"
        description="A damaged chimney can affect the safety and condition of the whole structure. Our repairs strengthen the chimney and keep water out, so the damage doesn't spread."
        listItems={[
          "A stronger structure",
          "Water kept out",
          "Damage stopped before it spreads",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={chimneyRepairFaqs}
        title="Calgary Chimney Repair FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/calgary/calgary-1.webp"
          title="Book a Chimney Repair Estimate in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Seeing cracks or a leak? Tell us what's happening and we'll arrange an inspection. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

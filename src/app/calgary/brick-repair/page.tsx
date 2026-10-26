import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import FaqSection from "@/components/Sections/FaqSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const brickRepairFaqs = [
  {
    uuid: "faq-brick-repair-1",
    question: "What are the common signs that brickwork needs repair?",
    answers: [
      "Cracked or chipped bricks, crumbling mortar, loose bricks, damp, discolouration, or a section of wall that looks like it's shifting. Fixing these early keeps the damage from spreading.",
    ],
  },
  {
    uuid: "faq-brick-repair-2",
    question: "What's the difference between tuckpointing and repointing?",
    answers: [
      "In everyday use, both mean removing failed mortar and replacing it with fresh mortar. Strictly, tuckpointing also adds a fine line along the joint for a crisp finish. Most brick repair is repointing, with the new mortar matched to the colour and joint style of the existing wall.",
    ],
  },
  {
    uuid: "faq-brick-repair-3",
    question: "Can you replace just a few damaged bricks?",
    answers: [
      "Yes. Cracked or spalled bricks can be cut out one at a time and replaced with matching brick, as long as the surrounding wall is stable. It's one of the most common repairs we do.",
    ],
  },
  {
    uuid: "faq-brick-repair-4",
    question: "What causes bricks to crack in Calgary?",
    answers: [
      "Mostly water and freeze-thaw: water soaks into the brick or mortar, freezes and expands. Settlement under the wall and mortar that's harder than the brick around it can also crack bricks. We find the cause before repairing, so the damage doesn't come back.",
    ],
  },
  {
    uuid: "faq-brick-repair-5",
    question: "Do you repair both residential and commercial brickwork?",
    answers: [
      "Yes. We repair brick on homes and commercial buildings, and fit the repair to the size, condition and construction of the job.",
    ],
  },
  {
    uuid: "faq-brick-repair-6",
    question: "How much does brick repair cost?",
    answers: [
      "It depends on how many bricks or how much mortar needs replacing, the height and access, and how hard the brick is to match. We give you a clear quote after an inspection.",
    ],
  },
];

const brickRepairProcessSteps = [
  {
    image: "/images/services/service/brick_repair/2.webp",
    title: "Inspect the Brickwork",
    text: "We check the bricks, the mortar and the overall condition of the wall.",
  },
  {
    image: "/images/services/service/brick_repair/3.webp",
    title: "Assess the Damage",
    text: "We work out the right repair.",
  },
  {
    image: "/images/services/service/brick_repair/4.webp",
    title: "Repair the Brickwork",
    text: "We replace damaged bricks and repair worn mortar.",
  },
  {
    image: "/images/services/service/brick_repair/5.webp",
    title: "Final Quality Check",
    text: "We check the repair for strength and a clean finish.",
  },
];

export const metadata = buildMetadata({
  title: "Brick Repair Calgary – Brickwork & Mortar Repair – DMG",
  description:
    "Brick repair in Calgary for cracked, spalled and loose brick, with mortar matched for a clean finish. Request a quote or call 1-403-619-8727.",
  path: "/calgary/brick-repair/",
  image: "/images/services/service/brick_repair/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/brick-repair/")} />

      <Navbar />

      <PageTitle title="Brick Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/brick_repair/1.webp"
        title="Brick Repair in Calgary: Cracked Brick, Spalling & Mortar Repair"
        description="Damaged brick doesn't fix itself. Moisture, temperature swings and a building settling over the years crack bricks and break down the mortar, and the damage gets worse each winter. DMG Masonry repairs brick walls and [brick chimneys](/calgary/chimney-repair/) on homes and commercial buildings in Calgary."
        paragraphs={[
          "Cracked bricks, crumbling mortar joints, loose bricks and weather damage are all common as buildings age. Before we repair anything, we look for the cause, so we're fixing the problem and not just covering it up.",
          "Repairing brick early keeps the damage from spreading and helps keep water out of the wall.",
        ]}
        benefits={[
          "Brick wall repairs",
          "Homes and commercial buildings",
          "Brick repointing",
          "Repairs that match your brick",
        ]}
        extraParagraphs={[
          "We start with an inspection: the damaged bricks, the mortar joints and the masonry around them. The age and construction of the building decide which repair suits it best.",
          "Good brick repair is more than swapping out a damaged brick. We restore the strength of the wall and keep the repair in line with the rest of it, whether that means replacing cracked bricks or repointing worn mortar. Stone, block and structural cracks are covered on our [masonry repair](/calgary/masonry-repair/) page.",
        ]}
      />

      <ProcessSteps
        title="Our Brick Repair Process in Calgary"
        steps={brickRepairProcessSteps}
      />

      <WhyChooseUs
        image="/images/services/service/brick_repair/8.webp"
        title="Brickwork Repair for Homes and Businesses in Calgary"
        description="Brick damage left alone only gets worse. We repair brickwork for homes and businesses across Calgary, so the wall stays sound and protected from the weather."
        listItems={[
          "Brick damage assessment",
          "Brick repairs",
          "Precision repointing",
          "Homes and businesses",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={brickRepairFaqs}
        title="Brick Repair Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/brick_repair/9.webp"
          title="Request a Brick Repair Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us what's wrong with your brick and we'll arrange a look. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}

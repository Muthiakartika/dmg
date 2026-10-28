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
import Link from "next/link";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Masonry Repair
const masonryRepairFaqs = [
  {
    uuid: "faq-repair-1",
    question: "What types of masonry problems do you repair?",
    answers: [
      "Cracked or failing mortar, loose or shifted bricks, flaking brick faces, damaged stone and structural cracks. If it's brick, stone or mortar and it's damaged, ask us.",
    ],
  },
  {
    uuid: "faq-repair-2",
    question: "When should masonry be repaired instead of just monitored?",
    answers: [
      "As soon as you see movement, a crack that's getting wider, or mortar that's crumbling. Once water is getting in, each Calgary winter makes it worse. Some small cracks in a stable wall can be watched, and when we visit we'll tell you which kind you have.",
    ],
  },
  {
    uuid: "faq-repair-3",
    question: "Should crumbling mortar be repointed, or do the bricks need replacing?",
    answers: [
      "Usually the mortar is the problem, not the bricks. Mortar is meant to wear first, and repointing (raking out the failed joints and packing in fresh, matched mortar) repairs the wall while keeping the original brick. Bricks only need replacing when their faces have spalled, they're cracked through, or the wall has moved.",
    ],
  },
  {
    uuid: "faq-repair-4",
    question: "How much does masonry repair cost in Calgary?",
    answers: [
      "It depends on the type of damage, how much of the wall is affected, the height and access, and whether we're matching older brick or stone. A few bricks or a small area of joints is a small job; repointing a whole wall or rebuilding a section is larger. We quote after seeing the wall and tell you what's urgent and what can wait.",
    ],
  },
  {
    uuid: "faq-repair-5",
    question: "Will repaired areas match the existing brickwork?",
    answers: [
      "We match the brick or stone, the mortar colour and the joint finish as closely as we can. On some older brick an exact match isn't always possible, but a good repair should be hard to spot.",
    ],
  },
  {
    uuid: "faq-repair-6",
    question: "How do I choose a reliable masonry restoration company?",
    answers: [
      "Look for one that inspects before quoting, explains the cause of the damage, gives a clear quote listing what's included, shows photos of similar repairs and has reviews from local customers. Be wary of anyone who wants to patch over cracks without finding out why they opened.",
    ],
  },
];

// Tahapan proses spesifik untuk Masonry Repair
const masonryProcessSteps = [
  {
    image: "/images/services/service/masonry_repair/2.webp",
    title: "Inspect The Damage",
    text: "We check the cracks, joints and surface to see what's wrong and why.",
  },
  {
    image: "/images/services/service/masonry_repair/3.webp",
    title: "Plan The Repair",
    text: "We decide how much needs replacing or repointing and talk you through the options.",
  },
  {
    image: "/images/services/service/masonry_repair/4.webp",
    title: "Restore The Masonry",
    text: "Damaged brick, stone and mortar are cut out and replaced with matching materials.",
  },
  {
    image: "/images/services/service/masonry_repair/5.webp",
    title: "Ensure Lasting Performance",
    text: "We check the finished repair for strength, finish and how well it matches the original wall.",
  },
];

// Overview spesifik untuk Masonry Repair
const masonryOverviewItems = [
  {
    image: "/images/services/service/masonry_repair/6.webp",
    titleNormal: "Brick & Mortar",
    titleHighlight: "Restoration",
  },
  {
    image: "/images/services/service/masonry_repair/7.webp",
    titleNormal: "Stone Masonry",
    titleHighlight: "Refurbishing",
  }
];

// Jenis kerusakan masonry - section tanya-jawab baru (AEO)
const masonryDamageTypes = [
  {
    title: "What is spalling brick?",
    text: "Spalling is when the face of a brick flakes, chips or pops off, leaving a rough, crumbling surface. It happens when water soaks into the brick, freezes and expands. Calgary sees a high number of freeze-thaw cycles each winter, which is why spalling shows up here more than in milder climates. Spalled brick cannot be patched. The affected units are cut out and replaced.",
  },
  {
    title: "What does cracked or crumbling mortar mean?",
    text: "Mortar is designed to be softer than the brick around it so that it wears first and the brick survives. When joints turn powdery, hollow or start falling out, water can get behind the wall. The fix is repointing: raking out the failed mortar to a consistent depth and packing in fresh mortar matched to the original.",
  },
  {
    title: "Why is my brick wall bulging or leaning?",
    text: "Bulging usually means the masonry has lost its connection to the structure behind it, or moisture has built up inside the wall. This is the most serious of the common signs. A bulging wall should be inspected rather than watched, because the failure is already structural.",
  },
  {
    title: "What is efflorescence on brick?",
    text: "Efflorescence is the white, powdery deposit that appears on brick and mortar. It is mineral salt left behind as water travels through the masonry and evaporates at the surface. The staining itself is cosmetic and washes off, but it is a signal that water is getting into the wall somewhere.",
  },
  {
    title: "What do stair-step cracks mean?",
    text: "Stair-step cracks follow the mortar joints diagonally in a stepped pattern. They usually point to movement or settlement below the wall rather than a fault in the brick itself, which is why the repair often [starts at the foundation](/calgary/foundation-repair/) rather than the face of the masonry.",
  },
];

export const metadata = buildMetadata({
  title: "Masonry Repair Calgary – Restoration & Mortar Repair – DMG",
  description:
    "Calgary masonry repair for cracked brick, crumbling mortar and damaged stone. Request a quote or call 1-403-619-8727.",
  path: "/calgary/masonry-repair/",
  image: "/images/services/service/masonry_repair/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/masonry-repair/")} />

      <Navbar />

      <PageTitle title="Masonry Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/masonry_repair/1.webp"
        mainImageFocus="40%"
        title="Masonry Repair in Calgary: Brick, Mortar & Stone Restoration"
        description="DMG Masonry repairs brick, stone and mortar on homes and commercial buildings across Calgary and Alberta. If you have cracked mortar, flaking brick or a wall that looks like it's moving, we'll come out, find the cause and fix it properly. Request a quote, or call 1-403-619-8727."
        paragraphsHeading="What Causes Brick to Crack, Crumble or Spall?"
        paragraphs={[
          "Most masonry damage comes down to water. It gets into the brick and mortar, freezes overnight and expands, then thaws and does it all again. Calgary goes through that cycle many times every winter, so a small crack or a worn joint turns into a bigger problem faster than it would in a milder climate.",
          "Water isn't the only cause. Settlement under the wall, moisture trapped inside it and years of weather all play a part. That's why we look for the cause before we repair the damage. Patching a crack without fixing what opened it usually means doing the job twice."
        ]}
        benefits={[
          "Fixes the cause",
          "Matches your brick",
          "Keeps water out",
          "Restores strength",
        ]}
        extraParagraphsHeading="What a Calgary Masonry Repair Project Involves"
        extraParagraphs={[
          "We start by looking at the wall. We check the bricks, the mortar joints and any cracks, and work out what's causing them. Then we tell you what needs fixing now and what can wait.",
          "The work depends on the damage. It might be a few bricks cut out and replaced, a section of mortar raked out and repointed, or a full restoration of a wall. We work on both brick and stone. For chimneys, see our [chimney repair service](/calgary/chimney-repair/).",
          "We match the new brick, the mortar colour and the joint finish to what's already there, so the repair blends in instead of standing out. We do this for homes and commercial buildings across Calgary and Alberta."
        ]}
      />

      <ProcessSteps
        title="Our Masonry Repair Process"
        steps={masonryProcessSteps}
      />

      <ServiceGallery
        items={masonryOverviewItems}
      />

      <MaterialsSection
        subtitle="DAMAGE TYPES"
        title="Common Brick & Mortar Damage We Repair"
        items={masonryDamageTypes}
        after={
          <>
            Need a closer look at a specific wall? See our{" "}
            <Link href="/calgary/brick-repair/" className="text-link">
              brick repair service in Calgary
            </Link>.
          </>
        }
      />

      <WhyChooseUs
        image="/images/services/service/masonry_repair/8.webp"
        title="Signs You Need Masonry Repair Near You"
        description="Small masonry problems get bigger when they're left alone. Water gets in through a cracked joint, freezes, and opens it further. These are the signs worth acting on:"
        listItems={[
          "Mortar joints that are cracked, powdery or falling out",
          "Bricks that bulge, lean or have shifted",
          "Cracks that are getting wider or step diagonally along the joints",
          "Brick faces flaking or popping off after winter",
          "Damp patches or white powder on the wall"
        ]}
        note="Not sure how serious it is? Send us a message and we'll take a look."
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={masonryRepairFaqs}
        title="Masonry Repair Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/masonry_repair/9.webp"
          title="Request a Masonry Repair Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us what you're seeing and we'll come out for a look. Fill in the form, email will@dmgmasonry.ca or call 1-403-619-8727."
        />
      </div>

      <Footer />
    </>
  );
}

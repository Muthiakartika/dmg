import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WhyChooseUs from "@/components/Services/WhyChooseUs";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import FaqSection from "@/components/Sections/FaqSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import ServiceGallery from "@/components/Services/ServiceGallery";
import {
  chimneyRepairLocations,
  getChimneyRepairLocation,
} from "@/lib/chimneyRepairLocations";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

interface ChimneyLocationPageProps {
  params: { location: string };
}

const chimneyProcessContent = [
  {
    title: "Inspect The Chimney",
    text: "We check the masonry, cap/crown, joints and any spalling brick.",
  },
  {
    title: "Plan The Repair",
    text: "We match the repair to the structure and the cause of the damage.",
  },
  {
    title: "Restore The Masonry",
    text: "Spalled brick is replaced, and failed mortar and stone are repaired.",
  },
  {
    title: "Finish & Protect",
    text: "We finish the work for strength and weather resistance.",
  },
];

const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Cap/Crown",
    titleHighlight: "Repair",
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return chimneyRepairLocations.map((location) => ({
    location: location.slug,
  }));
}

export function generateMetadata({
  params,
}: ChimneyLocationPageProps): Metadata {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: location.metadataTitle,
    description: location.metadataDescription,
    path: `/calgary/chimney-repair/${location.slug}/`,
    image: location.images.main,
  });
}

export default function ChimneyLocationPage({
  params,
}: ChimneyLocationPageProps) {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    notFound();
  }

  const processSteps = chimneyProcessContent.map((step, index) => ({
    ...step,
    image: location.images.process[index],
  }));

  const faqs = [
    {
      uuid: `faq-${location.slug}-1`,
      question: `What are the signs that my ${location.name} chimney needs repair?`,
      answers: [
        "Cracked or missing mortar, loose brick or stone, brick faces flaking off (spalling), white staining, bits of masonry near the roof, water marks around the fireplace, or a cracked cap or crown. Any of these is a reason to book an inspection. The sooner we look, the smaller the repair tends to be.",
      ],
    },
    {
      uuid: `faq-${location.slug}-2`,
      question: `How does local weather affect chimneys in ${location.name}?`,
      answers: [
        location.weatherFaqAnswer,
      ],
    },
    {
      uuid: `faq-${location.slug}-3`,
      question: "Can you repair part of a chimney, or does it need rebuilding?",
      answers: [
        "Often a chimney can be repaired in sections if the rest of the masonry is sound. That might mean repointing joints, replacing individual bricks or rebuilding only the top courses. If the chimney has moved or deteriorated overall, a bigger rebuild may be the safer choice, and we'll tell you which.",
      ],
    },
    {
      uuid: `faq-${location.slug}-4`,
      question: "What chimney components can DMG Masonry repair?",
      answers: [
        "Brick and stone, spalled brick, mortar joints, the cap or crown, and unstable sections of the stack. The inspection shows which of them are causing the leak, movement or damage.",
      ],
    },
    {
      uuid: `faq-${location.slug}-5`,
      question: `How do I request a chimney repair quote in ${location.name}?`,
      answers: [
        `Contact us with your ${location.name} address and a short description of the problem. Photos help. We'll arrange a visit to confirm the condition and the repair.`,
      ],
    },
  ];

  const pageUrl = `/calgary/chimney-repair/${location.slug}/`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Chimney Repair in ${location.name}`,
    description: location.metadataDescription,
    url: `${siteConfig.url}${pageUrl}`,
    areaServed: {
      "@type": "Place",
      name: `${location.name}, Alberta`,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      telephone: siteConfig.telephone,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />

      <PageTitle
        title={`Chimney Repair in ${location.name}`}
        homeText="Chimney Repair"
        homeUrl="/calgary/chimney-repair/"
      />

      <ServiceDetailsContent
        mainImage={location.images.main}
        mainImageFocus={location.images.mainFocus}
        title={`Chimney Repair in ${location.name}, Alberta`}
        description={location.description}
        paragraphs={location.paragraphs}
        benefits={location.benefits}
        extraParagraphs={location.extraParagraphs}
      />

      <ProcessSteps
        title={`Our ${location.name} Chimney Repair Process`}
        steps={processSteps}
      />

      <ServiceGallery items={chimneyOverviewItems} />

      <WhyChooseUs
        image={location.images.whyChoose}
        title={location.whyChooseTitle}
        description={location.whyChooseDescription}
        listItems={location.whyChooseItems}
        buttonText="Request an Assessment"
        buttonLink="/contact-us/"
      />

      <FaqSection
        faqs={faqs}
        title={`Chimney Repair FAQs for ${location.name}`}
      />

      <div className="ptb-100">
        <ContactSection
          image={location.images.contact}
          title={`Request a Chimney Repair Estimate in ${location.name}`}
          subtitle="REQUEST A QUOTE"
          description={`Seeing cracks or a leak? Send us your ${location.name} address and a few photos, and we'll arrange an inspection. Call 1-403-619-8727 or fill in the form.`}
        />
      </div>

      <Footer />
    </>
  );
}

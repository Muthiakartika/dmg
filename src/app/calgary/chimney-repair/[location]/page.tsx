import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WhyChooseUs from "@/components/Services/WhyChooseUs";
import TestimonialSlider from "@/components/Sections/TestimonialSlider";
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
    text: "We assess the masonry, cap/crown, joints, spalling brick, and visible damage.",
  },
  {
    title: "Plan The Repair",
    text: "The repair scope is matched to the structure and source of damage.",
  },
  {
    title: "Restore The Masonry",
    text: "Spalling brick is replaced and failed stone and mortar are restored.",
  },
  {
    title: "Finish & Protect",
    text: "The completed work is detailed for strength and weather resistance.",
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
        "Cracked or missing mortar, loose brick or stone, spalling brick faces that are flaking or crumbling, white staining, pieces of masonry near the roof, water marks around the fireplace, and a visibly cracked cap/crown are all reasons to arrange an inspection. Early assessment can often keep the repair more focused.",
      ],
    },
    {
      uuid: `faq-${location.slug}-2`,
      question: `How does local weather affect chimneys in ${location.name}?`,
      answers: [
        `${location.climateContext} Once water enters a crack or open joint, freezing can expand the affected area and speed up deterioration. Sound mortar and cap/crown details help reduce that exposure.`,
      ],
    },
    {
      uuid: `faq-${location.slug}-3`,
      question: "Can you repair part of a chimney, or does it need rebuilding?",
      answers: [
        "Many chimneys can be repaired selectively when the surrounding masonry remains stable. Repointing joints, replacing individual units, or rebuilding only the upper courses may be sufficient. A broader rebuild is recommended when movement or deterioration has affected the chimney's overall stability.",
      ],
    },
    {
      uuid: `faq-${location.slug}-4`,
      question: "What chimney components can DMG Masonry repair?",
      answers: [
        "Our masonry repair scope can include brick and stone units, replacement of spalling brick, mortar joints, the chimney cap/crown, and unstable sections of the stack. An inspection determines which components are contributing to leaks, movement, or visible deterioration.",
      ],
    },
    {
      uuid: `faq-${location.slug}-5`,
      question: `How do I request a chimney repair quote in ${location.name}?`,
      answers: [
        `Contact DMG Masonry with your ${location.name} property details and a description of the concern. Photos are helpful for initial context, and an on-site assessment can then confirm the condition and appropriate repair scope.`,
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
        title={`Chimney Repair Services in ${location.name}`}
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

      <TestimonialSlider
        titleNormal="What Clients Say"
        titleHighlight="About Our Chimney Repair"
        feedbacks={chimneyFeedbacks}
      />

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
          title={`Request Chimney Repair in ${location.name}`}
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}

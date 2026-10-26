"use client";

import JsonLd from "@/components/UI/JsonLd";
import { renderInline } from "@/lib/richText";
import { faqPageSchema } from "@/lib/schema";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export interface FaqItem {
  /** Stable id; the accordion derives its element ids from it. */
  uuid: string;
  question: string;
  answers: string[];
}

interface FaqSectionProps {
  faqs: readonly FaqItem[];
  title: string;
  subtitle?: string;
}

/**
 * FAQ accordion with the first question open; each question is an <h3>.
 * Answers may hold `[anchor](/path/)` links. The same text is published as
 * FAQPage structured data.
 */
export default function FaqSection({
  faqs,
  title,
  subtitle = "FAQ",
}: FaqSectionProps) {
  return (
    <div className="faq-area ptb-100">
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="container">
        <div className="section-title-wrap">
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>

        <Accordion
          preExpanded={faqs.length > 0 ? [faqs[0].uuid] : []}
          className="faq-accordion"
        >
          {faqs.map((faq) => (
            <AccordionItem uuid={faq.uuid} key={faq.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h3 className="faq-question">{faq.question}</h3>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {faq.answers.map((answer, index) => (
                  <p key={index}>{renderInline(answer)}</p>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

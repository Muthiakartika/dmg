"use client";

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

/** FAQ accordion with the first question open. */
export default function FaqSection({ faqs, title, subtitle = "FAQ" }: FaqSectionProps) {
  return (
    <div className="faq-area ptb-100">
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
                <AccordionItemButton>{faq.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {faq.answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

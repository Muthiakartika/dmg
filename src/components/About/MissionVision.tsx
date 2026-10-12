"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

/** "Our Mission / Our Vision" accordion with the mission open. */
export default function MissionVision() {
  return (
    <Accordion preExpanded={["a"]} className="our-mission-and-vision-accordion">
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton>Our Mission</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            We want to do masonry work that&apos;s solid, practical and finished cleanly, using
            proven methods and experienced hands, and to deliver what our clients need.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
        <AccordionItemHeading>
          <AccordionItemButton>Our Vision</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            We want to keep building our reputation in Calgary through consistent work and honest
            communication. Good construction should add lasting value to a property.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

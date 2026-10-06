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
            Our mission is to provide masonry work that combines durability, functionality, and
            clean finishing through dependable construction methods and experienced workmanship.
            We aim to deliver projects that meet our clients needs while maintaining long-term
            quality and structural reliability.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
        <AccordionItemHeading>
          <AccordionItemButton>Our Vision</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Our vision is to continue building a strong reputation in Calgary through consistent
            workmanship, honest communication, and masonry solutions designed to perform well for
            years to come. We believe quality construction should add lasting value to every
            property we work on.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

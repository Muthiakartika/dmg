"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import ThemeLogo from "./ThemeLogo";
import { MobileServicesNavigation } from "./ServicesNavigation";
import { isActiveLink, primaryLinks } from "./navLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  currentRoute: string;
}

/** Slide-in menu shown below the lg breakpoint. */
export default function MobileMenu({ isOpen, onToggle, currentRoute }: MobileMenuProps) {
  const [home, about, blogs, contactUs] = primaryLinks;

  const renderLink = (link: (typeof primaryLinks)[number]) => (
    <Link
      href={link.href}
      className={`nav-link ${isActiveLink(link, currentRoute) ? "active" : ""}`}
    >
      {link.label}
    </Link>
  );

  return (
    <div className={`modal mobile-menu-modal ${isOpen ? "show" : ""}`}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between">
            <div className="navbar-brand-inner">
              <span className="navbar-brand-mark">
                <ThemeLogo width={220} height={64} />
              </span>
            </div>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onToggle}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="modal-body">
            <Accordion allowZeroExpanded>
              {renderLink(home)}
              {renderLink(about)}

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>Services</AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <ul className="menu-list">
                    <MobileServicesNavigation currentRoute={currentRoute} />
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              {renderLink(blogs)}
              {renderLink(contactUs)}
            </Accordion>

            <div className="others-option d-lg-none mt-4">
              <div className="option-item">
                <Link href="/request-quote" className="default-btn">
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="close-overlay" onClick={onToggle}></div>
    </div>
  );
}

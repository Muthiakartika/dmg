"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";
import NavSearch from "./NavSearch";
import ThemeLogo from "./ThemeLogo";
import ThemeToggle from "./ThemeToggle";
import { DesktopServicesNavigation } from "./ServicesNavigation";
import { isActiveLink, primaryLinks } from "./navLinks";

interface NavbarProps {
  /** Inner pages use the alternate colour scheme (`navbar-with-different-color`). */
  variant?: "home" | "inner";
}

const STICKY_OFFSET = 100;

export default function Navbar({ variant = "inner" }: NavbarProps) {
  const currentRoute = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Pin the navbar once the page has scrolled past the header.
  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle("sticky", window.scrollY > STICKY_OFFSET);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const [home, about, blogs, contactUs] = primaryLinks;

  const renderItem = (link: (typeof primaryLinks)[number]) => (
    <li className="nav-item">
      <Link
        href={link.href}
        className={`nav-link ${isActiveLink(link, currentRoute) ? "active" : ""}`}
      >
        {link.label}
      </Link>
    </li>
  );

  const navClassName =
    variant === "inner"
      ? "navbar navbar-expand-lg navbar-with-different-color"
      : "navbar navbar-expand-lg";

  return (
    <>
      <nav className={navClassName} id="navbar" ref={navRef}>
        <div className="container-fluid position-relative">
          <Link className="navbar-brand" href="/">
            <span className="navbar-brand-inner">
              <span className="navbar-brand-mark">
                <ThemeLogo width={220} height={64} priority />
              </span>
            </span>
          </Link>

          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {renderItem(home)}
              {renderItem(about)}

              <li className="nav-item">
                <Link className="nav-link dropdown-toggle" href="/services/">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <DesktopServicesNavigation currentRoute={currentRoute} />
                </ul>
              </li>

              {renderItem(blogs)}
              {renderItem(contactUs)}
            </ul>
          </div>

          <div className="others-option d-flex align-items-center">
            <ThemeToggle />
            <NavSearch />
            <div className="option-item">
              <Link href="/request-quote" className="default-btn">
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        currentRoute={currentRoute}
      />
    </>
  );
}

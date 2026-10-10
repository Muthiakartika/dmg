"use client";

import { useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import SocialIcons from "@/components/UI/SocialIcons";
import { contact } from "@/lib/site";
import { heroImage, heroImageMobile } from "./heroImages";

import shapeImg from "../../../public/images/main-banner/shape.png";
import arrowRightIcon from "../../../public/images/main-banner/arrow-right.svg";

// The lightbox renders nothing until opened, so it is split into its own chunk
// and loaded after hydration instead of with the page's initial JavaScript.
const FsLightbox = dynamic(() => import("fslightbox-react"), { ssr: false });

// The hero copy fades up with a CSS animation (.hero-reveal in hero.css), not
// AOS: AOS keeps [data-aos] at opacity 0 until its script runs after
// hydration, which on a slow phone left the hero without its text for seconds.
const revealDelay = (delay: number): CSSProperties => ({ animationDelay: `${delay}ms` });

// The stylesheet picks one of these per breakpoint (see heroImages.ts), so
// phones never download the desktop file.
const heroImageVars = {
  "--hero-image": `url(${heroImage.src})`,
  "--hero-image-mobile": `url(${heroImageMobile.src})`,
} as CSSProperties;

export default function HeroBanner() {
  // FsLightbox opens whenever the `toggler` prop changes.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox toggler={toggler} sources={["/video/video.mp4"]} types={["video"]} />

      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="main-banner-content">
            {/* Styled like a heading but deliberately not one: the page h1 is the
                "Professional Masonry Services in Calgary" heading in HomeAbout. */}
            <div className="banner-title hero-reveal" style={revealDelay(100)}>
              A Legacy of Timeless Masonry <span>Craftsmanship & Quality</span>
            </div>
            <p className="hero-reveal" style={revealDelay(200)}>
              Welcome to DMG Masonry, where timeless craftsmanship and enduring materials define
              every project. With durability at the core, our work stands as a lasting legacy.
            </p>
            <div className="banner-btn hero-reveal" style={revealDelay(300)}>
              <Link href="/contact-us" className="default-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* LCP element: no AOS fade so it paints immediately; uses real WebP */}
        <div className="main-banner-image" style={heroImageVars}></div>

        <div className="main-banner-wrap-shape">
          <Image src={shapeImg} alt="Shape" width={502} height={287} />
        </div>

        <div className="main-banner-video">
          <svg
            viewBox="0 0 100 100"
            width="182"
            height="182"
            style={{ animation: "rotateme 10s linear infinite" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="var(--headingColor)" fontSize="11.5" fontWeight="500" letterSpacing="0.8">
              <textPath href="#circlePath" startOffset="0%">
                *Best Masonry Contractors in Calgary
              </textPath>
            </text>
          </svg>

          <div onClick={() => setToggler(!toggler)} className="video-btn">
            <i className="ri-play-fill"></i>
          </div>
        </div>

        <SocialIcons className="main-banner-social" />

        <div className="main-banner-arrow">
          <Link href="/contact-us">
            <Image src={arrowRightIcon} alt="arrow right" width={24} height={24} />
          </Link>
        </div>

        <ul className="main-banner-info">
          <li>
            <span>CALL:</span>
            <a href={contact.phoneHref}>{contact.phoneLabel}</a>
          </li>
          <li>
            <span>MAIL:</span>
            <a href={contact.emailHref}>{contact.email}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

import Image from "next/image";

import ArrowList from "@/components/UI/ArrowList";
import MissionVision from "./MissionVision";

import aboutImg from "../../../public/images/about/new/1.webp";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import aboutThumb from "../../../public/images/about/new/2.webp";
import textShape from "../../../public/images/about/archi-text2.png";

const strengths = [
  "Durable Masonry & Hardscape Solutions",
  "Skilled Workmanship & Reliable Construction",
  <>{" "}Custom Outdoor Spaces Built Around Your Needs company</>,
  "Quality-Focused Planning & Execution",
];

/** Intro, photos, mission/vision and company overview of /about-us. */
export default function AboutContent() {
  return (
    <div className="about-area pt-100">
      <div className="container">
        <div className="about-three-title">
          <span>ABOUT US</span>
          <h2>
            Built on <b>Quality Workmanship</b> and Long-Lasting Masonry Solutions
          </h2>
        </div>

        <div className="about-image-three">
          {/* First thing under the breadcrumb, so it is this page's LCP.
              Cropped taller on phones; see .about-banner in about.css. */}
          <Image
            src={aboutImg}
            alt="image"
            width={1320}
            height={430}
            priority
            className="about-banner"
          />
        </div>

        <div className="about-three-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-three-left-content">
                <p className="mb-0">
                  At DMG Masonry, we create durable and visually timeless masonry and hardscape
                  spaces for residential and commercial properties in Calgary, combining quality
                  workmanship, practical design, and long-lasting performance.
                </p>

                <ArrowList items={strengths} icon={arrowIcon} />

                <div className="about-image-wrap">
                  <Image src={aboutThumb} alt="image" width={1052} height={1120} />
                  {/* Kept for the existing CSS; the video button it held was removed. */}
                  <div className="wrap-video"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-three-right-content">
                <MissionVision />

                <div className="about-wrap-content">
                  <h2>
                    Quality Masonry Work Built Through Experience, Planning, and Precision
                  </h2>
                  <p>
                    DMG Masonry provides residential and commercial masonry services throughout
                    Calgary, including masonry repair, retaining walls, patio stone installation,
                    stone veneer, outdoor kitchens, fireplaces, pizza ovens, and custom hardscape
                    construction. Every project is completed with a focus on durability, proper
                    construction methods, and long-term performance.
                  </p>
                  <p>
                    We approach each project by understanding the property, project goals, and
                    practical requirements before construction begins. From repairs and
                    restorations to custom outdoor features, our team works carefully to ensure
                    every installation remains functional, structurally sound, and visually
                    consistent over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-wrap-shape">
        <Image src={textShape} alt="image" width={768} height={140} />
      </div>
    </div>
  );
}

import Image from "next/image";

import ArrowList from "@/components/UI/ArrowList";
import MissionVision from "./MissionVision";

import aboutImg from "../../../public/images/about/new/1.webp";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import aboutThumb from "../../../public/images/about/new/2.webp";
import textShape from "../../../public/images/about/archi-text2.png";

const strengths = [
  "Durable masonry and hardscape",
  "Skilled workmanship",
  "Custom outdoor spaces built around you",
  "Careful planning",
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
                  DMG Masonry is a Calgary masonry contractor with more than 35 years of
                  experience. We repair brick and stone, and we build fireplaces, fire pits, pizza
                  ovens, outdoor kitchens, patios and retaining walls for homes and commercial
                  properties.
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
                    We provide masonry for homes and commercial properties across Calgary: masonry
                    repair, retaining walls, patio stone installation, stone veneer, outdoor
                    kitchens, fireplaces, pizza ovens and custom hardscape.
                  </p>
                  <p>
                    We start by understanding your property, what you want and what&apos;s
                    practical, before any building begins. Whether it&apos;s a repair, a
                    restoration or a custom outdoor feature, we work carefully so the result is
                    solid and looks right.
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

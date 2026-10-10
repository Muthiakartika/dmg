import Image from "next/image";
import Link from "next/link";

import ArrowList from "@/components/UI/ArrowList";
import { fadeUp } from "@/lib/aos";

import featureImg from "../../../public/images/main-banner/home/6.webp";
import featureBgImg from "../../../public/images/main-banner/home/7.webp";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const features = [
  "Outdoor masonry designed for long-term use",
  "Timeless masonry that complements your property",
  "Practical layouts with clean professional finishing",
];

/** "Form & Function" block with the 35+ years badge. */
export default function CoreFeatures() {
  return (
    <div className="features-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="features-content" {...fadeUp(100)}>
              <h2>
                Masonry Built for <span>Calgary&apos;s Climate</span>
              </h2>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-md-5">
                  <div className="inner-box">
                    <div className="title">
                      <div className="counter">35+</div>
                      <span>
                        YEARS OF <b>EXPERIENCE</b>
                      </span>
                    </div>
                    <div className="wrap">
                      <Image
                        src={featureImg}
                        alt="Brick masonry outdoor fireplace built by DMG Masonry in Calgary"
                        width={161}
                        height={231}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-7">
                  <div className="inner-content">
                    <p>
                      DMG Masonry creates outdoor spaces that combine everyday function with
                      timeless masonry design, helping your property maintain its strength and
                      appearance for years to come.
                    </p>

                    <ArrowList items={features} icon={arrowIcon} />

                    <div className="features-btn">
                      <Link href="/services" className="default-btn">
                        What We Offer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div
              className="features-image"
              {...fadeUp(200)}
              style={{ backgroundImage: `url(${featureBgImg.src})` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="features-shape">
        <Image src={architecturalShape} alt="Architectural Shape" width={477} height={562} />
      </div>
    </div>
  );
}

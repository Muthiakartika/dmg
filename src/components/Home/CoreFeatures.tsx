import Image from "next/image";
import Link from "next/link";

import ArrowList from "@/components/UI/ArrowList";
import { fadeUp } from "@/lib/aos";

import featureImg from "../../../public/images/main-banner/home/6.webp";
import featureBgImg from "../../../public/images/main-banner/home/7.webp";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const features = [
  "Built for outdoor use",
  "Matches your property",
  "Practical layouts, clean finish",
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
                        alt="Red brick outdoor fireplace with an arched firebox"
                        width={161}
                        height={231}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-7">
                  <div className="inner-content">
                    <p>
                      Calgary winters are hard on masonry. Water gets into brick and mortar,
                      freezes, and slowly breaks it apart. We build and repair with that in mind,
                      so your masonry holds up through the freeze-thaw cycles year after year.
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
        <Image src={architecturalShape} alt="" width={477} height={562} />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import ArrowList from "@/components/UI/ArrowList";
import { fadeUp } from "@/lib/aos";

import arrowShape from "../../../public/images/about/arrow-shape.png";
import aboutBgImg from "../../../public/images/main-banner/home/2.webp";
import aboutImg from "../../../public/images/main-banner/home/3.webp";
import archiTextImg from "../../../public/images/about/archi-text.png";
import arrowIcon from "../../../public/images/about/arrow.svg";

const highlights = [
  "Residential and commercial masonry projects",
  "Timeless masonry built for long-term durability",
  "Experienced craftsmanship and detailed workmanship",
  "Custom masonry solutions for every project",
];

/** About block under the home hero. Carries the page's h1 (wording set by the
 *  client) because the hero tagline above is not a heading. */
export default function HomeAbout() {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div
              className="about-image-one"
              style={{ backgroundImage: `url(${aboutBgImg.src})` }}
              {...fadeUp(100)}
            >
              <div className="arrow-shape">
                <Image src={arrowShape} alt="Shape" width={182} height={128} />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="about-one-content" {...fadeUp(200)}>
              <div className="title">
                <h1>
                  Masonry<span> Contractor Service</span> Calgary
                </h1>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="inner-image">
                    <Image
                      src={aboutImg}
                      alt="Residential masonry construction with concrete foundation walls by DMG Masonry in Calgary"
                      width={690}
                      height={590}
                    />
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="inner-content">
                    <p>
                      We provide professional masonry services in Calgary for residential and
                      commercial projects, combining timeless craftsmanship with durable materials
                      and quality workmanship built to last.
                    </p>

                    <ArrowList items={highlights} icon={arrowIcon} />

                    <div className="about-btn">
                      <Link href="/about-us" className="default-btn">
                        Get to Know Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-text-wrap">
        {/* Decorative blueprint lettering — empty alt so it's skipped by screen readers */}
        <Image src={archiTextImg} alt="" width={766} height={157} />
      </div>
    </div>
  );
}

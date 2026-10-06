import Image from "next/image";

import ArrowList from "@/components/UI/ArrowList";
import LazyVideo from "./LazyVideo";

import arrowIcon from "../../../public/images/services-details/arrow.svg";
import sidebarImg from "../../../public/images/main-banner/home/9.webp";

// A 540p cut of the banner video. This box is only ~720px wide (col-lg-8), so
// the 720p /video/video.mp4 the lightboxes play was twice the resolution needed
// here — the smaller file halves the bytes with no visible difference at this
// size. The poster is the video's own opening frame, so nothing shifts visually
// when playback starts.
const videoUrl = "/video/video-loop.mp4";
const posterUrl = "/images/video-poster.webp";

/** "What Works and What to Consider" block with the looping video. */
export default function VideoSection() {
  return (
    <div className="services-details-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <div className="title">
                <span>SERVICE</span>
                <h2>What Works and What to Consider in Masonry Services</h2>
                <p>
                  At DMG Masonry, we believe good masonry work starts with clear planning and the
                  right expectations. We help clients understand where masonry performs best so
                  every project is built to last and completed efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-left ">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <LazyVideo src={videoUrl} poster={posterUrl} />

              <p style={{ marginTop: "30px" }}>
                We works with masonry because it provides long-term durability, reliable
                structural strength, and timeless performance across residential and commercial
                projects. Its natural resistance to weather, moisture, fire, and everyday wear
                makes masonry a dependable solution designed to last for years.
              </p>

              <p>
                Masonry also offers lasting visual appeal and practical long-term value for a
                property. With proper construction, masonry structures typically require less
                maintenance, improve energy efficiency through natural thermal mass, and maintain
                their strength and appearance over time. Its durability, pest resistance, and long
                lifespan continue to make masonry a trusted choice for timeless construction.
              </p>

              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={["Weather Resistance", "Timeless Durability"]} icon={arrowIcon} />
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={["Energy Efficiency", "Low Maintenance"]} icon={arrowIcon} />
                </div>
              </div>

              <p>
                Proper masonry planning starts with careful coordination, material preparation,
                and experienced project management. Because masonry materials require precise
                handling and installation, our team plans each stage carefully to support safe
                workflows, efficient construction, and lasting structural performance.
              </p>

              <p>
                At DMG Masonry, we focus on practical planning that supports both durability and
                long-term project quality. From foundation preparation to material selection and
                scheduling, every detail is considered to help masonry structures perform reliably
                over time.
              </p>
              <p>
                Timeless masonry work requires more than durable materials alone. Through clear
                communication, realistic timelines, and consistent on-site supervision, our team
                carefully manages every stage of the project to maintain quality, efficiency, and
                long-term performance. By combining practical planning with experienced
                workmanship, we help create masonry projects designed to remain strong,
                functional, and visually lasting for years to come.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
            <div className="service-details-sidebar-image">
              <Image
                src={sidebarImg}
                alt="sidebar"
                width={400}
                height={800}
                style={{ width: "100%", height: "550px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

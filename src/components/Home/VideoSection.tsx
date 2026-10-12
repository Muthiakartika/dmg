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

const choosingTips = [
  {
    lead: "They look at the job first.",
    text: "A good contractor visits the property before quoting, checks the damage or the site, and asks what you want.",
  },
  {
    lead: "You get a clear quote.",
    text: "It should say what's included, so there are no surprises later.",
  },
  {
    lead: "Repairs blend in.",
    text: "New brick and mortar should match what's already there.",
  },
  {
    lead: "They keep you updated and clean up.",
    text: "The work shouldn't leave you chasing answers or a mess.",
  },
  {
    lead: "They tell you what can wait.",
    text: "Not every crack needs fixing this year.",
  },
];

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
                <h2>How to Choose a Masonry Company in Calgary</h2>
                <p>Choosing a masonry company is easier when you know what to look for:</p>
                <ul className="mb-0">
                  {choosingTips.map((tip) => (
                    <li key={tip.lead}>
                      <strong>{tip.lead}</strong> {tip.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-left ">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <LazyVideo src={videoUrl} poster={posterUrl} />

              <p style={{ marginTop: "30px" }}>
                That&apos;s how we work. We plan the job before we start: the site, the materials
                and the schedule. Then we keep you updated until it&apos;s finished.
              </p>

              <p>
                Why masonry in the first place? Brick and stone stand up to weather, moisture and
                fire, need little maintenance, and hold heat well, which helps with energy use.
              </p>

              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={["Weather Resistance", "Low Maintenance"]} icon={arrowIcon} />
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={["Fire Resistance", "Holds Heat"]} icon={arrowIcon} />
                </div>
              </div>
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

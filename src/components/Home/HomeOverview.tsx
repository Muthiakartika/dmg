import Image from "next/image";
import Link from "next/link";

import { fadeUp } from "@/lib/aos";

import outdoorKitchenImg from "../../../public/images/main-banner/home/4.webp";
import hardscapeImg from "../../../public/images/main-banner/home/5.webp";

/** Full-width pair of photo cards on the home page. */
export default function HomeOverview() {
  return (
    <div className="overview-area">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 pe-0" {...fadeUp(100)}>
            <div className="overview-card">
              <div className="image">
                <Image
                  src={outdoorKitchenImg}
                  alt="Outdoor kitchen with a built-in grill, tiled counter and stone base"
                  width={1320}
                  height={780}
                />
              </div>
              <h3>
                <Link href="/outdoor-kitchen-contractor/">
                  Outdoor Kitchen <span>Contractor</span>
                </Link>
              </h3>
              <p>Built-in BBQs, counters and pizza ovens for your patio.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 ps-0" {...fadeUp(200)}>
            <div className="overview-card">
              <div className="image">
                <Image
                  src={hardscapeImg}
                  alt="Mason cutting and laying concrete blocks with a power saw nearby"
                  width={1320}
                  height={780}
                />
              </div>
              <h3>
                <Link href="/hardscape-contractor/">
                  Hardscape <span>Contractor</span>
                </Link>
              </h3>
              <p>Patios, retaining walls and pavers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

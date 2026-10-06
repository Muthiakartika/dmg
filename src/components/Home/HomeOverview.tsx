import Image from "next/image";

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
                  alt="Mason laying concrete blocks with mortar for an outdoor kitchen build in Calgary"
                  width={1320}
                  height={780}
                />
              </div>
              <h3>
                Outdor Kitchen <span>Contractor</span>
              </h3>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 ps-0" {...fadeUp(200)}>
            <div className="overview-card">
              <div className="image">
                <Image
                  src={hardscapeImg}
                  alt="Concrete block wall construction for a hardscape project in Calgary"
                  width={1320}
                  height={780}
                />
              </div>
              <h3>
                Hardscape <span>Contractor</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import shapeImg from "../../../public/images/box-style-shape.png";

/** Large statement band on /about-us. */
export default function QuoteText() {
  return (
    <div className="box-style-area">
      <div className="container-fluid">
        <div className="box-style-inner">
          <p>
            We Help Every Client Create Functional and Long-Lasting Masonry Spaces Designed for
            Everyday Living
          </p>
          <div className="wrap-shape">
            <Image src={shapeImg} alt="image" width={260} height={276} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import errorImg from "../../public/images/error.png";

export default function NotFound() {
  return (
    <div className="not-found-area ptb-100">
      <div className="container">
        <div className="not-found-content text-center">
          <Image src={errorImg} alt="error-image" width={250} height={250} />

          <div style={{ maxWidth: "500px", margin: "0 auto 15px" }}>
            <h3>Oops! That page can&apos;t be found</h3>
            <p>
              The page you are looking for may have moved or no longer exists. Head back to
              the home page to explore our masonry services.
            </p>
          </div>

          <Link href="/" className="default-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

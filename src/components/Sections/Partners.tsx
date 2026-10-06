import Image from "next/image";

const partnerLogos = [1, 2, 3, 4, 5, 6].map((n) => `/images/partner/partner${n}.png`);

/** Row of partner logos. */
export default function Partners() {
  return (
    <div className="partner-area pb-75">
      <div className="container-fluid">
        <div className="row g-0 justify-content-center align-items-center">
          {partnerLogos.map((logo) => (
            <div className="col-lg-2 col-md-3 col-6 col-sm-4" key={logo}>
              <div className="partner-item text-center">
                <Image src={logo} alt="partner" width={100} height={26} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

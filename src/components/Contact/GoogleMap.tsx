const mapSrc =
  "https://www.google.com/maps?q=1111%2046%20Ave%20SE%2C%20Calgary%2C%20AB%20T2G%202A6%2C%20Canada&output=embed";

/** Embedded Google Map of the office (lazy-loaded iframe). */
export default function GoogleMap() {
  return (
    <div className="map-area">
      <div className="container">
        <iframe
          src={mapSrc}
          title="DMG Masonry location on Google Maps"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

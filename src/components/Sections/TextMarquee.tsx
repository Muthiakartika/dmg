const phrases = ["Professional Masonry Contractors", "Custom Masonry Services in Calgary"];

// Three copies of the pair keep the CSS marquee seamless on wide screens.
const repeatedPhrases = [...phrases, ...phrases, ...phrases];

/** Scrolling outlined text band (animation lives in style.css). */
export default function TextMarquee() {
  return (
    <div className="animation-view-area pb-100">
      <div className="container-fluid">
        <div className="animation-view-content">
          <div className="animation-view-text">
            {repeatedPhrases.map((phrase, index) => (
              <span key={index}>{phrase}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

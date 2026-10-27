// Line widths in px. Each outlined text picks one in CSS by its font size,
// e.g. `filter: url(#text-outline-1-5)`: 2.5 for the 50-70px hero, 2 for the
// 50-60px marquee, 1.5 for 35-40px headings, 1 for 25px text on phones.
const widths = [1, 1.5, 2, 2.5];

/**
 * SVG filters that draw outlined text: a line around the outside of each
 * letter, in the text's own colour, with the inside left clear.
 * -webkit-text-stroke also traces where Jost's strokes overlap inside a letter
 * ("ft", "&", "y"), which shows once the line is thicker than a hairline.
 *
 * Rendered once in the root layout. Hidden by size, not display: none, which
 * would switch the filters off.
 */
export default function TextOutlineFilters() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      {widths.map((width) => (
        <filter
          key={width}
          id={`text-outline-${String(width).replace(".", "-")}`}
          colorInterpolationFilters="sRGB"
        >
          <feMorphology in="SourceGraphic" operator="dilate" radius={width} result="grown" />
          <feComposite in="grown" in2="SourceAlpha" operator="out" />
        </filter>
      ))}
    </svg>
  );
}

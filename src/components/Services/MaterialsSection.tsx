import { fadeUp, staggerDelay } from "@/lib/aos";

export interface MaterialItem {
  // Optional: the icon font is subsetted to the 7 glyphs the site already
  // uses, so a card with no matching glyph renders without an icon rather than
  // with an empty box. See src/styles/base/icons.css.
  icon?: string;
  title: string;
  text: string;
}

interface MaterialsSectionProps {
  subtitle?: string;
  title: string;
  description?: string;
  items: readonly MaterialItem[];
}

/** Two-column card grid for materials, options, damage types, etc. */
export default function MaterialsSection({
  subtitle = "MATERIALS",
  title,
  description,
  items,
}: MaterialsSectionProps) {
  return (
    // No pt-*: the section before it (ServiceDetailsContent) already ends in pb-100.
    <div className="services-wrap-area without-bg-color materials-area pb-75">
      <div className="container">
        {/* The vertical subtitle and the text are flex siblings (see
            services.css) so a long label such as "MAINTENANCE & COST" stays in
            one column in the left gutter instead of wrapping into two columns
            and running underneath the heading. */}
        <div className="section-title-wrap">
          <span>{subtitle}</span>
          <div className="title-text">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-lg-6 col-md-6"
              {...fadeUp(staggerDelay(index))}
              key={item.title}
            >
              <div className="services-item">
                {item.icon && (
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import ContentSections, { type ContentSection } from "./ContentSections";

interface ArticleSectionsProps {
  sections: readonly ContentSection[];
}

/**
 * Article-style h2 sections placed between full-width page sections (e.g. right
 * after a MaterialsSection), in the same column width and type as the main
 * service article.
 */
export default function ArticleSections({ sections }: ArticleSectionsProps) {
  return (
    // No top or bottom padding: the MaterialsSection before it ends in pb-75 and
    // the WhyChooseUs after it starts with pt-100.
    <div className="services-details-area article-sections-area">
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <ContentSections sections={sections} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

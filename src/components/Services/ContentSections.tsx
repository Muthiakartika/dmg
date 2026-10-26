import { renderInline } from "@/lib/richText";

/** One block of copy inside a ContentSection. Strings may hold inline links and **bold**. */
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  /** An h3 with the paragraph that answers it. */
  | { type: "h3"; title: string; text: string };

export interface ContentSection {
  heading: string;
  blocks: readonly ContentBlock[];
}

interface ContentSectionsProps {
  sections: readonly ContentSection[];
}

/** Extra h2 sections of a service article, rendered in the article's own column. */
export default function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <>
      {sections.map((section) => (
        <section className="body-section" key={section.heading}>
          <h2 className="body-question">{section.heading}</h2>

          {section.blocks.map((block, index) => {
            if (block.type === "h3") {
              return (
                <div className="body-subsection" key={index}>
                  <h3>{block.title}</h3>
                  <p>{renderInline(block.text)}</p>
                </div>
              );
            }

            if (block.type === "list") {
              return (
                <ul className="body-bullets" key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            }

            return <p key={index}>{renderInline(block.text)}</p>;
          })}
        </section>
      ))}
    </>
  );
}

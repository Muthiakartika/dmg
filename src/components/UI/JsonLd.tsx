interface JsonLdProps {
  /** One schema.org node, or several (each becomes its own script tag). */
  data: object | readonly object[];
}

/** Serialises schema.org data into <script type="application/ld+json"> tags. */
export default function JsonLd({ data }: JsonLdProps) {
  const nodes = (Array.isArray(data) ? data : [data]) as readonly object[];

  return (
    <>
      {nodes.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          // "<" is escaped so copy containing "</script>" cannot close the tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(node).replace(/</g, "\u003c"),
          }}
        />
      ))}
    </>
  );
}

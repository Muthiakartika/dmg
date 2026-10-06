import Link from "next/link";

interface PageTitleProps {
  title: string;
  homeText: string;
  homeUrl: string;
  /** Render the title as the page's h1 (for pages with no other h1). */
  titleAsHeading?: boolean;
}

/** Breadcrumb banner shown under the navbar on every inner page. */
export default function PageTitle({
  title,
  homeText,
  homeUrl,
  titleAsHeading = false,
}: PageTitleProps) {
  return (
    <div className="page-banner-area">
      <div className="container-fluid">
        <div className="page-banner-inner">
          <ul className="list text-uppercase">
            <li>
              <Link href={homeUrl} className="theme-heading-color">
                {homeText}
              </Link>
            </li>
            <li>
              {titleAsHeading ? (
                <h1
                  style={{
                    color: "inherit",
                    font: "inherit",
                    margin: 0,
                    textTransform: "inherit",
                  }}
                >
                  {title}
                </h1>
              ) : (
                title
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

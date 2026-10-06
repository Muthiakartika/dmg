import Link from "next/link";

import NewsletterForm from "./NewsletterForm";
import ThemeLogo from "./ThemeLogo";
import { fadeUp } from "@/lib/aos";
import { services } from "@/lib/services";
import { contact, socialLinks } from "@/lib/site";

const footerServices = [
  ...services,
  { id: "brick-repair", title: "Brick Repair", link: "/calgary/brick-repair" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand-column" {...fadeUp(100)}>
              <Link href="/" className="footer-logo" aria-label="DMG Masonry Home">
                <ThemeLogo width={160} height={52} />
              </Link>

              <div className="footer-contact">
                <h3>D.M.G Masonry LTD</h3>
                <p>
                  1111 - 46 Ave S.E., Calgary,
                  <br />
                  Alberta T2G 2A5
                </p>
                <a href={contact.emailHref}>{contact.email}</a>
                <a href={contact.phoneHref} className="footer-phone">
                  {`Call us: ${contact.phoneLabel}`}
                </a>
              </div>
            </div>

            <div className="footer-links-column" {...fadeUp(150)}>
              <h3>Follow Us</h3>

              <ul className="footer-links-list">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <span className="footer-link-arrow">&rarr;</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column" {...fadeUp(200)}>
              <h3>Services</h3>

              <ul className="footer-links-list footer-links-list-plain footer-services-list">
                {footerServices.map((service) => (
                  <li key={service.id}>
                    <Link href={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-newsletter-column" {...fadeUp(250)}>
              <h3>Subscribe Newsletter</h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              &copy; <span>DMG Masonry</span>. Crafted spaces, built to last.
            </p>
            <ul className="footer-bottom-links">
              <li>
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import SocialIcons from "@/components/UI/SocialIcons";
import { contact } from "@/lib/site";

/** Address / phone / socials column shown next to every enquiry form. */
export default function ContactInfo() {
  return (
    <ul className="contact-info-list">
      <li>
        <span>ADDRESS</span>
        {contact.address}
      </li>

      <li>
        <span>CONTACT</span>
        <a href={contact.emailHref}>{contact.email}</a>
        <a href={contact.phoneHref}>{contact.phoneLabel}</a>
      </li>

      <li>
        <span>SOCIAL MEDIA</span>
        <SocialIcons className="social" />
      </li>
    </ul>
  );
}

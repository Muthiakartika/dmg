import { socialLinks } from "@/lib/site";

interface SocialIconsProps {
  /** List class: "main-banner-social" in the hero, "social" in contact info. */
  className: string;
}

/** Facebook / Instagram / WhatsApp icon links. */
export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <ul className={className}>
      {socialLinks.map((social) => (
        <li key={social.id}>
          <a href={social.link} target="_blank">
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { meta } from "@/data/portfolio";

const links = [
  { label: "GitHub", href: meta.github, Icon: FaGithub },
  { label: "LinkedIn", href: meta.linkedin, Icon: FaLinkedin },
  { label: "Gmail", href: `mailto:${meta.emailPersonal}`, Icon: SiGmail },
  { label: "Outlook", href: `mailto:${meta.email}`, Icon: PiMicrosoftOutlookLogoFill },
];

export default function SocialIcons({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="rounded-full p-2 text-brand-700 transition-colors hover:bg-brand-100 hover:text-brand-900"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

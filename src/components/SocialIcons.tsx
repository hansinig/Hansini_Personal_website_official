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

export default function SocialIcons({ large = false }: { large?: boolean }) {
  return (
    <div className={`flex items-center ${large ? "gap-3 sm:gap-4" : "gap-2"}`}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={
            large
              ? "flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-700/30 ring-4 ring-white transition hover:-translate-y-1 hover:bg-brand-900 hover:shadow-xl sm:h-16 sm:w-16"
              : "rounded-full p-2 text-brand-700 transition-colors hover:bg-brand-100 hover:text-brand-900"
          }
        >
          <Icon size={large ? 28 : 18} />
        </a>
      ))}
    </div>
  );
}

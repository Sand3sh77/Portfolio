import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sandesh-subedi-58735b283",
    Icon: FaLinkedin,
    hover: "hover:text-[#0B69C7]",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sand3sh77",
    Icon: FaGithub,
    hover: "hover:text-[#5C6BC0]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sandesh.subedi.3979/",
    Icon: FaFacebook,
    hover: "hover:text-[#1976D2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sand3sh77/",
    Icon: FaInstagram,
    hover: "hover:text-[#EF4C5C]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9779866048224?text=Hi%20there,%20I%27d%20like%20to%20discuss%20a%20project",
    Icon: FaWhatsapp,
    hover: "hover:text-[#4CAF50]",
  },
];

export const SocialLinks = ({
  className,
  iconClassName = "w-[2rem] h-[2rem]",
}: {
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center rounded gap-5 w-full px-10 py-5",
        className
      )}
    >
      {links.map(({ label, href, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon
            className={cn(
              "transition-colors duration-300",
              iconClassName,
              hover
            )}
          />
        </a>
      ))}
    </div>
  );
};

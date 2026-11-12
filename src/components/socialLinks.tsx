import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const links = [
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    Icon: FaLinkedin,
    hover: "hover:text-[#0B69C7]",
  },
  {
    label: "GitHub",
    href: profile.social.github,
    Icon: FaGithub,
    hover: "hover:text-[#5C6BC0]",
  },
  {
    label: "Facebook",
    href: profile.social.facebook,
    Icon: FaFacebook,
    hover: "hover:text-[#1976D2]",
  },
  {
    label: "Instagram",
    href: profile.social.instagram,
    Icon: FaInstagram,
    hover: "hover:text-[#EF4C5C]",
  },
  {
    label: "WhatsApp",
    href: profile.social.whatsapp,
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

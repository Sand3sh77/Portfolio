import { DropdownMenuItem } from "./ui/dropdown-menu";
import { SocialLinks } from "./socialLinks";

const sections = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Get In Touch", href: "#getintouch" },
];

const Navigation = () => {
  return (
    <div className="rounded w-[15rem] p-2">
      {sections.map(({ label, href }) => (
        <DropdownMenuItem
          key={href}
          asChild
          className="text-lg focus:bg-transparent focus:translate-x-2 transition-all duration-100 cursor-pointer"
        >
          <a href={href}>- {label}</a>
        </DropdownMenuItem>
      ))}
      <div className="w-[80%] mx-auto">
        <SocialLinks iconClassName="w-[1.25rem] h-[1.25rem]" />
      </div>
    </div>
  );
};

export default Navigation;

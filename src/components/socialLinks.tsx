import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center rounded gap-5 w-full px-10 py-5 bg-[#fcfafa] dark:bg-[#13182F]">
      <a
        href="https://www.linkedin.com/in/sandesh-subedi-58735b283"
        target="_blank"
      >
        <FaLinkedin className="w-[2rem] h-[2rem] hover:text-[#0B69C7] transition-colors duration-300" />
      </a>
      <a href="https://github.com/Sand3sh77" target="_blank">
        <FaGithub className="w-[2rem] h-[2rem] hover:text-[#5C6BC0] transition-colors duration-300" />
      </a>
      <a href="https://www.facebook.com/sandesh.subedi.3979/" target="_blank">
        <FaFacebook className="w-[2rem] h-[2rem] hover:text-[#1976D2] transition-colors duration-300" />
      </a>
      <a href="https://www.instagram.com/sand3sh77/" target="_blank">
        <FaInstagram className="w-[2rem] h-[2rem] hover:text-[#EF4C5C] transition-colors duration-300" />
      </a>
      <a
        href="https://wa.me/+9779866048224?text=Hi%20there,%20I%27d%20like%20to%20discuss%20a%20project"
        target="_blank"
      >
        <FaWhatsapp className="w-[2rem] h-[2rem] hover:text-[#4CAF50] transition-colors duration-300" />
      </a>
    </div>
  );
};

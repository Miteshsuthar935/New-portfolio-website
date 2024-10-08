import { RiLinkedinLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 sm:px-8">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="font-extrabold text-3xl">Ms</h1>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mitesh-suthar-9b3745293/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine />
          </a>
          <a href="https://github.com/Miteshsuthar935" target="_blank" rel="noopener noreferrer">
            <RiGithubLine />
          </a>
          <a href="https://x.com/miteshsutharr" target="_blank" rel="noopener noreferrer">
            <RiTwitterLine />
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
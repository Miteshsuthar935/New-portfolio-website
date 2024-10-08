import { RiLinkedinLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="font-extrabold text-3xl">Ms</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mitesh-suthar-9b3745293/" target="blank"><RiLinkedinLine /></a> 
          <a href="https://github.com/Miteshsuthar935" target="blank"><RiGithubLine /></a> 
          <a href="https://x.com/miteshsutharr" target="blank"><RiTwitterLine /></a>
          
        </div>
    </nav>
  )
}

export default Navbar

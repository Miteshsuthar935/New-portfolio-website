import aboutimg from "../assets/aboutpic.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      
      {/* Flex container for the image and content */}
      <div className="flex flex-wrap justify-center lg:justify-between">
        
        {/* Image container */}
        <motion.div
        whileInView = {{opacity: 1, x:0}}
        initial = {{opacity:0, x:-100}}
        transition = {{duration:0.5}}        
        className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img 
            src={aboutimg} 
            alt="About me" 
            className="w-[500px] h-[500px]  object-cover rounded-lg" // Adjusted for responsiveness
          />
        </motion.div>

        {/* Text section */}
        <motion.div
        whileInView = {{opacity : 1 , x : 0}}
        initial = {{opacity : 0, x : 100}}
        transition = {{duration : 1}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
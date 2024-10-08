import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript } from "react-icons/si"; // Importing icons
import {motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView = {{opacity :1, y : 0}}
      initial = {{opacity: 0, y:-100}}
      transition = {{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>

      <motion.div 
      whileInView = {{opacity :1, x:0}}
      initial = {{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" /> {/* HTML5 Icon */}
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-600" /> {/* CSS3 Icon */}
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-400" /> {/* Tailwind CSS Icon */}
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-7xl text-purple-600" /> {/* Bootstrap Icon */}
        </motion.div>

        <motion.div 
        variants={iconVariants(4.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" /> {/* JavaScript Icon */}
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React Icon */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
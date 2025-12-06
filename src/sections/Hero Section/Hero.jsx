import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { FaLocationDot } from "react-icons/fa6";
import heroAnimation from "../../assets/heroAnimation.json";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-81px)] flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hi, I'm <span className="text-[#34D399]">Kamrul Hasan</span>
          </h1>

          {/* Typewriter */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4">
            <span className="text-[#34D399] font-semibold">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Web Developer",
                  "Full Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* Introduction */}
          <p className="text-white/70 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
            I build responsive and modern web applications using the latest
            technologies. Always eager to learn and create awesome projects.
          </p>

          {/* Location Button (Moved Below Paragraph) */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#34D399]/20 border border-[#34D399] text-[#34D399] rounded-lg mb-6 hover:bg-[#34D399]/30 transition"
          >
            <FaLocationDot className="text-[#34D399] text-lg" />
            <span className="text-sm sm:text-base">Cumilla, Bangladesh</span>
          </button>

          {/* Buttons */}
          <div className="flex flex-row justify-start gap-4 flex-wrap">
            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-[#34D399] text-[#0B1C2C] font-semibold rounded-lg shadow-lg hover:bg-[#10B981] transition text-sm sm:text-base"
            >
              Download Resume
            </a>

            {/* View Resume Live Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-[#34D399] text-white font-semibold rounded-lg hover:bg-[#34D399]/20 transition text-sm sm:text-base"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Hero Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <Lottie animationData={heroAnimation} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}

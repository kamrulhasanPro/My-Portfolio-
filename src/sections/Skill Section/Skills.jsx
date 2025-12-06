import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  // FaVscode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNetlify,
  SiVercel,
  // SiJwt,
  SiThunderstore,
  SiPostman,
  SiGithub,
  SiFramer,
  SiSwiper,
} from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("webdev");

  const skills = {
    webdev: [
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] w-10 h-10" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] w-10 h-10" /> },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-[#F7DF1E] w-10 h-10" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-[#38B2AC] w-10 h-10" />,
      },
      { name: "React", icon: <FaReact className="text-[#61DBFB] w-10 h-10" /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#68A063] w-10 h-10" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-white w-10 h-10" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#4DB33D] w-10 h-10" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-[#FFCA28] w-10 h-10" />,
      },
      { name: "JWT", icon: <img src="https://img.icons8.com/color/48/java-web-token.png" className="w-10 h-10" /> },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032] w-10 h-10" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="text-[#171515] w-10 h-10" fill="white" />,
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-[#00C7B7] w-10 h-10" />,
      },
      { name: "Vercel", icon: <SiVercel className="text-white w-10 h-10" /> },
      {
        name: "Surge",
        icon: <img src="https://surge.sh/images/logos/svg/surge-logo.svg" className="w-10 h-10" />,
      },
      {
        name: "TanStack Query",
        icon: (
          <img
            src="https://tanstack.com/images/logos/logo-color-600.png"
            className="w-10 h-10"
          />
        ),
      },
      {
        name: "Thunder Client",
        icon: <SiThunderstore className="text-[#a837ff] w-10 h-10" />,
      },
      { name: "Figma", icon: <img src="https://img.icons8.com/color/48/figma--v1.png" className=" w-10 h-10" /> },
      {
        name: "VS Code",
        icon: <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" className=" w-10 h-10" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37] w-10 h-10" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-[#0055FF] w-10 h-10" />,
      },
      {
        name: "Swiper",
        icon: <SiSwiper className="text-[#007aff] w-10 h-10" />,
      },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0B1C2C] py-20 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-primary relative inline-block mb-12"
      >
        My Skills
        <span className="absolute -bottom-3 left-0 w-28 h-1 bg-gradient-to-r from-primary to-[#2DD4BF] rounded-full"></span>
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { key: "webdev", label: "Web Development" },
          { key: "tools", label: "Tools & Tech" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-primary to-[#2DD4BF] text-white shadow-lg scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl"
      >
        {skills[activeTab].map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 15px 30px rgba(45, 212, 191, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gradient-to-tr from-[#112D3C] to-[#0B1C2C] p-6 rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer border-2 border-primary/30 hover:border-[#2DD4BF]/70"
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile.jpg"; 

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B1C2C] py-20 px-6 flex items-center justify-center overflow-x-hidden"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-primary relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-[#2DD4BF] rounded-full"></span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm Kamrul Hasan Miazi, a passionate web developer currently
            pursuing Alim 1st Year, General Group. I specialize in building
            responsive, modern, and interactive web applications using React,
            TailwindCSS, and other modern web technologies.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I love creating unique user interfaces that provide a great user
            experience. I'm continuously learning and improving my skills to
            deliver the best solutions for web projects.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 15px 30px rgba(45, 212, 191, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-primary border-opacity-50 bg-gradient-to-tr from-primary to-[#2DD4BF] p-2"
          >
            <img
              src={profileImage}
              alt="Kamrul Hasan Miazi"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute -top-8 -left-8 w-20 h-20 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#2DD4BF]/30 rounded-full animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}

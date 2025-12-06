import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const iconHover = {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <footer className="bg-[#0B1C2C] text-gray-300 py-10 px-6 sm:px-12">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-3 border-b border-primary/30 sm:border-b-0 sm:border-r sm:pr-4 pb-4 sm:pb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            Contact Info
          </h3>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaEnvelope className="text-primary" /> kamrul116522@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaPhone className="text-primary" /> +8801806116522
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3 border-b border-primary/30 sm:border-b-0 sm:border-r sm:pr-4 pb-4 sm:pb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            Follow Me
          </h3>
          <div className="flex gap-4">
            {[
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/kamrulhasanmiazi/",
              },
              { icon: FaGithub, link: "https://github.com/kamrulhasanPro" },
              { icon: FaFacebook, link: "https://www.facebook.com/mrkamrulmiazi" },
            ].map(({ icon: Icon, link }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="p-3 bg-[#102535] rounded-lg shadow-md hover:shadow-primary/50 transition-colors"
              >
                <Icon className="text-gray-100 text-lg sm:text-xl" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            About
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            I am Kamrul Hasan Miazi, a web developer passionate about building
            modern, responsive, and interactive websites. Let’s build something
            amazing together!
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-primary/30 pt-4 text-center text-gray-400 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Kamrul Hasan Miazi. All rights
        reserved.
      </div>
    </footer>
  );
}

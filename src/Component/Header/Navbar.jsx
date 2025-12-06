import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaFolderOpen,
  FaEnvelopeOpenText,
} from "react-icons/fa";

import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Sidebar Animation
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 180, damping: 20 },
    },
  };

  // Staggered animation
  const listVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.12 },
    }),
  };

  const navItems = [
    { name: "Home", href: "/#hero", icon: <FaHome /> },
    { name: "About", href: "/#about", icon: <FaUserAlt /> },
    { name: "Skills", href: "/#skills", icon: <FaTools /> },
    { name: "Projects", href: "/#projects", icon: <FaFolderOpen /> },
    { name: "Contact", href: "/#contact", icon: <FaEnvelopeOpenText /> },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[#0B1C2C]/60 backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <figure>
          <img className="w-10 h-10" src="/logo.png" alt="logo" />
        </figure>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative group cursor-pointer"
            >
              <a href={item.href} className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </a>

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-lg"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {!open ? <HiMenuAlt3 /> : <IoClose />}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm h-screen z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed h-screen top-0 right-0 w-64 bg-[#0B1C2C]/80 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 p-6 flex flex-col"
          >
            {/* Close Button */}
            <button
              className="text-white text-3xl mb-6 self-end hover:rotate-90 transition"
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </button>

            {/* Sidebar Items */}
            <ul className="flex flex-col gap-6 text-white text-lg">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 10, scale: 1.05, color: "#34D399" }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <Link to={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

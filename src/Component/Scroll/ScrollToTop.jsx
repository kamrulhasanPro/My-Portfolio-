import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show after 300px scroll
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#34D399] via-[#2DD4BF] to-[#34D399] text-black rounded-full shadow-lg hover:shadow-primary/50 transition-all"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

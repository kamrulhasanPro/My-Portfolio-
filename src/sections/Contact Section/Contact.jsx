import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Toast from "../../Component/Toast/Toast";

export default function Contact() {
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });
  const iconHover = {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300 },
  };

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3c86ecde-fa28-40ce-929e-35e9c211cb7f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      showToast("success", "Your message has been sent!");
      event.target.reset();
    } else {
      showToast("error", "Failed to send message!");
    }
  };

  return (
    <section id="contact" className="bg-[#0B1C2C] py-16 px-4 sm:px-6 lg:px-12">
      <Toast show={toast.show} type={toast.type} message={toast.message} />

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left: Contact Info + Social */}
        <motion.div className="flex-1 flex flex-col gap-6">
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-primary tracking-wide"
          >
            Let's Connect
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm sm:text-base"
          >
            I’d love to discuss your next project. Whether it’s a collaboration,
            consultation, or just a friendly chat about tech, I’m here to help!
          </motion.p>

          {/* Contact Cards */}
          <motion.div className="flex flex-col gap-4 mt-4">
            {[
              {
                icon: FaEnvelope,
                label: "Email",
                value: "kamrul116522@gmail.com",
                link: "mailto:kamrul116522@gmail.com",
              },
              {
                icon: FaPhone,
                label: "Phone",
                value: "+8801806116522",
                link: "tel:+8801806116522",
              },
              {
                icon: FaWhatsapp,
                label: "WhatsApp",
                value: "+8801806116522",
                link: "https://wa.me/8801806116522",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                href={item.link}
                className="flex items-center gap-3 p-4 border border-primary/30 rounded-xl bg-[#102535] shadow-md hover:shadow-primary/50 transition"
              >
                <item.icon className="text-primary text-xl sm:text-2xl" />
                <div>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-gray-100 font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons */}
          {/* Social Icons */}
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl text-primary font-semibold mt-6"
          >
            Connect With Me
          </motion.h3>
          <motion.div className="flex gap-4 mt-2">
            {[
              {
                Icon: FaLinkedin,
                link: "https://www.linkedin.com/in/kamrulhasanmiazi/",
              },
              { Icon: FaGithub, link: "https://github.com/kamrulhasanPro" },
              {
                Icon: FaFacebook,
                link: "https://www.facebook.com/mrkamrulmiazi",
              },
            ].map(({ Icon, link }, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                whileHover={iconHover}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#102535] rounded-lg shadow-md hover:shadow-primary/50 transition-colors"
              >
                <Icon className="text-gray-100 text-lg sm:text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div className="flex-1">
          <motion.div
            variants={itemVariants}
            className="bg-[#102535] p-6 sm:p-8 rounded-2xl shadow-lg border border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              Send Me a Message
            </h3>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-[#0B1C2C] border border-primary/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-[#0B1C2C] border border-primary/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                required
                type="text"
                name="message-subject"
                placeholder="Subject"
                className="p-3 rounded-lg bg-[#0B1C2C] border border-primary/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                required
                name="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-lg bg-[#0B1C2C] border border-primary/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-[#34D399] via-[#2DD4BF] to-[#34D399] text-black font-semibold py-3 rounded-lg shadow-lg transition-transform cursor-pointer"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

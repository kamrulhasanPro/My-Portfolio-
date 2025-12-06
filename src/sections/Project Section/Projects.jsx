import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { projectsData } from "../../assets/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0B1C2C] py-20 px-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-14"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[#0F2436] rounded-3xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-primary/40 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700 object-top"
                whileHover={{ rotate: 1 }}
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-white text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description.substring(0, 90)}...
              </p>

              {/* New Gradient Button */}
              <Link
                to={`/project/${project.id}`}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="inline-block mt-4 px-5 py-2 text-white text-sm rounded-xl 
                bg-gradient-to-r from-[#34D399] via-[#2DD4BF] to-[#34D399]
                shadow-lg shadow-primary/30 
                group-hover:shadow-primary/60
                transition-all duration-300 hover:scale-110"
              >
                View Details →
              </Link>
            </div>

            {/* Card Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 
              group-hover:opacity-100 transition-all duration-500
              bg-gradient-to-br from-primary/30 to-transparent">
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

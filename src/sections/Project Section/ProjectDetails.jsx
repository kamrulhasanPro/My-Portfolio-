import React from "react";
import { useParams, Link } from "react-router";
import { projectsData } from "../../assets/projects";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <p className="text-white text-center pt-32 text-xl sm:text-2xl">
        Project not found.
      </p>
    );

  return (
    <section className="min-h-screen bg-[#0B1C2C] py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-[#102535] p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-primary/20 relative">

        {/* Back Button */}
        <Link
          to="/#projects"
          className="flex items-center gap-2 text-primary hover:text-[#2DD4BF] font-semibold mb-4 sm:mb-5 text-sm sm:text-base"
        >
          <FaArrowLeft className="text-base sm:text-lg" />
          Back to Projects
        </Link>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-primary/20 mb-4 sm:mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold mt-4 sm:mt-6 mb-4 sm:mb-6 tracking-wide">
          {project.title}
        </h2>

        {/* Deep Intro */}
        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          {project.deepIntro}
        </p>

        {/* Tech Stack */}
        <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/20 border border-primary/40 text-primary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-6 sm:mb-10">
          <a
            href={project.liveLink}
            target="_blank"
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 bg-primary text-black rounded-lg font-semibold hover:bg-primary/80 transition text-xs sm:text-sm"
          >
            Live Site <FaExternalLinkAlt className="text-xs sm:text-sm" />
          </a>

          <a
            href={project.githubClient}
            target="_blank"
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-black transition text-xs sm:text-sm"
          >
            GitHub <FaGithub className="text-xs sm:text-sm" />
          </a>
        </div>

        {/* Challenges */}
        <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3">
          Challenges Faced
        </h3>
        <ul className="list-disc ml-5 sm:ml-6 text-gray-300 leading-relaxed space-y-1 sm:space-y-2 text-sm sm:text-base">
          {project.challenges.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Improvements */}
        <h3 className="text-lg sm:text-xl text-white font-semibold mt-6 sm:mt-10 mb-2 sm:mb-3">
          Future Improvements
        </h3>
        <ul className="list-disc ml-5 sm:ml-6 text-gray-300 leading-relaxed space-y-1 sm:space-y-2 text-sm sm:text-base">
          {project.improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Bottom Back Button */}
        <div className="flex justify-center mt-6 sm:mt-12">
          <Link
            to="/#projects"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#2DD4BF] text-black font-semibold rounded-lg hover:bg-[#35e5d0] transition text-sm sm:text-base"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

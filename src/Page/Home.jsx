import React from "react";
import Hero from "../sections/Hero Section/Hero";
import About from "../sections/About Section/About";
import Skills from "../sections/Skill Section/Skills";
import Projects from "../sections/Project Section/Projects";
import Contact from "../sections/Contact Section/Contact";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;

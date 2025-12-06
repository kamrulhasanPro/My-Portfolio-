import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Header/Navbar";
import Footer from "../Component/Footer/Footer";
import ScrollToTop from "../Component/Scroll/ScrollToTop";

const HomeLayout = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-screen">
      <ScrollToTop /> 
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default HomeLayout;

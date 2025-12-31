import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Home from "./Page/Home";
import { createBrowserRouter } from "react-router";
import ProjectDetails from "./sections/Project Section/ProjectDetails";
import HomeLayout from "./Layout/HomeLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import Overview from "./Page/dashboard/Overview";
import HeroSection from "./Page/dashboard/HeroSection";
import AboutSection from "./Page/dashboard/AboutSection";
import ProjectSection from "./Page/dashboard/ProjectSection";
import SkillSection from "./Page/dashboard/SkillSection";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/project/:id",
        Component: ProjectDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "hero",
        Component: HeroSection,
      },
      {
        path: "about",
        Component: AboutSection,
      },
      {
        path: "project",
        Component: ProjectSection,
      },
      {
        path: "skill",
        Component: SkillSection,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

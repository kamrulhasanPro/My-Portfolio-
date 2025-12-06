import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Home from "./Page/Home";
import { createBrowserRouter } from "react-router";
import ProjectDetails from "./sections/Project Section/ProjectDetails";
import HomeLayout from "./Layout/HomeLayout";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

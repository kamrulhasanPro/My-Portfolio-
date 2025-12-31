import React from "react";
import { BiBriefcase, BiUserCircle } from "react-icons/bi";
import { BsLayers } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { Outlet } from "react-router";
import AdminNavLink from "../Component/Dashboard/AdminNavLink";

const DashboardLayout = () => {
  return (
    <div className="drawer drawer-open">
      <title>Kamrul Hasan Dashboard</title>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-64 border-r border-gray-700">
          {/* profile */}
          <div className="bg-secondary/20 w-full flex items-center gap-2 px-3 py-2">
            <figure>
              <img
                className="w-10 h-10 bg-white rounded-full border-2 border-primary"
                src="/logo.png"
                alt="logo"
              />
            </figure>
            <div className="is-drawer-close:hidden">
              <h2 className="text-sm font-semibold ">
                Kamrul Hasan{" "}
                <span className="bg-green-400 px-2 rounded-sm ">ADMIN</span>
              </h2>
              <p className="text-sm text-gray-300">kamrul@gmail.com</p>
            </div>
          </div>

          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* overview */}
            <AdminNavLink
              to={"/dashboard"}
              Icon={LuLayoutDashboard}
              navName={"Overview"}
              end={true}
            />

            {/* hero section  */}
            <AdminNavLink
              to={"/dashboard/hero"}
              Icon={BiUserCircle}
              navName={"Hero Section"}
            />

            {/* About section  */}
            <AdminNavLink
              to={"/dashboard/about"}
              Icon={FiFileText}
              navName={"About Section"}
            />

            {/* project section  */}
            <AdminNavLink
              to={"/dashboard/project"}
              Icon={BiBriefcase}
              navName={"Project Section"}
            />

            {/* skill section  */}
            <AdminNavLink
              to={"/dashboard/skill"}
              Icon={BsLayers}
              navName={"Skill Section"}
            />


            {/* toggle */}
            <li>
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                {/* Sidebar toggle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

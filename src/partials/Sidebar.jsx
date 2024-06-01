import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2 ">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          {/* Logo */}

          <NavLink end to="/" className="block">
            <div className="flex">
              <div>
                <img src={Logo} alt="logo" width="45" height="45" />
              </div>

              {sidebarExpanded ? (
                <div className="p-2 text-lg">
                  <span>Network Traffic</span>
                </div>
              ) : null}
            </div>
          </NavLink>
        </div>

        {/* user Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>

            <ul className="mt-3">
              {/* Leaderboard */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname === "/" || (pathname.includes("/") && "bg-slate-900")
                }`}
              >
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("/")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      className="shrink-0 h-6 w-6"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10,14 C10.5522847,14 11,14.4477153 11,15 L11,21 C11,21.5522847 10.5522847,22 10,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,15 C2,14.4477153 2.44771525,14 3,14 L10,14 Z M21,9 C21.5522847,9 22,9.44771525 22,10 L22,21 C22,21.5522847 21.5522847,22 21,22 L14,22 C13.4477153,22 13,21.5522847 13,21 L13,10 C13,9.44771525 13.4477153,9 14,9 L21,9 Z M10,2 C10.5522847,2 11,2.44771525 11,3 L11,11 C11,11.5522847 10.5522847,12 10,12 L3,12 C2.44771525,12 2,11.5522847 2,11 L2,3 C2,2.44771525 2.44771525,2 3,2 L10,2 Z M21,2 C21.5522847,2 22,2.44771525 22,3 L22,6 C22,6.55228475 21.5522847,7 21,7 L14,7 C13.4477153,7 13,6.55228475 13,6 L13,3 C13,2.44771525 13.4477153,2 14,2 L21,2 Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Language Game */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
                <NavLink
                  className={`block text-slate-200 truncate transition duration-150 hover:text-white`}
                >
                  <div className="flex items-center">
                    <svg
                      className="shrink-0 h-5 w-5"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFFFFF"
                        fillRule="evenodd"
                        d="M11.3248,7.22461 C11.7513,6.58854 12,5.82332 12,5 C12,2.79086 10.2091,1 8,1 C5.79086,1 4,2.79086 4,5 C4,5.82332 4.24874,6.58854 4.67518,7.22461 C3.11714,7.77132 2,9.2552 2,11 L2,15 L14,15 L14,11 C14,9.2552 12.8829,7.77132 11.3248,7.22461 Z M10,5 C10,6.10457 9.10457,7 8,7 C6.89543,7 6,6.10457 6,5 C6,3.89543 6.89543,3 8,3 C9.10457,3 10,3.89543 10,5 Z M6,9 C4.89543,9 4,9.89543 4,11 L4,13 L12,13 L12,11 C12,9.89543 11.1046,9 10,9 L6,9 Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Your Profile
                    </span>
                  </div>
                </NavLink>
              </li>

              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
                <NavLink
                  className={`block text-slate-200 truncate transition duration-150 hover:text-white`}
                >
                  <div className="flex items-center">
                    <svg
                      className="shrink-0 h-6 w-6"
                      fill="#FFFFFF"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 490 490"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M176.7,165L95.2,268c-8.4-3.7-17.6-5.8-27.3-5.8C30.5,262.2,0,292.7,0,330.1S30.5,398,67.9,398s67.9-30.5,67.9-67.9
				c0-15.3-5.1-29.5-13.7-40.9l81.5-103c7.5,3.9,15.7,6.8,24.2,8.4v145.5c-29.2,7.6-50.8,34.2-50.8,65.7c0,37.5,30.5,67.9,67.9,67.9
				s67.9-30.5,67.9-67.9c0-31.5-21.6-58.1-50.8-65.7V194.7c8.3-1.6,16.1-4.3,23.4-8L367,290.2c-8.2,11.2-13.1,25-13.1,40
				c0,37.4,30.5,67.9,67.9,67.9s68.2-30.5,68.2-68c0-37.4-30.5-67.9-67.9-67.9c-10.1,0-19.7,2.2-28.3,6.2l-81.1-102.8
				c13.9-15.9,22.4-36.6,22.4-59.3c0-49.6-40.4-90-90-90s-90,40.4-90,90C155,128.7,163.2,149.2,176.7,165z M67.9,363.8
				c-18.5,0-33.6-15.1-33.6-33.6s15.1-33.6,33.6-33.6s33.6,15.1,33.6,33.6S86.5,363.8,67.9,363.8z M278.6,406
				c0,18.5-15.1,33.6-33.6,33.6s-33.6-15.1-33.6-33.6c0-18.3,14.7-33.2,33-33.6c0.2,0,0.4,0,0.7,0c0.2,0,0.4,0,0.7,0
				C263.9,372.7,278.6,387.7,278.6,406z M455.7,330.1c0,18.5-15.1,33.6-33.6,33.6s-33.6-15.1-33.6-33.6s15.1-33.6,33.6-33.6
				S455.7,311.6,455.7,330.1z M245,50.6c30.7,0,55.7,25,55.7,55.7S275.7,162,245,162s-55.7-25-55.7-55.7S214.3,50.6,245,50.6z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Connections
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10 mt-6">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Settings
              </span>
            </h3>

            <ul className="mt-3">
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
                <NavLink
                  className={`block text-slate-200 truncate transition duration-150 hover:text-white`}
                >
                  <div className="flex items-center">
                    <svg
                      className="shrink-0 h-6 w-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z" />
                      </g>
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Admin Settings
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {sidebarExpanded ? (
          <div className="container fixed bottom-0 left-0 p-2">
            <div className="flex items-center justify-center">
              <a
                id="WindUI-5-logo-sub"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center col-span-1 gap-2 text-base font-medium leading-6 whitespace-nowrap focus:outline-none md:col-span-4 lg:col-span-6 text-gray-450"
              >
                Network Traffic © {new Date().getFullYear()}
              </a>
            </div>
          </div>
        ) : null}

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

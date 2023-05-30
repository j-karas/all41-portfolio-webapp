
import { faCamera, faCode, faMugHot, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
  
const NavBar = () => {

  const [projectsDropdown, setProjectsDropdown] = React.useState(false);

  return (
    <>
      <nav className="bg-slate-200 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <IconMenu className="h-12 mr-3" />
            <span className="self-center text-gray-900 text-2xl font-semibold whitespace-nowrap">
              John Karas
            </span>
          </a>
          <div className="bg-slate-200 block w-auto" id="navbar-multi-level">
            <ul className="bg-slate-200 flex flex-row font-medium p-0 space-x-8 mt-0 border-0">
              <li>
                <a
                  href="/Home"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-transparent border-0 hover:text-savoyBlue"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={() => setProjectsDropdown(!projectsDropdown)}
                    id="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 hover:bg-transparent border-0 hover:text-savoyBlue"
                  >
                    Projects{" "}
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {projectsDropdown ? (
                    <div className="absolute -left-8 top-full z-10 mt-3 max-w-md overflow-hidden border-l-4 border-savoyBlue bg-slate-200 shadow-lg">
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm leading-6 border-b-2 hover:border-savoyBlue">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md text-savoyBlue bg-slate-200">
                          <FontAwesomeIcon icon={faCode} size="xl" />
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block text-lg font-semibold text-gray-900"
                          >
                            Coding
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm leading-6 border-b-2 hover:border-savoyBlue">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md text-savoyBlue bg-slate-200">
                          <FontAwesomeIcon icon={faShirt} size="xl" />
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block text-lg font-semibold text-gray-900"
                          >
                            Clothing
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm leading-6 border-b-2 hover:border-savoyBlue">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md text-savoyBlue bg-slate-200">
                          <FontAwesomeIcon icon={faCamera} size="xl" />
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block text-lg font-semibold text-gray-900"
                          >
                            Photography
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm leading-6 border-b-2 hover:border-savoyBlue">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md text-savoyBlue bg-slate-200">
                          <FontAwesomeIcon icon={faMugHot} size="xl" />
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block text-lg font-semibold text-gray-900"
                          >
                            Miscellaneous
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
              <li>
                <a
                  href="/Blogs"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-transparent border-0 hover:text-savoyBlue"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-transparent border-0 hover:text-savoyBlue"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
  
export default NavBar;
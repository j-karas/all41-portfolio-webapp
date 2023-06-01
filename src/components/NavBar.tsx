
import { faCamera, faCode, faMugHot, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
import '../john_karas_resume_5_8.pdf';
  
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
                            href="/Projects/Coding"
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
                            href="/Projects/Clothing"
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
                            href="/Projects/Photography"
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
                            href="/Projects/Miscellaneous"
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
                  href="../john_karas_resume_5_8.pdf"
                  target="_blank"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 hover:bg-transparent border-0 hover:text-savoyBlue"
                >
                  Resume{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 20 20"
                  >
                    {" "}
                    <path
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      clipRule="evenodd" 
                    />{" "}
                    <path 
                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                      fillRule="evenodd"
                      clipRule="evenodd"  
                    />{" "}
                  </svg>
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
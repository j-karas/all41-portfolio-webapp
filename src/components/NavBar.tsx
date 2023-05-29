
import React from "react";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
  
const NavBar = () => {
  return (
    <>
      <nav className="bg-slate-200 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <IconMenu className='h-12 mr-3' />
            <span className="self-center text-gray-900 text-2xl font-semibold whitespace-nowrap">
              John Karas
            </span>
          </a>
          <div
            className="bg-slate-200 block w-auto"
            id="navbar-multi-level"
          >
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
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
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
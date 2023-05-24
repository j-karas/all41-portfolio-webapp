import React from "react";
import NavBar from "../components/NavBar";
import img from "../images/normal-20.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {openInNewTab} from "../utilities/openInNewTab";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-lg m-4 mx-auto">
        <img
          className="rounded-md mx-auto drop-shadow-md"
          src={img}
          alt=""
          width="300"
          height="300"
        ></img>
      </div>
      <div className="max-w-xs mx-auto flex flex-row">
        <div onClick={() => openInNewTab('https://www.instagram.com/j.a.karas/')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <div onClick={() => openInNewTab('https://github.com/j-karas')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </div>
        <div onClick={() => openInNewTab('https://www.linkedin.com/in/john-a-karas/')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
      </div>
      <figure className="max-w-lg items-center mx-auto mt-4 m-8 bg-slate-100 rounded-md drop-shadow-md">
        <div className="p-8 text-left space-y-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </figure>
    </>
  );
};

export default About;

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
        <div onClick={() => openInNewTab('https://www.instagram.com/j.a.karas/')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <div onClick={() => openInNewTab('https://github.com/j-karas')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </div>
        <div onClick={() => openInNewTab('https://www.linkedin.com/in/john-a-karas/')} className="text-xl bg-slate-100 hover:bg-slate-200 hover:cursor-pointer text-savoyBlue w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
      </div>
      <figure className="max-w-lg items-center mx-auto mt-4 m-8 bg-slate-100 rounded-md drop-shadow-md">
        <div className="p-8 text-left space-y-4">
          Originally from Hendersonville, TN, a city just outside of Nashville, I graduated
          from Temple University in Philadelphia, PA. I have a B.S. in Computer Science with
          a certificate in Computer Security & Digital Forensics. I am a motivated Software
          Developer currently looking for a job. My interests lie in Frontend Development and 
          Cybersecurity. My passions outside of programming include clothing, art, 
          and photography. I created the brand All For One in 2017 with the purpose of sharing 
          my style and art through clothing. I initially started sewing basic pillows when I was 
          a child on my mother's old sewing machine. I eventually branched out to creating my own garments.
        </div>
      </figure>
    </>
  );
};

export default About;

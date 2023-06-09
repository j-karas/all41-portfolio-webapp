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
        <div
          onClick={() => openInNewTab("https://www.instagram.com/j.a.karas/")}
          className="text-xl bg-onyx hover:bg-outerSpace hover:cursor-pointer text-dodgerBlue hover:text-seaSalt w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <div
          onClick={() => openInNewTab("https://github.com/j-karas")}
          className="text-xl bg-onyx hover:bg-outerSpace hover:cursor-pointer text-dodgerBlue hover:text-seaSalt w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </div>
        <div
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/john-a-karas/")
          }
          className="text-xl bg-onyx hover:bg-outerSpace hover:cursor-pointer text-dodgerBlue hover:text-seaSalt w-14 h-14 flex justify-center items-center rounded-md mx-auto drop-shadow-md"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
      </div>
      <figure className="max-w-lg items-center mx-auto mt-4 m-8 bg-onyx rounded-md drop-shadow-md">
        <div className="p-8 pb-2 text-left space-y-4 text-seaSalt">
          {/* Originally from Hendersonville, TN, a city just outside of Nashville, I graduated
          from Temple University with Summa Cum Laude honors in Philadelphia, PA. I have a B.S. in Computer Science with
          a certificate in Computer Security & Digital Forensics. I am a motivated Software
          Developer currently looking for a job. My interests lie in Frontend Development and 
          Cybersecurity. My passions outside of programming include clothing, art, 
          and photography. I created the brand All For One in 2017 with the purpose of sharing 
          my style and art through clothing. I initially started sewing basic pillows when I was 
          a child on my mother's old sewing machine. I eventually branched out to creating my own garments. */}
          Originally from Hendersonville, TN, a city just outside of Nashville,
          I am a motivated Software Developer with a passion for Frontend
          Development and Cybersecurity. I graduated from Temple University in
          Philadelphia, PA, with Summa Cum Laude honors, earning a B.S. in
          Computer Science along with a certificate in Computer Security &
          Digital Forensics.
        </div>
        <div className="p-8 pt-2 pb-2 text-left space-y-4 text-seaSalt">
          As I embark on the next chapter of my career, I am actively seeking
          new opportunities in the field. With a strong foundation in software
          development and a keen interest in cybersecurity, I bring a versatile
          skill set to the table. I thrive on challenges and continuously strive
          for excellence in my work.
        </div>
        <div className="p-8 pt-2 pb-2 text-left space-y-4 text-seaSalt">
          Beyond programming, I find inspiration and fulfillment in various
          creative pursuits. Clothing, art, and photography have always held a
          special place in my heart. In 2017, I established the brand All For
          One as a means to share my unique style and artistic vision through
          clothing. My journey began with humble beginnings, as I first learned
          to sew by creating basic pillows on my mother's old sewing machine.
          Over time, I honed my skills and ventured into designing and crafting
          my own garments.
        </div>
        <div className="p-8 pt-2 pb-2 text-left space-y-4 text-seaSalt">
          Through my portfolio website, I invite you to explore my diverse range
          of projects and witness the fusion of my technical expertise and
          artistic flair. From frontend development showcases to cybersecurity
          insights, you'll gain a glimpse into the multifaceted nature of my
          work. Additionally, you'll find glimpses of my creative endeavors,
          from fashion designs to captivating visual compositions captured
          through the lens of my camera.
        </div>
        <div className="p-8 pt-2 text-left space-y-4 text-seaSalt">
          Join me on this exciting journey as I continue to push the boundaries
          of what is possible in the realms of software development and creative
          expression. Together, let's make meaningful connections, forge new
          opportunities, and bring innovative ideas to life. Welcome to my
          portfolio website, where technology meets artistry, and endless
          possibilities await.
        </div>
      </figure>
    </>
  );
};

export default About;

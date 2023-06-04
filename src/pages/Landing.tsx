import React from "react";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
import { useMousePosition } from "../utilities/useMousePosition";

const Landing = () => {
  const position = useMousePosition();
  return (
    <>
      <a className="fixed hover:cursor-pointer" style={{top:position.y - 72, left:position.x - 72}} href="/Home">
        <IconMenu className="h-36 mr-3 transition ease-in-out delay-150 stroke-savoyBlue fill-savoyBlue hover:-translate-y-1 hover:scale-110 hover:stroke-indianRed hover:fill-indianRed duration-300" />
      </a>
    </>
  );
};

export default Landing;
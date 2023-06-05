import React from "react";
import { ReactComponent as IconMenu }  from '../All41Basic-prototype.svg';
import { useMousePosition } from "../utilities/useMousePosition";

const Landing = () => {
  const position = useMousePosition();
  return (
    <>
      <a className="fixed hover:cursor-pointer" id='logo'
      style={{
            transform: `translate(${position.x - 72}px, ${position.y - 72}px)`,
            transition: 'transform 500ms',
            transitionTimingFunction: 'linear'
          }} href="/Home">
        <IconMenu className="h-36 mr-3 transition ease-in-out delay-150 stroke-seaSalt fill-seaSalt hover:-translate-y-1 hover:scale-110 hover:stroke-dodgerBlue hover:fill-dodgerBlue duration-300" />
      </a>
    </>
  );
};

export default Landing;
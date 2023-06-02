import React from "react";
import NavBar from "../components/NavBar";
import PreviewComponent from "../components/PreviewComponent";

const Coding = () => {
  return (
    <>
      <NavBar />
      <PreviewComponent
        link="#" 
        header="Test"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        image="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg"
        left={false}
      />
      <PreviewComponent
        link="#" 
        header="Test"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        image="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg"
        left={true}
      />
    </>
  );
};

export default Coding;
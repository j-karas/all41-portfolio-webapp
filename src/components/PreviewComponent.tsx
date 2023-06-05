import React from 'react';
import {PreviewCardProps} from '../types'

const PreviewComponent = (Props: PreviewCardProps) => {
    return (
      <>
        <a
          href={Props.link} 
          className={Props.left ? "flex flex-row bg-onyx max-w-lg mx-auto rounded-md border-l-4 m-4 border-dodgerBlue shadow-lg hover:bg-outerSpace hover:cursor-pointer"
                                : "flex flex-row-reverse bg-onyx max-w-lg mx-auto rounded-md border-r-4 m-4 border-dodgerBlue shadow-lg hover:bg-outerSpace hover:cursor-pointer"}
          >
          <div className='p-4 text-seaSalt'>
            <h3 className="self-center text-2xl font-semibold whitespace-nowrap">
              {/* Test */}
              {Props.header}
            </h3>
            <p className=''>
              {Props.paragraph}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris */}
            </p>
          </div>
          <div>
            <img
              src={Props.image}
              // src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg"
              className={Props.left ? "rounded-r-lg h-full"
                                    : "rounded-l-lg h-full"}
            ></img>
          </div>
        </a>
      </>
    );
};

export default PreviewComponent;
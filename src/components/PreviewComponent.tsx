import React from 'react';
import {PreviewCardProps} from '../types'

const PreviewComponent = (Props: PreviewCardProps) => {
    return (
      <>
        <a
          href={Props.link} 
          className={Props.left ? "flex flex-row bg-slate-100 max-w-lg mx-auto rounded-md border-l-4 m-4 border-savoyBlue shadow-lg hover:bg-slate-200 hover:cursor-pointer"
                                : "flex flex-row-reverse bg-slate-100 max-w-lg mx-auto rounded-md border-r-4 m-4 border-savoyBlue shadow-lg hover:bg-slate-200 hover:cursor-pointer"}
          >
          <div className='p-4'>
            <h3 className="self-center text-gray-900 text-2xl font-semibold whitespace-nowrap">
              {/* Test */}
              {Props.header}
            </h3>
            <p>
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
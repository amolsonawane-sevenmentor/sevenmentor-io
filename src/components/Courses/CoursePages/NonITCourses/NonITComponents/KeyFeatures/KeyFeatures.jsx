

import React from 'react';
import keyFeaturesData from "./KeyfeaturesData.js"
import Image from 'next/image.js';

const KeyFeatures = ({ courseName, img }) => {
  const features = keyFeaturesData[courseName] || [];

  return (
    <div className="w-full bg-gradient-to-br from-black to-orange-900/20 min-h-screen">
      <div className="mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[70%] pr-0 lg:pr-24 lg:pl-10 mb-10 lg:mb-0 relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 max-w-2xl">
              Why Just Follow Trends When You Can Create Them?
            </h2>
            {/* Blurred background circles moved outside the map loop */}
            <div className="pointer-events-none absolute left-24 top-0 w-[250px] h-[250px] rounded-full bg-orange-500/10 blur-[80px] z-0"></div>
            <div className="pointer-events-none absolute right-2 bottom-[-120px] w-[180px] h-[180px] rounded-full bg-orange-900/10 blur-[40px] z-0"></div>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-12 relative z-10">
              {features.map((feature, index) => (
                <div className="flex" key={index}>
                  <div className="text-6xl md:text-7xl font-semibold text-gray-300 mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-4">
                    <p className="text-white">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%] relative  flex justify-center items-center">
            <div className="relative w-[300px] md:w-4/5 md:h-4/5 flex justify-center items-center">
              {/* <Image className='max-w-80 md:max-w-[none]' src={img} alt="Key Features of fashion Course" /> */}
              <Image
  className='max-w-80 md:max-w-[none]'
  src={img}
  alt="Key Features of fashion Course"
  width={320}      
  height={320}     
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;

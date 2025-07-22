import React from 'react';

const HowDoesItHelp = ({ heading, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 py-16 px-4 md:px-16 bg-[#faf7f1] relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative">
          <img src={image} alt={heading} className="max-w-md w-full h-auto rounded-lg" />
          <div className="hidden md:block absolute -left-10 -top-10 w-[120%] h-[120%] bg-[#f8f1ee]  rounded-r-[40%] -z-10" />
        </div>
      </div>
      <div className="flex-1 text-left z-10">
        <h2 className="text-4xl font-bold text-[#225c63] mb-4 relative inline-block">
          {heading}
          <span className="block h-2 w-32 bg-yellow-200 absolute left-0 bottom-0 -z-10 rounded-full" style={{height:'0.5em', top:'80%'}}></span>
        </h2>
        <div className="text-xl text-gray-700 mt-6">{description}</div>
      </div>
    </div>
  );
};

export default HowDoesItHelp; 
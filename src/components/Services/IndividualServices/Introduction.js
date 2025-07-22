import React from 'react';

const Introduction = ({ heading, subheading, description, image }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-8">
      <div className="flex-1 text-left">
        <h3 className="text-xl font-bold text-[#7c3f18] mb-2">{subheading}</h3>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">{heading}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={image} alt={subheading} className="w-full max-w-full md:max-w-lg max-h-[28rem] aspect-square object-cover rounded-xl shadow-lg" />
      </div>
    </div>
  );
};

export default Introduction; 
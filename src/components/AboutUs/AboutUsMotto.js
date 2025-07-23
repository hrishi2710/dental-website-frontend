import React from 'react';

const AboutUsMotto = ({ heading, content, images }) => (
  <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 my-12 px-2 md:px-6">
    {/* Left: Story Text */}
    <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
      <div className="mb-6">
        <h2 className="text-4xl md:text-5xl font-light text-[#7c3f18] mb-1 flex items-end gap-2">
          <span className="font-light">Our</span>
          <span className="font-extrabold">Vision</span>
        </h2>
        <div className="w-16 h-1 bg-[#b97a56] rounded mb-6" />
        {content.map((para, idx) => (
          <p
            key={idx}
            className={
              'text-lg md:text-xl text-gray-800 mb-4' +
              (para.bold ? ' font-bold' : '')
            }
          >
            {para.text}
          </p>
        ))}
      </div>
    </div>
    {/* Right: Collage Grid */}
    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 w-full max-w-md">
      {images.slice(0, 4).map((img, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden shadow-md bg-gray-100 aspect-square flex items-center justify-center">
          <img src={img} alt={`about-motto-${idx}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  </div>
);

export default AboutUsMotto; 
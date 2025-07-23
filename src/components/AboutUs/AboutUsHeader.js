import React from 'react';

const bgImg = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80'; // Placeholder image

const AboutUsHeader = () => (
  <div className="relative w-full max-w-full h-[340px] md:h-[400px] flex items-center justify-start rounded-3xl my-6 px-2 md:px-6">
    <img
      src={bgImg}
      alt="About Us Banner"
      className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10 rounded-3xl" />
    <div className="relative z-20 flex flex-col items-start justify-center h-full pl-8 md:pl-16">
      <div className="text-white text-2xl md:text-3xl font-light mb-2">get to know</div>
      <div className="text-white text-4xl md:text-5xl font-extrabold mb-6">Muskurahat Dental Studio team</div>
      <div className="flex flex-row gap-4">
        <button className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-semibold px-8 py-3 rounded-md text-lg shadow transition-colors">Book now</button>
      </div>
    </div>
  </div>
);

export default AboutUsHeader; 
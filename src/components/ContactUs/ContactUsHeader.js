import React from 'react';
import bannerImg from '../../assets/AboutUs/Reception.jpg'; // Replace with the correct image if you have a better one

const ContactUsHeader = () => (
  <div className="w-full max-w-[98vw] mx-auto mt-4 rounded-3xl overflow-hidden relative" style={{height: '260px'}}>
    <img
      src={bannerImg}
      alt="Contact Us Banner"
      className="w-full h-full object-cover"
      style={{minHeight: '260px'}}
    />
    <div className="absolute left-12 top-1/2 -translate-y-1/2">
      <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Contact Us</h1>
    </div>
  </div>
);

export default ContactUsHeader; 
import React from 'react';
import ContactUsHeader from './ContactUsHeader';
import ContactUsSocial from './ContactUsSocial';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => (
  <div>
    <ContactUsHeader />
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 py-12 px-2">
      <div className="flex-1 flex flex-col justify-center">
        <ContactUsSocial />
      </div>
      <div className="flex flex-col justify-center items-center my-6 md:my-0 md:px-2">
        <div className="text-2xl font-bold text-[#7c3f18] mb-2">or</div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <ContactUsForm />
      </div>
    </div>
  </div>
);

export default ContactUs; 
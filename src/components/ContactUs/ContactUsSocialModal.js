import React from 'react';
import ContactUsSocial from './ContactUsSocial';

const ContactUsSocialModal = ({ open, onClose, onFillForm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-md mx-2">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-[#7c3f18] font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="bg-white rounded-2xl shadow-2xl p-0">
          <ContactUsSocial small />
          <div className="flex flex-col items-center justify-center pb-6">
            <div className="text-xl font-bold text-[#7c3f18] mb-3">or</div>
            <button
              className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-bold py-2 px-6 rounded-lg text-base transition-colors"
              onClick={onFillForm}
            >
              Fill the form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSocialModal; 
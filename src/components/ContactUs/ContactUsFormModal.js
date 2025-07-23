import React from 'react';
import ContactUsForm from './ContactUsForm';

const ContactUsFormModal = ({ open, onClose }) => {
  return (
    <div
      className={
        (open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none') +
        ' fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300'
      }
    >
      <div
        className={
          (open
            ? 'scale-100 opacity-100'
            : 'scale-95 opacity-0') +
          ' relative w-full max-w-xl mx-4 transition-all duration-300 ease-in-out'
        }
      >
        <button
          className="absolute top-2 right-2 text-3xl text-gray-400 hover:text-[#7c3f18] font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="bg-white rounded-2xl shadow-2xl p-0">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormModal; 
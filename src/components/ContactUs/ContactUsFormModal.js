import React from 'react';
import ContactUsForm from './ContactUsForm';

const ContactUsFormModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-xl mx-4">
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
import React, { useState } from 'react';

const timeSlots = [
  '',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
  '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM',
  '7:00 PM - 8:00 PM',
  '8:00 PM - 9:00 PM',
];

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    ["First Name"]: '',
    ["Last Name"]: '',
    ["Phone"]: '',
    ["Email"]: '',
    ["Date"]: '',
    ["Time Slot"]: '',
    ["Message"]: ''
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxMbmquT76dwgLc9Vapg2jvZ2USboKRJEIiSnLJfo0a5e0SB4FRKoiWCWWhCilp66Mh/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is filled
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate mandatory fields
    const mandatoryFields = ["First Name", "Phone", "Email", "Date", "Time Slot"];
    const newErrors = {};
    mandatoryFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = 'This field is required.';
      }
    });
    // Phone validation: must be 10 digits, all numbers
    if (formData["Phone"] && !/^\d{10}$/.test(formData["Phone"])) {
      newErrors["Phone"] = 'Phone no. should be proper';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Focus the first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementsByName(firstErrorField)[0];
      if (el) el.focus();
      return;
    }
    setStatus('Sending...');

    try {
      // Prepare data for submission
      // You can send as FormData or JSON. FormData is often simpler for basic text inputs.
      const dataToSend = {};
      for (const key in formData) {
        dataToSend[key] = formData[key];
      }

      // If you prefer sending JSON (and you configured doPost to parse JSON):
      // const dataToSend = JSON.stringify(formData);
      // const headers = { 'Content-Type': 'application/json' };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(dataToSend), // Use dataToSend directly for FormData
        // headers: headers, // Uncomment if sending JSON
        redirect: 'follow', // Important for Apps Script redirects
      });

      const result = await response.json();

      if (result.result === 'success') {
        setStatus('We got your request. Expect a call from us soon!');
        setFormData({
          ["First Name"]: '',
          ["Last Name"]: '',
          ["Phone"]: '',
          ["Email"]: '',
          ["Date"]: '',
          ["Time Slot"]: '',
          ["Message"]: ''
        }); // Clear form
      } else {
        setStatus(`Error: ${result.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      setStatus(`Failed to send: ${error.message}`);
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#7c3f18] mb-1">Fill form</h3>
      <form className="bg-white rounded-2xl shadow-md p-8 max-w-xl w-full mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[#7c3f18] font-semibold mb-1">First Name <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="First Name"
              value={formData["First Name"]}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2"
            />
            {errors["First Name"] && <p className="text-red-600 text-sm mt-1">{errors["First Name"]}</p>}
          </div>
          <div>
            <label className="block text-[#984e20] font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="Last Name"
              value={formData["Last Name"]}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-[#7c3f18] font-semibold mb-1">Your Phone <span className="text-red-600">*</span></label>
            <div className="flex items-center gap-2 border-b-2 border-gray-200 focus-within:border-[#984e20] py-2">
              <span className="text-lg">🇮🇳</span>
              <span className="text-lg font-semibold">+91</span>
              <input
                type="tel"
                name="Phone"
                value={formData["Phone"]}
                onChange={handleChange}
                className="flex-1 outline-none bg-transparent pl-2"
              />
            </div>
            {errors["Phone"] && <p className="text-red-600 text-sm mt-1">{errors["Phone"]}</p>}
          </div>
          <div>
            <label className="block text-[#7c3f18] font-semibold mb-1">Your Email <span className="text-red-600">*</span></label>
            <input
              type="email"
              name="Email"
              value={formData["Email"]}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2"
            />
            {errors["Email"] && <p className="text-red-600 text-sm mt-1">{errors["Email"]}</p>}
          </div>
          <div>
            <label className="block text-[#7c3f18] font-semibold mb-1">Date <span className="text-red-600">*</span></label>
            <input
              type="date"
              name="Date"
              value={formData["Date"]}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2"
            />
            {errors["Date"] && <p className="text-red-600 text-sm mt-1">{errors["Date"]}</p>}
          </div>
          <div>
            <label className="block text-[#7c3f18] font-semibold mb-1">Time Slot <span className="text-red-600">*</span></label>
            <select
              name="Time Slot"
              value={formData["Time Slot"]}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2 text-gray-700 bg-transparent appearance-none"
            >
              {timeSlots.map((slot, idx) => (
                <option key={idx} value={slot} disabled={idx === 0} hidden={idx === 0}>
                  {idx === 0 ? 'Select a time slot' : slot}
                </option>
              ))}
            </select>
            {errors["Time Slot"] && <p className="text-red-600 text-sm mt-1">{errors["Time Slot"]}</p>}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-[#7c3f18] font-semibold mb-1">Message</label>
          <textarea
            name="Message"
            value={formData["Message"]}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2 resize-none"
            rows={3}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-bold py-3 px-8 rounded-lg text-lg w-full mt-2 transition-colors"
          disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? 'Please wait...' : 'Book Appointment'}
        </button>
        {status && <p className="text-green-600 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUsForm; 
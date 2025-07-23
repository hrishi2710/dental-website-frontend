import React from 'react';

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

const ContactUsForm = () => (
  <div>
    <h3 className="text-2xl font-bold text-[#7c3f18] mb-1">Fill form</h3>
    <form className="bg-white rounded-2xl shadow-md p-8 max-w-xl w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[#7c3f18] font-semibold mb-1">First Name</label>
          <input type="text" className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2" />
        </div>
        <div>
          <label className="block text-[#984e20] font-semibold mb-1">Last Name</label>
          <input type="text" className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2" />
        </div>
        <div>
          <label className="block text-[#7c3f18] font-semibold mb-1">Your Phone</label>
          <div className="flex items-center gap-2 border-b-2 border-gray-200 focus-within:border-[#984e20] py-2">
            <span className="text-lg">🇮🇳</span>
            <span className="text-lg font-semibold">+91</span>
            <input type="tel" className="flex-1 outline-none bg-transparent pl-2" />
          </div>
        </div>
        <div>
          <label className="block text-[#7c3f18] font-semibold mb-1">Your Email</label>
          <input type="email" className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2" />
        </div>
        <div>
          <label className="block text-[#7c3f18] font-semibold mb-1">Date</label>
          <input type="date" className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2" />
        </div>
        <div>
          <label className="block text-[#7c3f18] font-semibold mb-1">Time Slot</label>
          <select className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2 text-gray-700 bg-transparent appearance-none">
            {timeSlots.map((slot, idx) => (
              <option key={idx} value={slot} disabled={idx === 0} hidden={idx === 0}>
                {idx === 0 ? 'Select a time slot' : slot}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-[#7c3f18] font-semibold mb-1">Message</label>
        <textarea className="w-full border-b-2 border-gray-200 focus:border-[#984e20] outline-none py-2 resize-none" rows={3}></textarea>
      </div>
      <button type="submit" className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-bold py-3 px-8 rounded-lg text-lg w-full mt-2 transition-colors">Book Appointment</button>
    </form>
  </div>
);

export default ContactUsForm; 
const BookAppointmentButton = ({ onClick }) => (
  <button
    className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors"
    onClick={onClick}
    type="button"
  >
    Book appointment
  </button>
);

export default BookAppointmentButton;
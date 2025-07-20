import BookAppointmentButton from './BookAppointmentButton';

const MobileBookButton = () => (
  <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden">
    <BookAppointmentButton />
  </div>
);

export default MobileBookButton; 
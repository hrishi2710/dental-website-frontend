import LogoSection from './LogoSection';
import ContactInfo from './ContactInfo';
import BookAppointmentButton from './BookAppointmentButton';
import NavBarMenu from './menu/NavBarMenu';
import MobileBookButton from './MobileBookButton';

const Header = (props) => (
  <header className="w-full bg-[#f8f1ee] shadow-md">
    <div className="flex flex-row w-full">
      <LogoSection openSideDrawerHandler={props.openSideDrawerHandler} />
      <div className="flex-1 flex flex-col hidden md:flex">
        <div className="flex flex-row items-center justify-between px-6 py-2 w-full bg-[#f8f1ee]">
          <ContactInfo />
          <div className="hidden md:flex justify-end flex-shrink-0 ml-8">
            <BookAppointmentButton />
          </div>
        </div>
        <NavBarMenu />
      </div>
    </div>
    <MobileBookButton />
  </header>
);

export default Header;
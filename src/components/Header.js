import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <header className="w-full bg-[#f8f1ee] shadow-md">
            <div className="flex flex-row w-full">
                {/* Logo and hamburger for mobile */}
                <div className="w-full md:w-auto md:flex md:flex-col bg-[#f8f1ee] p-0">
                    {/* Mobile: logo left, hamburger right */}
                    <div className="flex flex-row items-center justify-between w-full py-2 md:block px-4">
                        <img src={Logo} alt="Logo OM DentCare" className="h-16 md:h-24 w-auto object-contain ml-0" />
                        <div className="md:hidden flex items-center mr-0" onClick={props.openSideDrawerHandler}>
                            <FontAwesomeIcon icon={faBars} size="2x" className="text-[#b97a56]" />
                        </div>
                    </div>
                </div>
                {/* Right side: top bar and nav bar (hidden on mobile) */}
                <div className="flex-1 flex flex-col hidden md:flex">
                    {/* Top bar with contact info and book button */}
                    <div className="flex flex-row items-center justify-between px-6 py-2 w-full bg-[#f8f1ee]">
                        {/* Contact Info */}
                        <div className="hidden md:flex flex-col items-end flex-1">
                            <div className="flex items-center space-x-6 text-sm text-black">
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faPhone} className="text-cyan-500" />
                                    +91-9731869915
                                </span>
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-cyan-500" />
                                    muskurahatdentalstudio@gmail.com
                                </span>
                            </div>
                        </div>
                        {/* Book Appointment Button */}
                        <div className="hidden md:flex justify-end flex-shrink-0 ml-8">
                            <button className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors">Book appointment</button>
                        </div>
                    </div>
                    {/* Navigation Bar - hidden on mobile */}
                    <nav className="w-full justify-center border-t border-gray-100 bg-[#f8f1ee] hidden md:flex">
                        <ul className="flex flex-row space-x-8 py-2 text-base font-semibold text-black">
                            <li className="hover:text-cyan-500 cursor-pointer">Home</li>
                            <li className="hover:text-cyan-500 cursor-pointer">Service</li>
                            <li className="hover:text-cyan-500 cursor-pointer">About</li>
                            <li className="hover:text-cyan-500 cursor-pointer">Blog</li>
                            <li className="hover:text-cyan-500 cursor-pointer">Payments</li>
                            <li className="hover:text-cyan-500 cursor-pointer">Testimonials</li>
                            <li className="hover:text-cyan-500 cursor-pointer">Contact Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Book appointment button fixed at bottom on mobile */}
            <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden">
                <button className="bg-[#b97a56] hover:bg-[#a05f3c] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors">Book appointment</button>
            </div>
        </header>
    );
};

export default Header;
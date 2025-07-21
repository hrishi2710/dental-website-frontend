import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const LogoSection = ({ openSideDrawerHandler }) => (
  <div className="w-full md:w-auto md:flex md:flex-col bg-[#f8f1ee] p-0">
    <div className="flex flex-row items-center justify-between w-full py-2 md:block px-4">
      <img src={Logo} alt="Logo OM DentCare" className="h-14 md:h-20 w-auto object-contain ml-0" />
      <div className="md:hidden flex items-center mr-0" onClick={openSideDrawerHandler}>
        <FontAwesomeIcon icon={faBars} size="2x" className="text-[#b97a56]" />
      </div>
    </div>
  </div>
);

export default LogoSection; 
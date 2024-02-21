import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './menu/NavBarMenu';
import BookingBar from './BookingBar';
const Header = (props) => {

    return (
        <>
            <div className="flex flex-row justify-between md:justify-normal">
                <div className="w-auto">
                    <img src={Logo} alt='Logo OM DentCare'></img>
                </div>
                <div className='flex items-center scale-150 m-8 md:hidden' onClick={props.openSideDrawerHandler}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='hidden md:block w-screen'>
                    <BookingBar />
                    <NavBarMenu />
                </div>
            </div>
        </>
    )
}

export default Header;
import { useEffect, useState } from 'react';
import services from '../Services/ServiceUtils';
import SideDrawerServicesDropDownMenu from './SideDrawerServicesDropDownMenu';
import menuItmes from './menuItems';
import { Link } from 'react-router-dom';

const SideDrawerMenu = (props) => {
    const [animate, setAnimate] = useState('slide-in-right');

    useEffect(() => {
        if (props.show) {
            setAnimate('slide-in-right');
        }
    }, [props.show]);

    const handleClose = () => {
        setAnimate('slide-out-right');
    };

    const handleAnimationEnd = () => {
        if (animate === 'slide-out-right') {
            props.onClose && props.onClose();
        }
    };

    return (
        <>
            {/* The side drawer to be shown up to medium sized screens */}
            {props.show && (
                <div
                    className={`box-border border-#00a79d border-2 w-[90vw] h-screen md:hidden shadow-2xl shadow-cyan-700 fixed top-0 right-0 z-50 bg-[#f8f1ee] animate-${animate}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <button
                        className="absolute top-2 right-4 text-4xl font-bold text-cyan-700 hover:text-cyan-900 focus:outline-none"
                        onClick={handleClose}
                        aria-label="Close side drawer"
                    >
                        &times;
                    </button>
                    {menuItmes.map((menuItem) => (
                        menuItem === 'Services' ? (
                            <SideDrawerServicesDropDownMenu key={menuItem} services={services} onNavigate={handleClose} />
                        ) : menuItem === 'Home' ? (
                            <Link
                                to="/"
                                key={menuItem}
                                className="box-border border-2 border-t-0 border-r-0 border-l-0 w-full flex items-center justify-center py-4 text-lg font-semibold text-center focus:outline-none bg-transparent"
                                onClick={handleClose}
                                tabIndex={0}
                                style={{ appearance: 'none' }}
                            >
                                {menuItem}
                            </Link>
                        ) : menuItem === 'Contact Us' ? (
                            <Link
                                to="/contact-us"
                                key={menuItem}
                                className="box-border border-2 border-t-0 border-r-0 border-l-0 w-full flex items-center justify-center py-4 text-lg font-semibold text-center focus:outline-none bg-transparent"
                                onClick={handleClose}
                                tabIndex={0}
                                style={{ appearance: 'none' }}
                            >
                                {menuItem}
                            </Link>
                        ) : menuItem === 'About us' ? (
                            <Link
                                to="/about-us"
                                key={menuItem}
                                className="box-border border-2 border-t-0 border-r-0 border-l-0 w-full flex items-center justify-center py-4 text-lg font-semibold text-center focus:outline-none bg-transparent"
                                onClick={handleClose}
                                tabIndex={0}
                                style={{ appearance: 'none' }}
                            >
                                {menuItem}
                            </Link>
                        ) : (
                            <button
                                className="box-border border-2 border-t-0 border-r-0 border-l-0 w-full flex items-center justify-center py-4 text-lg font-semibold text-center focus:outline-none bg-transparent"
                                key={menuItem}
                                tabIndex={0}
                                style={{ appearance: 'none' }}
                            >
                                {menuItem}
                            </button>
                        )
                    ))}
                </div>
            )}
        </>
    )
}

export default SideDrawerMenu;

/* Add this to your global CSS (e.g., App.css or index.css):
@keyframes slide-out-right {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.animate-slide-out-right {
  animation-name: slide-out-right;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
*/
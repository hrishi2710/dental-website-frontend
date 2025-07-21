import { useEffect, useState } from 'react';
// Menu items can be inlined for clarity
const menuItmes = ["Home", "Services", "Case History", "Blog", "Testimonials", "Contact Us"];

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
                    className={`box-border border-#00a79d border-2 w-[90vw] h-screen md:hidden shadow-2xl shadow-cyan-700 fixed top-0 right-0 z-50 backdrop-blur-lg animate-${animate}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <button
                        className="absolute top-4 right-4 text-2xl font-bold text-cyan-700 hover:text-cyan-900 focus:outline-none"
                        onClick={handleClose}
                        aria-label="Close side drawer"
                    >
                        &times;
                    </button>
                    {menuItmes.map((menuItem) => (
                        <div
                            className="box-border border-2 py-4 border-t-0 border-r-0 border-l-0 text-center text-lg"
                            key={menuItem}
                        >
                            {menuItem}
                        </div>
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
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideDrawerServicesDropDownMenu = ({ services, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleLinkClick = () => {
    setOpen(false);
    if (onNavigate) onNavigate();
  };

  return (
    <div className="box-border border-2 border-t-0 border-r-0 border-l-0 text-center">
      <button
        className="w-full flex items-center justify-center gap-2 py-4 text-lg font-semibold focus:outline-none hover:text-cyan-500"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls="side-drawer-services-dropdown"
      >
        Services
        <svg className={`w-3 h-3 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div
        id="side-drawer-services-dropdown"
        className={`transition-all duration-500 ease-in-out ${open ? 'max-h-[999px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2'} overflow-hidden bg-[#f8f1ee] rounded-md mx-4 mb-2 shadow-none`}
        style={{ boxShadow: 'none' }}
      >
        {services.map((service, idx) => (
          <Link
            key={service.label}
            to={`/services/${encodeURIComponent(service.label.toLowerCase().replace(/\s+/g, '-') )}`}
            className={`block px-4 py-2 text-black text-left whitespace-nowrap ${idx !== services.length - 1 ? 'border-b border-gray-300' : ''} hover:bg-cyan-100 transition-colors`}
            onClick={handleLinkClick}
          >
            {service.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideDrawerServicesDropDownMenu;

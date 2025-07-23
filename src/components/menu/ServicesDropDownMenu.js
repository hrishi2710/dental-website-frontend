import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

const ServicesDropDownMenu = ({ services }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef();

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <li
      className="relative hover:text-cyan-500 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center gap-1">
        Services
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </span>
      {dropdownOpen && (
        <ul
          className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service) => (
            <li key={service.label}>
              <Link
                to={`/services/${encodeURIComponent(service.label.toLowerCase().replace(/\s+/g, '-'))}`}
                className="block px-4 py-2 hover:bg-cyan-100 text-black whitespace-nowrap"
                onClick={handleDropdownLinkClick}
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ServicesDropDownMenu; 
import menuItems from './menuItems';
import services from '../Services/ServiceUtils';
import ServicesDropDownMenu from './ServicesDropDownMenu';
import { Link } from 'react-router-dom';

const NavBarMenu = () => (
  <nav className="w-full justify-center border-t border-gray-100 bg-[#f8f1ee] hidden md:flex">
    <ul className="flex flex-row space-x-8 py-2 text-base font-semibold text-black">
      {menuItems.map((menuItem) => (
        menuItem === 'Services' ? (
          <ServicesDropDownMenu key={menuItem} services={services} />
        ) : (
          <li className="hover:text-cyan-500 cursor-pointer" key={menuItem}>{menuItem}</li>
        )
      ))}
    </ul>
  </nav>
);

export default NavBarMenu;
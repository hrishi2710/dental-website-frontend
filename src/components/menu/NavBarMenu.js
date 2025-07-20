import menuItmes from './menuItems';
const NavBarMenu = () => (
    <nav className="w-full justify-center border-t border-gray-100 bg-[#f8f1ee] hidden md:flex">
      <ul className="flex flex-row space-x-8 py-2 text-base font-semibold text-black">
        {menuItmes.map((menuItem) => (
          <li className="hover:text-cyan-500 cursor-pointer" key={menuItem}>{menuItem}</li>
        ))}
      </ul>
    </nav>
  );
  
  export default NavBarMenu;
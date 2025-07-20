const NavBarMenu = () => (
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
);

export default NavBarMenu; 
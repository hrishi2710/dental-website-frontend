const FooterMenu = ({ leftMenu, rightMenu }) => (
  <div className="flex flex-row justify-center w-full md:w-2/3 gap-12">
    <ul className="flex flex-col space-y-4 text-[#222] text-lg font-light">
      {leftMenu.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <ul className="flex flex-col space-y-4 text-[#222] text-lg font-light">
      {rightMenu.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default FooterMenu; 
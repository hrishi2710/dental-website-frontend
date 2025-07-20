import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideDrawerMenu from './components/menu/SideDrawerMenu';

function App() {
  let [showSideDrawerMenu, setShowSideDrawerMenu] = useState(false);

  let closeSideDrawerHandler = () => {
    setShowSideDrawerMenu(false);
  }

  let openSideDrawerHandler = () => {
    setShowSideDrawerMenu(true);
  }

  return (
    <div className='relative'>
      <div className="flex flex-col relative">
        <div className='w-full'>
          <Header openSideDrawerHandler={openSideDrawerHandler} />
        </div>
        {/* Added onClick handler on this div just to make sure that it should close the side drawer only.
        TODO: How it will behave when the caraousel, services etc. is a link and we want them clickable? */}
        <div onClick={closeSideDrawerHandler}>
          <div>Caraousel</div>
          <div>Services</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>
      </div>
      {showSideDrawerMenu && (
        <div className="fixed inset-0 z-10 backdrop-blur-sm md:hidden" onClick={closeSideDrawerHandler}></div>
      )}
      <SideDrawerMenu show={showSideDrawerMenu} onClose={closeSideDrawerHandler} />
    </div>
  );
}

export default App;

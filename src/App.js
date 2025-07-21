import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SideDrawerMenu from './components/menu/SideDrawerMenu';
import Services from './components/Services/Services';
import ContactFooter from './components/ContactFooter/ContactFooter';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';

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
          <Carousel />
          <Services />
        </div>
      </div>
      {showSideDrawerMenu && (
        <div className="fixed inset-0 z-10 backdrop-blur-sm md:hidden" onClick={closeSideDrawerHandler}></div>
      )}
      <SideDrawerMenu show={showSideDrawerMenu} onClose={closeSideDrawerHandler} />
      <AboutUs />
      <ChooseUs />
      <ContactFooter />
    </div>
  );
}

export default App;

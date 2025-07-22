import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SideDrawerMenu from './components/menu/SideDrawerMenu';
import Services from './components/Services/Services';
import ContactFooter from './components/ContactFooter/ContactFooter';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
import { Routes, Route } from 'react-router-dom';
import ServicePageEntry from './components/Services/IndividualServices/ServicePageEntry';

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
      <Header openSideDrawerHandler={openSideDrawerHandler} />
      <div className="pt-20 md:pt-24">
        <Routes>
          <Route path="/services/:serviceLabel" element={<ServicePageEntry />} />
          <Route path="/" element={
            <div>
              <Carousel />
              <Services />
              <AboutUs />
              <ChooseUs />
            </div>
          } />
        </Routes>
      </div>
      {showSideDrawerMenu && (
        <div className="fixed inset-0 z-10 backdrop-blur-sm md:hidden" onClick={closeSideDrawerHandler}></div>
      )}
      <SideDrawerMenu show={showSideDrawerMenu} onClose={closeSideDrawerHandler} />
      <ContactFooter />
    </div>
  );
}

export default App;

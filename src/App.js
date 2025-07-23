import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SideDrawerMenu from './components/menu/SideDrawerMenu';
import Services from './components/Services/Services';
import ContactFooter from './components/ContactFooter/ContactFooter';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
import TeamEntry from './components/Team/TeamEntry';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServicePageEntry from './components/Services/IndividualServices/ServicePageEntry';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  let [showSideDrawerMenu, setShowSideDrawerMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={
            <div>
              <Carousel />
              <Services />
              <TeamEntry />
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

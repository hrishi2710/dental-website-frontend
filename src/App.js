import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideDrawerMenu from './components/menu/SideDrawerMenu';
import BookAppointMentButton from './components/BookAppointmentButton';

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
        <div className='w-3/4 m-auto'>
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
      <SideDrawerMenu show={showSideDrawerMenu} />
      <div className='fixed bottom-0 left-1/4 z-5 md:hidden'>
        <BookAppointMentButton />
      </div>
    </div>
  );
}

export default App;

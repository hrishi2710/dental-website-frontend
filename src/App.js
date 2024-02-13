import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './App.css';
import MenuItemComponent from './components/MenuBar';
import Header from './components/Header';

function App() {
  let [showSideDrawerMenu, setShowSideDrawerMenu] = useState(false);

  let toggleSideDrawerHandler = () => {
    setShowSideDrawerMenu(!showSideDrawerMenu);
  }

  return (
    <div className='flex flex-row justify-between'>
      <Header />
      {!showSideDrawerMenu && <div className="box-border border-black border-0 md:hidden p-5 w-min" onClick={toggleSideDrawerHandler}>
        <FontAwesomeIcon icon={faBars} />
      </div>}
      <MenuItemComponent show={showSideDrawerMenu} />
    </div>
  );
}

export default App;

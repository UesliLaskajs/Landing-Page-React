import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'; // Corrected import statement

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  }

  const mobileButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    mobileButton();
    window.addEventListener('resize', mobileButton);
    return () => {
      window.removeEventListener('resize', mobileButton);
    }
  }, []);

  const mobileMenu = () => setClick(false);

  return (
    <div className={click ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to='/' className="navbar-logo" onClick={mobileMenu}>
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Add your nav links here */}
        </ul>
        {button && <Button buttonStyle="btn--outline">Sign up</Button>}
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import './Navbar.css';
import logoIcon from '../img/yft.JPG'

function Navbar() {
  return (
    <div className = 'navbar-container'>
          <img src={logoIcon}/>

          <div>
            <label className="nav-item" >For Care Providers</label>
            <label className="nav-item">Browse Care Providers</label>
            <label className="last-nav-item">Having an emergency?</label>
          </div>
    </div>
  );
}

export default Navbar;
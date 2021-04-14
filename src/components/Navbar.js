import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import logoIcon from '../img/yft.JPG'

function Navbar() {
  return (
    <div className = 'navbar-container'>
          <img src={logoIcon}/>
          <div>
            <Link to="/ForCare" className="nav-item">For Care Providers</Link>
            <label className="nav-item">Browse Care Providers</label>
            <label className="last-nav-item">Having an emergency?</label>
          </div>
    </div>
  );
}

export default Navbar;
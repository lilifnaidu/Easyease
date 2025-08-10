import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Forvision from "../Forover/Forvision/Forvision";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isneed, Setisneed] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);
  const ToggleNav = () => Setisneed(!isneed)
  
  return (
    <>
      <div className="navbars">
        <div className="containersed">
          {/* Left Section - Logo */}
          <div className="logo">
            <h1 className="EasyEase"><Link to={'/'}>EasyEase</Link></h1>
          </div>
          
          {/* Center Section - Navigation Items */}
          <div className="nav-center">
            <div className="item2">
              <ul className="navitem">
                <li onClick={ToggleNav}>Our vision</li>
                <li>Platform for</li>
                <li>About us</li>
              </ul>
              {isneed && <Forvision />}
            </div>
          </div>
          
          {/* Right Section - Add Service, Contact & Menu */}
          <div className="nav-right">
            <button className="add-service-btn">Add Your Service</button>
            <div className="Contactus">
              <span>Call us</span>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isOpen && (
            <ul className="responiveNav">
              <li onClick={toggleMenu}>Our vision</li>
              <li onClick={toggleMenu}>Platform for</li>
              <li onClick={toggleMenu}>About us</li>
              <li onClick={toggleMenu}>Add Your Service</li>
              <li onClick={toggleMenu}>Call customer care</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

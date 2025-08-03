import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Forvision from "../Forover/Forvision/Forvision";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isneed,Setisneed]=useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);
    const ToggleNav=()=>Setisneed(!isneed)
  return (
            <>
                <div className="navbars">
                           <div className="containersed"> 
   <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>   
       {
        isOpen&&(
            <ul className="responiveNav">
                  <li onClick={toggleMenu}>Our vision</li>
                <li>Platform for</li>
                <li>About us</li>
            </ul>
        )
       }                <div className="logo" >
            <h1 className="EasyEase"><Link to={'/'}>EasyEase</Link></h1>
        </div>
        <div className="item2">
            <ul className="navitem">
                <li onClick={ToggleNav}>Our vision</li>
                <li>Platform for</li>
                <li>About us</li>
            </ul>
            {isneed&&<Forvision/>}
        </div>
        <button className="add-service-btn">Add Your Service</button>
        <div className="Contactus">
                                <span className="full">Call customer care</span>
                                <span className="half">Call us</span>
                            </div>
                            
                           </div>
                </div>
            
            </>
  );
};

export default Navbar;

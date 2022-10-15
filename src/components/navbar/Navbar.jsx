import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logom.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="./"><img src={logo} alt="logo"/></a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Market</a></p>
          <p><a href="#about">Trade</a></p>
          <p><a href="#possibility">Notifications</a></p>
          <p><a href="#buy">NFT</a></p>
    
         
          
          <p><a href="#features">Submit for Listing</a></p>
          <p><a href="#download">Downloads</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <p><a href="http://137.184.151.173:8080/" target='_blank'  rel="noreferrer">Sign in</a></p>
        <a className="gpt3__navbar-sign-btn" href="/">Sign Up</a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Market</a></p>
          <p><a href="#about">Trade</a></p>
          <p><a href="#possibility">Notifications</a></p>
          <p><a href="#features">Submit your token</a></p>
          <p><a href="#buy">NFT Marketplace</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <p><a href="https://nexzonex.com/login/">Sign in</a></p>
          <a className="gpt3__navbar-sign-btn" href="https://nexzonex.com/signup">Sign Up</a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

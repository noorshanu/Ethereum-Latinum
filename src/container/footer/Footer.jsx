import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="buy">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="0x64db646c9354DB2249Ff4a08Bc3F9bAfd60096C1">Buy NEX</a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>The Future of Crypto<br /> Aiming to the moon</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://www.twitter.com/Ethereum Latinumxglobal" target="_blank" without rel="noreferrer">Twitter</a>
        <a href="https://www.facebook.com/neztoken/" target="_blank" without rel="noreferrer">Facebook</a>
        <a href="https://t.me/Ethereum LatinumXBot" target="_blank" without rel="noreferrer">Telegram</a>
        <a href="https://instagram.com/Ethereum Latinumxglobal" target="_blank" without rel="noreferrer">Instagram</a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Ethereum LatinumX Global Exchange</h4>
        <a href="https://Ethereum Latinumx.com/login" target="_blank" without rel="noreferrer">Login</a>
        <a href="https://Ethereum Latinumx.com/signup" target="_blank" without rel="noreferrer">Signup</a>
        <a href="https://www.Ethereum Latinumglobal.com/aboutus" target="_blank" without rel="noreferrer">About US</a>
      </div>
      <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
      <a href="https://www.twitter.com/Ethereum Latinumxglobal" target="_blank" without rel="noreferrer">Twitter DM</a>
      <a href="mailto:support@Ethereum Latinumx.com" target="_blank" without rel="noreferrer">support@Ethereum Latinumx.com</a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Ethereum LatinumX Global. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

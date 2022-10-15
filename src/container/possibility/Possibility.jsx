import React from 'react';
import possibilityImage from '../../assets/exchange.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility2 section__padding" id="download">
    <div className="gpt3__possibility2-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility2-content">
      <h4>Trade Crypto on both Web and Android</h4>
      <h1 className="gradient__text">Download on Android , IOS <br /> and Trade on Web </h1>
      <p>Download is available for all platform choose as you like . Download on any device or browse through web</p>
      <a href="/">Download Now</a>
    </div>
  </div>
);

export default Possibility;
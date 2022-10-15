import React from 'react'
import { Feature } from '../../components'
import './about.css'
const About = () => {
    return (
        <div className="gpt3__about section__margin" id="about">
        <div className="gpt3__about-feature">
          <Feature title="What is NEX?" text="NEX is the native token for Ethereum LatinumX GLOBAL Exchange, we created NEX for the support for our Exchange and as a community token , Later on we will be adding more important utility to the NEX Token , with lowest supply and highest on demand overall we could all grow together and aim for the moon. lets join the crypto revolution through NEX" />
        </div>
        <div className="gpt3__about-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <a href="https://bscscan.com/address/0x64db646c9354DB2249Ff4a08Bc3F9bAfd60096C1"  without rel="noreferrer" target="_blank">Explore on BSC Scan</a>
        </div>
        <div className="gpt3__about-container">
          <Feature title="Total Supply" text="500 Million total supply , 50% Locked , Low supply High demand" />
          <Feature title="Project" text="Our project Ethereum Latinumx Global Exchange is up and running. feel free to check that out." />
          <Feature title="Education" text="We Aim for a Global Economy value and appreciate online education for our holders. feel free to check our White paper for more details" />
        </div>
      </div>
    )
}

export default About

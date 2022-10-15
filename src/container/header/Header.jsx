import React from 'react'
import './header.css'
import './header.scss'


const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                   Trade BTC, ETH, NEZ , Ethereum Latinum , TRX on a simple click
                </h1>
                <p>The Crypto Exchange with ease of access , Trade NEZ , Ethereum Latinum , BTC and many more crypto Available within your finger tip. Maybe we were born early to explore the Galaxy but sure we are on time to know more about Crypto. Financial System will emerge to this decentralized future and you can join us to explore more about it .</p>
                <div className="gpt3__header-content__input section__padding">
                    
                    <button type="button" href="https://nexzonex.com/trade/add/tabs">Market</button>
                    </div>
                  
                  
            </div>
            <div className="gpt3__header-image">
                        <img src="https://res.cloudinary.com/nexzoneglobal/image/upload/v1640002307/ai_jlww4x.svg" alt="ai" />
                    </div>
           

          
        </div>
    )
}

export default Header

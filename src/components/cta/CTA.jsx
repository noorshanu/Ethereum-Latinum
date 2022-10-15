import React from 'react'
import './cta.css'
const CTA = () => {
    return (
        <div>

<div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img alt="1" src="img_nature_wide.jpg" style={{width:'100%'}} />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img alt="2" src="img_snow_wide.jpg" style={{width:'100%'}} />
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img alt="3" src="img_mountains_wide.jpg" style={{width:'100%'}} />
  <div className="text">Caption Three</div>
</div>

<a className="prev" href="/" onclick="plusSlides(-1)">&#10094;</a>
<a className="next" href="/" onclick="plusSlides(1)">&#10095;</a>

</div>
<br/>

<div >
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>



        </div>
    )
}

export default CTA

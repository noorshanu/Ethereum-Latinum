import React from 'react'
import './slider.css'



const Slider = () => {
    return (
     

<div class="wrapper">

  <div class="images-area">
    <img src="https://d.top4top.io/p_1933b0jx81.jpg" alt="image1" class="firstImage"/>
    <img src="https://e.top4top.io/p_1933fqrzh2.jpg" alt="image2"/>
    <img src="https://f.top4top.io/p_1933gojsk3.jpg" alt="image3"/>
    <img src="https://g.top4top.io/p_1933as3zx4.jpg" alt="image4"/>
    <img src="https://h.top4top.io/p_1933upn9s5.jpg" alt="image5"/>
  </div>

  <div class="buttons-area">
    <div class="previous-btn">
      <i class='bx bx-chevron-left'></i>
    </div>
    <div class="next-btn">
      <i class='bx bx-chevron-right'></i>
    </div>
  </div>

  <div class="pagination-area">
  </div>
</div>





    )
}

export default Slider

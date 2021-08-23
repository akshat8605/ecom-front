import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div >
        <h3 style={{height:"100vh", backgroundColor:"blue"}}>1</h3>
      </div>
      <div  >
        <h3 style={{height:"100vh", backgroundColor:"green"}}>2</h3>
      </div>
      <div  style={{height:"100vh", backgroundColor:"blue"}}>
        <h3>3</h3>
      </div>
      <div  style={{height:"100vh", backgroundColor:"yellow"}}>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
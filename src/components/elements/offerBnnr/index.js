import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'
const Imges = [
    {
        img:"./images/bnnr.jpg",
    },
    {
        img:"./images/bnnr2.png",
    },
    {
        img:"./images/bnnr3.jpg",
    },
    {
        img:"./images/bnnr4.jpg",
    },
    {
        img:"./images/bnnr5.png",
    },
]

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 6000,
        cssEase: "linear"
      };
    return (

      <>
        <div className="bnner-slider">
        <Slider {...settings}>
          {
            
               Imges.map((e,indx)=>{
                   return(
                  <div className="bnner" key={indx}>
                      <img src={e.img} alt="" />
                  </div>)
                // <Cart data={e}/>
               })
          }
        </Slider></div>   
      </>
    )
}

export default Banner;

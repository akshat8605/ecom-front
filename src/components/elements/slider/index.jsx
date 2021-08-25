import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cart from '../card/cart';
import "./style.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <ArrowForwardIcon className={className} onClick={onClick} style={{ ...style ,color:"#000", display: "block", fontSize:"2.6rem", zIndex:"11"}}/>
    </>
  );
}

function  PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
         <ArrowBackIcon className={className} onClick={onClick} style={{ ...style,color:"#000", display: "block", fontSize:"2.6rem", zIndex:"11"}}/>
    </>
  );
}



const Slide = ({data,title}) => {
  
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint: 1083,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 663,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 483,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        < div className="sliders">
            <h1 style={{margin:'30px 0',textTransform:'uppercase'}}>{title}<ArrowBackIcon style={{marginLeft:"10px"}}/></h1>
            <Slider  {...settings} className="slider" >
                    {
                    data.map((e,indx)=>
                    <Cart data = {e} key={indx} />
                    )
                }
            </Slider>
        </ div>
    )
}

export default Slide;

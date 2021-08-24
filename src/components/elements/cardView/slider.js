import React from "react";
import Slider from "react-slick";
import Card from '../../elements/card'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default function SimpleSlider({products, title}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (<div>
      <h1>{title}</h1>
      <Slider {...settings}>
        {
              products.map((e)=>{
                  return(<div> <Card e={e}/></div>)
              })
          }
        
      </Slider>
    </div>
  );
}
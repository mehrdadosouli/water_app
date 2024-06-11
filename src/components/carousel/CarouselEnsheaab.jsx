import React from 'react';
import Slider from "react-slick";
import CardEnsheaab from '../card/CardEnsheaab';

var settings = {
  // infinite: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesToShow: 4,
  swipeToSlide: true,
  // autoplay: true,
  cssEase: "linear",
  rtl:true,
  responsive: [
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 1010,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 677,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const data=[1,2,3,4]

const CarouselEnsheaab = ({checkeds}) => (
  <div className='container'>
    <Slider {...settings}>
        {data.map(elem=><div key={elem}>
        <CardEnsheaab checkeds={checkeds}/>
      </div>)}    
    </Slider>
  </div>
);

export default CarouselEnsheaab;
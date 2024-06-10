import React from 'react';
import Slider from "react-slick";
import CardEnsheaab from '../card/CardEnsheaab';

var settings = {
  // infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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
import React from 'react';
import Slider from "react-slick";
import CardEnsheaab from '../card/CardEnsheaab';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  rtl:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CarouselEnsheaab = ({checkeds}) => (
  <div style={{}} className='container'>
    <Slider {...settings}>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
      <div>
        <CardEnsheaab checkeds={checkeds}/>
      </div>
    </Slider>
  </div>
);

export default CarouselEnsheaab;
import React from 'react';
import { Carousel, Flex } from 'antd';
import CardEnsheaab from '../card/CardEnsheaab';

const CarouselEnsheaab = () => (
  <Carousel autoplay>
      <Flex>
        <div>{<CardEnsheaab />}</div>
      </Flex>
  </Carousel>
);
export default CarouselEnsheaab;
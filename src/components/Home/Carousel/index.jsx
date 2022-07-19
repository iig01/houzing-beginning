import React, { useRef } from "react";
import { CarouselWrapper, Icon, Img, MainCarousel } from "./style";
import apartment1 from "../../../assets/img/apartment1.png";
import apartment2 from "../../../assets/img/apartment2.png";

export const Carousel = () => {
  const slider = useRef();

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={apartment1} alt="img" />
        <Img src={apartment2} alt="img" />
        <Img src={apartment1} alt="img" />
        <Img src={apartment2} alt="img" />
        <Img src={apartment1} alt="img" />
        <Img src={apartment2} alt="img" />
      </MainCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;

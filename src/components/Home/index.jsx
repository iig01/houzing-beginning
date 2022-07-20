import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Carousel";
import CardCarousel from "./CardCarousel";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <CardCarousel />
    </Container>
  );
};

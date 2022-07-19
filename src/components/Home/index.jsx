import React from "react";
import Filter from "../Filter";
import { Container } from "./style";
import Carousel from "./Carousel";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
    </Container>
  );
};

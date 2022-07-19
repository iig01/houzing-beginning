import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as LeftArrow } from "../../../assets/icon/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/icon/right-arrow.svg";

const CarouselWrapper = styled("div")`
  position: relative;
  width: 100%;
`;
const MainCarousel = styled(Carousel)`
  height: fit-content;
`;

const Img = styled.img`
  background: black;
  width: 100%;
`;

const Icon = styled.div``;

Icon.Left = styled(LeftArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

Icon.Right = styled(RightArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -40%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export { MainCarousel, CarouselWrapper, Icon, Img };

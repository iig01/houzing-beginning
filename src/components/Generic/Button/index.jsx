import React, { memo } from "react";
import { Container } from "./style.js";

export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  mb,
  ml,
  mt,
}) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default memo(Button);

import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      children,
      onClick,
      height,
      width,
      type,
      mr,
      ml,
      mb,
      mt,
      pl,
      onChange,
      placeholder,
      defaultValue,
      value,
      name,
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
        <Icon>{children}</Icon>
        <Container
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          pl={pl}
          type={type}
          width={width}
          height={height}
          onClick={onClick}
          name={name}
        />
      </Wrapper>
    );
  }
);

export default Input;

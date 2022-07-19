import React from "react";
import { Container, Icon, Title, Wrapper, Fragment } from "./style";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { ReactComponent as SearchHome } from "../../assets/icon/home-icon.svg";
import { Popover } from "antd";

export const Filter = () => {
  const content = (
    <Wrapper>
      <Title>Address</Title>
      <Fragment>
        <Input placeholder="Country" width="200px" />
        <Input placeholder="Region" width="200px" />
        <Input placeholder="City" width="200px" />
        <Input placeholder="Zip code" width="200px" />
      </Fragment>
      <Title>Apartment Info</Title>
      <Fragment>
        <Input placeholder="Rooms" />
        <Input placeholder="Size" />
        <Input placeholder="Sort" />
      </Fragment>
      <Title>Price</Title>
      <Fragment>
        <Input placeholder="Min price" />
        <Input placeholder="Max price" />
      </Fragment>
    </Wrapper>
  );
  return (
    <Container>
      <Input
        pl={"50px"}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      >
        <SearchHome />
      </Input>
      <Popover trigger="click" placement="bottomRight" content={content}>
        <div>
          <Button type={"secondary"} width={"131px"}>
            <Icon.Setting /> Advanced
          </Button>
        </div>
      </Popover>
      <Button type={"primary"} width={"131px"}>
        <Icon.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;

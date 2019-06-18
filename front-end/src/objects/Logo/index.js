import React from "react";

import LogoPizza from "../../assets/images/Logo/LogPizza@1x.png";

import { Container, Image } from "./styles";

const Logo = ({ height }) => (
  <Container>
    <Image src={LogoPizza} height={height} />
  </Container>
);

export default Logo;

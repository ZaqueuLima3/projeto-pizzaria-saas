import React from "react";

import Order from "../Order";

import { Container, Title } from "./styles";

const OrderList = () => (
  <Container>
    <Title>Últimos Pedidos</Title>
    <Order />
    <Order />
  </Container>
);

export default OrderList;

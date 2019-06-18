import React from "react";

import Item from "../Item";

import {
  Container,
  HeaderOrder,
  TitleOrder,
  TimeOrder,
  PriceOrder,
  BodyOrder,
  FooterOrder
} from "./styles";

const Order = () => (
  <Container>
    <HeaderOrder>
      <TitleOrder>Pedido # 3 - Zaqueu Lima Dos Santos</TitleOrder>
      <TimeOrder>há 6 minutos</TimeOrder>
      <PriceOrder>R$42,00</PriceOrder>
    </HeaderOrder>

    <BodyOrder>
      <Item />
      <Item />
    </BodyOrder>

    <FooterOrder>
      <p>
        <span>Observações:</span> Favor colocar queijo extra
      </p>
    </FooterOrder>
  </Container>
);

export default Order;

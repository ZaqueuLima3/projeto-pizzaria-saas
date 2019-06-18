import React, { Component } from "react";

import Header from "../../components/Header";
import OrderList from "../../components/OrderList";

import { Container, SectionOrderList } from "./styles";

const Home = () => (
  <Container>
    <Header />
    <SectionOrderList>
      <OrderList />
    </SectionOrderList>
  </Container>
);

export default Home;

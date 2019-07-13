import React from 'react';

import Header from '../../components/Header';
import Item from '../../components/Item';

import { View, Text } from 'react-native';

import { Container, Content } from './styles';

const Main = () => (
  <Container>
    <Header title="Pizzaria Don Juan" bag={true} />
    <Content>
      <Item />
      <Item />
    </Content>
  </Container>
);

export default Main;

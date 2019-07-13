import React from 'react';

import Header from '../../components/Header';
import Flavor from '../../components/Flavor';

import { View } from 'react-native';

import { Container, Content } from './styles';

const Types = () => (
  <Container>
    <Header title="Selecione um tipo" />
    <Content>
      <Flavor title="Portuguesa" />
      <Flavor title="Calabresa" />
      <Flavor title="Frango Frito" />
      <Flavor title="Marguerita" />
    </Content>
  </Container>
);

export default Types;

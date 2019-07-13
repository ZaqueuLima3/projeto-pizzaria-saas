import React from 'react';

import Header from '../../components/Header';
import Size from '../../components/Size';

import { View } from 'react-native';

import { Container, Content } from './styles';

import big from '../../assets/images/Sizes/tamanho-gg.png';

const Sizes = () => (
  <Container>
    <Header title="Selecione um tamanho" />
    <Content>
      <Size img={big} title="Gigante" price="R$76,00" />
      <Size title="Grande" price="R$59,00" />
      <Size title="Média" price="R$42,00" />
      <Size title="Pequena" price="R$29,00" />
    </Content>
  </Container>
);

export default Sizes;

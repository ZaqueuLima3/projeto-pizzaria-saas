import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductTime,
  ProductTimeText,
} from './styles';

import pizza from '../../assets/images/Tipes/pizzas.png';

const Item = () => (
  <Container>
    <ProductImage source={pizza} />
    <ProductInfo>
      <ProductTitle>Pizzas</ProductTitle>
      <ProductDescription>
        Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
      </ProductDescription>
      <ProductTime>
        <ProductTimeText>25 mins</ProductTimeText>
      </ProductTime>
    </ProductInfo>
  </Container>
);

export default Item;

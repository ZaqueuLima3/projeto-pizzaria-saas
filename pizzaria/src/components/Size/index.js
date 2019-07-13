import React from 'react';

import { View } from 'react-native';

import { Container, ProductImage, ProductTitle, ProductPrice } from './styles';
import image from '../../assets/images/Sizes/tamanho-m.png'
const Size = ({ title, price, img }) => (
  <Container>
    <ProductImage source={img || image} />
    <ProductTitle>
      {title}
    </ProductTitle>
    <ProductPrice>
      {price}
    </ProductPrice>
  </Container>
);

export default Size;

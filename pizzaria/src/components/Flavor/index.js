import React from 'react';

import { View } from 'react-native';

import { Container, ProductImage, ProductTitle } from './styles';
import image from '../../assets/images/Products/1.png'
const Flavor = ({ title }) => (
  <Container>
    <ProductImage source={image} />
    <ProductTitle>
      {title}
    </ProductTitle>
  </Container>
);

export default Flavor;

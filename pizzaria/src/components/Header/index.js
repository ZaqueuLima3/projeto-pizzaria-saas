import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StatusBar, Image } from 'react-native';

import { Container, ImageBackground, ImageHeader, Title, Bag, NewOrder, ContentOrders, ContentMain, IconHeader} from './styles';

import headerBackground from "../../assets/images/HeaderBackground/header-background.png";
import bagImg from "../../assets/images/Bag/Bag.png";
import historyIcon from '../../assets/images/historyIcon/history.png';

const Header = ({title, bag}) => (
  <Container>
    <StatusBar backgroundColor="#0B2031" barStyle="light-content" />
    <ImageBackground source={headerBackground}>
      { bag ? (
        <ContentMain>
          <ImageHeader source={historyIcon} />
          <Title>{title}</Title>
          <Bag>
            <NewOrder />
            <Image source={bagImg} height={30} />
          </Bag>
        </ContentMain>
      ):(
        <ContentOrders>
          {/* <IconHeader source={historyIcon} /> */}
          <Icon name="arrow-left" size={25} />
          <Title>{title}</Title>
        </ContentOrders>
      )}
    </ImageBackground>
  </Container>
);

export default Header;

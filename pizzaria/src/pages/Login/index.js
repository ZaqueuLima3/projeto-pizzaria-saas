import React from "react";

import { Text, Image } from "react-native";

import {
  Container,
  ImageBackground,
  Form,
  Logo,
  InputDefault,
  ButtonDefault,
  TextButton
} from "./styles";

import image from '../../assets/images/Background/fundo.jpg';
import logo from '../../assets/images/Logo/logo.png';

const Login = () => (
  <Container>
    <ImageBackground source={image}>
      <Form>
        <Logo source={logo} />
        <InputDefault placeholder="Seu e-mail" />
        <InputDefault placeholder="Senha secreta" />
        <ButtonDefault>
          <TextButton>Entrar</TextButton>
        </ButtonDefault>
        <TextButton>Criar conta gratuita</TextButton>
      </Form>
    </ImageBackground>
  </Container>
);

export default Login;

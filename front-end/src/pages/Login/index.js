import React from "react";

import FormInput from "../../objects/FormInput";
import FormBtn from "../../objects/FormBtn";
import Logo from "../../objects/Logo";

import { Container, Bg, Form } from "./styles";

const Login = () => (
  <Container>
    <Bg>
      <Form>
        <Logo height={50} />
        <FormInput type="email" name="email" placeholder="Seu e-mail" />
        <FormInput
          type="password"
          name="password"
          placeholder="Senha secreta"
        />
        <FormBtn>Entrar</FormBtn>
      </Form>
    </Bg>
  </Container>
);

export default Login;

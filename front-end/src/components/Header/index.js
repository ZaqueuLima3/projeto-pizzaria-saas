import React from "react";

import Logo from "../../objects/Logo";
import BagImg from "../../assets/images/Bag/Bag@1x.png";

import {
  Container,
  LogoContent,
  LogoTitle,
  AdminInfos,
  Admin,
  AdminName,
  Bag,
  NewOrder
} from "./styles";

const Header = () => (
  <Container>
    <LogoContent>
      <Logo height={30} />
      <LogoTitle>Pizzaria Don Juan</LogoTitle>
    </LogoContent>
    <AdminInfos>
      <Admin>
        <AdminName>Zaqueu lima</AdminName>
        <h4>Sair do app</h4>
      </Admin>

      <Bag>
        <NewOrder />
        <img src={BagImg} height={20} />
      </Bag>
    </AdminInfos>
  </Container>
);

export default Header;

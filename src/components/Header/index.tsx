import {
  Bar,
  HeaderContainer,
  HeaderItem,
  ImgLogo,
  LoginBar,
  Menu,
  NavBar,
} from "./style";
import Logo from "../../assets/motors-shop.svg";
import { Button } from "../Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <ImgLogo src={Logo} />
      <NavBar>
        <Menu>
          <HeaderItem>Carros</HeaderItem>
          <HeaderItem>Motos</HeaderItem>
          <HeaderItem>Leilão</HeaderItem>
        </Menu>
        <LoginBar>
          <Bar />
          <HeaderItem>Fazer Login</HeaderItem>
          <Button
            textStyle="button-big-text"
            content="Cadastrar"
            borderColor="grey4"
          />
        </LoginBar>
      </NavBar>
    </HeaderContainer>
  );
};

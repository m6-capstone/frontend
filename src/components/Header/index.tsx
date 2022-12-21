import {
  Bar,
  HeaderContainer,
  HeaderItem,
  ImgLogo,
  Menu,
  NavBar,
} from "./style";
import Logo from "../../assets/motors-shop.svg";
import { Button } from "../Button";
import { useMediaQuery } from "usehooks-ts";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <ImgLogo src={Logo} />
        {isDesktop ? (
          <NavBar>
            <Menu>
              <HeaderItem>Carros</HeaderItem>
              <HeaderItem>Motos</HeaderItem>
              <HeaderItem>Leilão</HeaderItem>
              <Bar />
              <HeaderItem>Fazer Login</HeaderItem>
              <Button
                textStyle="button-big-text"
                content="Cadastrar"
                borderColor="grey4"
              />
            </Menu>
          </NavBar>
        ) : (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <MdClose size={"1.5em"} />
            ) : (
              <MdMenu size={"1.5em"} />
            )}
          </button>
        )}
      </HeaderContainer>
      {isMenuOpen && !isDesktop && <MenuMobile />}
    </>
  );
};

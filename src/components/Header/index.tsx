import {
  Bar,
  DropdownMenuContent,
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
import { useContext, useEffect, useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import { logout } from "../../store/User/User.store";
import { UserContext } from "../../contexts/User/UserContext";
import DropdownMenu from "../DropDown";
import { OwnerIcon } from "../CarrosselCarrosMotos/style";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userData, userLogout, isLoggedIn } = useContext(UserContext);

  const switchMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/home">
          <ImgLogo src={Logo} />
        </Link>
        {isDesktop ? (
          <NavBar>
            <Menu>
              <Link to="/home/carros">
                <HeaderItem>Carros</HeaderItem>
              </Link>

              <Link to="/home/motos">
                <HeaderItem>Motos</HeaderItem>
              </Link>

              <Link to="/home/leilao">
                <HeaderItem>Leilão</HeaderItem>
              </Link>
              <Bar />

              {isLoggedIn ? (
                <>
                  <DropdownMenu>
                    <Link to="/myprofile">
                      <DropdownMenuContent>
                        <OwnerIcon backgroundColor={"brand1"}>
                          {userData.name[0]}
                        </OwnerIcon>
                        <HeaderItem>{userData.name}</HeaderItem>
                      </DropdownMenuContent>
                    </Link>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <HeaderItem>Login</HeaderItem>
                  </Link>
                  <Link to="/register">
                    <Button
                      textStyle="button-big-text"
                      content="Cadastrar"
                      borderColor="grey4"
                    />
                  </Link>
                </>
              )}
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

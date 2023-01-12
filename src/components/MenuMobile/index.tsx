import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User/UserContext";
import { Button } from "../Button";
import { HeaderItem, Menu } from "../Header/style";
import { MenuMobileContainer, MobileSeparator } from "./style";

export const MenuMobile = () => {
  const { userData, isLoggedIn, userLogout } = useContext(UserContext);

  return (
    <>
      <MenuMobileContainer>
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
        </Menu>
        <MobileSeparator />
        <Menu>
          {isLoggedIn ? (
            <>
              <Link to="/myprofile">
                <HeaderItem>{userData.name}</HeaderItem>
              </Link>
              <Button
                textStyle="button-big-text"
                content="Logout"
                borderColor="alert1"
                color="alert1"
                onClick={() => {
                  userLogout();
                }}
              />
            </>
          ) : (
            <>
              <Link to="/login">
                <HeaderItem>Fazer Login</HeaderItem>
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
      </MenuMobileContainer>
    </>
  );
};

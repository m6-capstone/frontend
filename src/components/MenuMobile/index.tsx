import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../store/User/User.store";
import { Button } from "../Button";
import { HeaderItem, Menu } from "../Header/style";
import { MenuMobileContainer, MobileSeparator } from "./style";

export const MenuMobile = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
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
          {userInfo ? (
            <>
              <HeaderItem>{userInfo.name}</HeaderItem>
              <Button
                textStyle="button-big-text"
                content="Logout"
                borderColor="alert1"
                color="alert1"
                onClick={() => dispatch(logout())}
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

import { Button } from "../Button";
import { HeaderItem, Menu } from "../Header/style";
import { MenuMobileContainer, MobileSeparator } from "./style";

export const MenuMobile = () => {
  return (
    <>
      <MenuMobileContainer>
        <Menu>
          <HeaderItem>Carros</HeaderItem>
          <HeaderItem>Motos</HeaderItem>
          <HeaderItem>Leilão</HeaderItem>
        </Menu>
        <MobileSeparator />
        <Menu>
          <HeaderItem>Fazer Login</HeaderItem>
          <Button
            textStyle="button-big-text"
            content="Cadastrar"
            borderColor="grey4"
          />
        </Menu>
      </MenuMobileContainer>
    </>
  );
};

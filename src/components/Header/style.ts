import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.grey6};
  background-color: ${(p) => p.theme.colors.grey10};

  @media (min-width: 768px) {
    padding: 0 60px;
  }
`;

export const LogoContainer = styled.div``;

export const ImgLogo = styled.img``;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 44px;

    flex-direction: row;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 44px;
  flex-direction: column;
  padding: 32px 0;

  a {
    width: 100%;
  }

  button {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: unset;
  }

  @media (min-width: 1024px) {
    gap: 44px;
  }
`;

export const HeaderItem = styled.li`
  ${(props) => props.theme.typography.text["body-1-600"]}
  color: ${(props) => props.theme.colors.grey2};

  cursor: pointer;

  width: 100%;
  &:hover {
    color: ${(props) => props.theme.colors.brand1};
  }
`;

export const Bar = styled.div`
  width: 2px;
  height: 80px;

  background-color: ${(props) => props.theme.colors.grey6};
`;

export const DropdownMenuContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

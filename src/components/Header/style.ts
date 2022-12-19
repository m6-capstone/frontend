import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.grey6};
  background-color: ${(p) => p.theme.colors.grey10};
`;

export const LogoContainer = styled.div``;

export const ImgLogo = styled.img``;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 44px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 44px;
`;

export const HeaderItem = styled.li`
  ${(props) => props.theme.typography.text["body-1-600"]}
  color: ${(props) => props.theme.colors.grey2};

  cursor: pointer;
`;

export const Bar = styled.div`
  width: 2px;
  height: 80px;

  background-color: ${(props) => props.theme.colors.grey6};
`;

export const LoginBar = styled.ul`
  display: flex;
  align-items: center;
  gap: 44px;
`;

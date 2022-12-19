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
  gap: 44px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 44px;
  flex-direction: column;
  padding: 32px 0;

  button {
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    padding: unset;
  }
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

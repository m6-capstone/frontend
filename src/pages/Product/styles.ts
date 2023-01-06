import styled from "styled-components";

interface IAside {
  props: {
    isMobile: boolean;
    isDesktop: boolean;
  };
}

interface IContainer {
  props: {
    isDesktop: boolean;
  };
}

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 46px;

    padding: 44px 60px 73px 60px;

    ${(props) =>
      `background: linear-gradient(
      180deg,
      ${props.theme.colors.brand1} 31.25%,
      ${props.theme.colors.grey8} 31.26%,
      ${props.theme.colors.grey8} 100%
    );`}
  }
`;

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 32px;

  ${(p) => (p.props.isDesktop ? { display: "none" } : "")};

  background-color: ${(props) => props.theme.colors.grey8};
  position: relative;
  top: -50px;
  min-width: 350px;
  width: 93.5%;

  @media (min-width: 768px) {
    position: unset;
    width: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 32px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey8};

  @media (min-width: 768px) {
    width: 752px;
    background-color: unset;
  }
`;

export const Aside = styled.aside<IAside>`
  width: 440px;
  ${(p) => (p.props.isMobile ? { display: "none" } : "")};
  ${(p) => (p.props.isDesktop ? { display: "block" } : "")};

  display: "none";

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
`;

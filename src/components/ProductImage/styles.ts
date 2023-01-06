import styled from "styled-components";

interface IImage {
  props: {
    isTablet: boolean;
  };
}

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 45px 16px 36px 16px;

  background-color: ${(p) => p.theme.colors.brand1};

  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const ImageWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.grey10};
  width: calc(93% + 32px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img<IImage>`
  background-color: ${(props) => props.theme.colors.grey10};
  min-width: 350px;
  width: 100%;
  height: 350px;
  border-radius: 4px;
  ${(p) => (p.props.isTablet ? { width: "652px", height: "355px" } : "")};
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 441px;
  }
`;
